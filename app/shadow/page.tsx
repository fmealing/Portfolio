"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { joinEarlyAccess } from "./actions";
import { checkContact, CONTACT_REQUIRED } from "./contact";

/* ─────────────────────────────────────────────────────────────
   Early-access form — a server action writes the row to a
   Google Sheet, no page reload
   ───────────────────────────────────────────────────────────── */

type Status = "idle" | "loading" | "done" | "error";

type Feedback = {
  tone: "hint" | "ok" | "error";
  text: string;
  /** Offered as a one-tap fix when the text is a handle missing its @. */
  handle?: string;
};

const TONE = {
  hint: "text-[var(--sh-muted)]",
  ok: "text-[var(--sh-blue-deep)]",
  error: "text-[var(--sh-error)]",
};

// Gyms and studios are a conversation, not a row in the Sheet.
const OWNER_MAILTO =
  "mailto:mealinglabs@gmail.com?subject=Shadow%20at%20my%20gym";

/** Where the build is shared. Offered once someone is on the list. */
const FOLLOW = [
  { label: "Instagram", href: "https://www.instagram.com/mealing.labs/" },
  { label: "TikTok", href: "https://www.tiktok.com/@mealing.labs" },
];

// A shared link can say where it was shared: /shadow?src=instagram. The page
// is prerendered, so the tag is only known once it is in a browser.
const readSrc = () =>
  new URLSearchParams(window.location.search).get("src") ?? "";
const noSrc = () => "";
const never = () => () => {};

function EarlyAccessForm() {
  const reduced = useReducedMotion();
  const contactRef = useRef<HTMLInputElement>(null);
  const src = useSyncExternalStore(never, readSrc, noSrc);

  const [status, setStatus] = useState<Status>("idle");
  const [value, setValue] = useState("");
  // Guidance stays gentle until they leave the field or try to submit.
  const [touched, setTouched] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [contact, setContact] = useState("");
  // On a phone the gym question waits until the first field is in use, so
  // the form opens as one field and one button. It never closes again.
  const [started, setStarted] = useState(false);

  const check = checkContact(value);

  let feedback: Feedback | null = null;
  if (contactError) {
    feedback = { tone: "error", text: contactError };
  } else if (check.status === "valid") {
    feedback = { tone: "ok", text: check.note };
  } else if (check.status === "invalid") {
    feedback = { tone: "error", text: check.problem };
  } else if (check.status === "incomplete") {
    feedback = touched
      ? { tone: "error", text: check.problem, handle: check.handle }
      : { tone: "hint", text: check.note };
  } else if (touched) {
    feedback = { tone: "error", text: CONTACT_REQUIRED };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (check.status !== "valid") {
      setTouched(true);
      contactRef.current?.focus();
      return;
    }

    const form = e.currentTarget;
    setStatus("loading");
    setFormError(null);

    try {
      const result = await joinEarlyAccess(new FormData(form));
      if (result.ok) {
        setContact(result.contact);
        setStatus("done");
      } else {
        if (result.field === "contact") setContactError(result.error);
        else setFormError(result.error);
        setStatus("error");
      }
    } catch {
      setFormError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  const done = status === "done";

  return (
    <div
      className="sh-form-box grid grid-cols-1 grid-rows-[minmax(0,1fr)]"
      data-started={started ? "" : undefined}
    >
      {/* The form keeps its place once submitted so the page never jumps.
          Both share one grid cell, which only grows if the confirmation needs
          more room than the form had. */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className={`relative col-start-1 row-start-1 flex flex-col gap-[var(--sh-gap)] self-start ${done ? "invisible" : ""}`}
      >
        <div>
          <label htmlFor="sh-contact" className="sr-only">
            Email address or Instagram handle
          </label>
          <input
            ref={contactRef}
            id="sh-contact"
            name="contact"
            type="text"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            required
            maxLength={254}
            placeholder="Email or @instagram"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setContactError(null);
              setStarted(true);
            }}
            onFocus={() => setStarted(true)}
            onBlur={() => value.trim() && setTouched(true)}
            aria-invalid={feedback?.tone === "error"}
            aria-describedby="sh-contact-feedback"
            className="sh-field"
          />

          {/* Always in the DOM, so a screen reader hears the feedback change. */}
          <div id="sh-contact-feedback" aria-live="polite">
            <AnimatePresence initial={false}>
              {feedback && (
                <motion.div
                  key="feedback"
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: reduced ? 0 : 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p
                    className={`flex flex-wrap items-center gap-x-1.5 px-1 pt-1.5 text-[0.8125rem] leading-snug ${TONE[feedback.tone]}`}
                  >
                    {feedback.tone === "ok" && (
                      <svg
                        width="12"
                        height="10"
                        viewBox="0 0 18 14"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="m1.5 7.5 5 5 10-11"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    <span>{feedback.text}</span>
                    {feedback.handle && (
                      <button
                        type="button"
                        onClick={() => {
                          setValue(feedback.handle!);
                          contactRef.current?.focus();
                        }}
                        className="font-medium underline underline-offset-2"
                      >
                        Use {feedback.handle}
                      </button>
                    )}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="sh-later">
          <div>
            <label htmlFor="sh-gym" className="sr-only">
              Your gym and city (optional)
            </label>
            <input
              id="sh-gym"
              name="gym"
              type="text"
              autoComplete="organization"
              maxLength={120}
              placeholder="Your gym and city (optional)"
              className="sh-field"
            />
          </div>
        </div>

        <input type="hidden" name="src" value={src} />

        {/* Honeypot. Hidden from people, irresistible to bots. */}
        <div aria-hidden className="absolute h-0 w-0 overflow-hidden">
          <label htmlFor="sh-website">Website</label>
          <input
            id="sh-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="sh-cta"
        >
          {status === "loading" ? "Sending…" : "Get early access"}
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            aria-hidden
          >
            <path
              d="M1 7h13M8.5 1.5 14 7l-5.5 5.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* On wide screens the hero is vertically centred, so the message
            floats below the form rather than pushing the column up. */}
        {formError && (
          <p
            id="sh-form-error"
            role="alert"
            className="px-1 pt-1 text-[0.875rem] leading-snug text-[var(--sh-error)] lg:absolute lg:inset-x-0 lg:top-full lg:pt-3"
          >
            {formError}
          </p>
        )}

        <p className="sh-note text-center lg:px-1 lg:text-left">
          Run a gym or studio?{" "}
          <a href={OWNER_MAILTO} className="sh-link">
            Get in touch
          </a>
        </p>
      </form>

      {done && (
        <motion.div
          role="status"
          className="col-start-1 row-start-1 flex flex-col justify-center gap-3 rounded-2xl border px-6 py-4"
          style={{
            background: "var(--sh-surface)",
            borderColor: "var(--sh-line)",
          }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full text-white"
            style={{ background: "var(--sh-action)" }}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
              <path
                d="m1.5 7.5 5 5 10-11"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="text-[1.375rem] font-bold leading-tight tracking-[-0.01em]">
            You&rsquo;re on the list.
          </p>
          <p className="text-[0.9375rem] leading-snug text-[var(--sh-muted)]">
            We&rsquo;ll reach out to{" "}
            <span className="break-all font-medium text-[var(--sh-ink)]">
              {contact}
            </span>{" "}
            when early access opens.
          </p>

          <div
            className="mt-1 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t pt-3"
            style={{ borderColor: "var(--sh-line)" }}
          >
            <p className="sh-eyebrow text-[0.75rem] text-[var(--sh-muted)]">
              Follow the build
            </p>
            <ul className="flex gap-x-4">
              {FOLLOW.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sh-link text-[0.9375rem]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */

export default function ShadowPage() {
  const reduced = useReducedMotion();

  // One load sequence: wordmark, words, form, then the stations arrive.
  const rise = (delay: number, y = 16) => ({
    initial: { opacity: 0, y: reduced ? 0 : y },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduced ? 0 : 0.8,
      delay: reduced ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <div className="mx-auto flex min-h-[100svh] w-full max-w-[30rem] flex-col overflow-x-hidden px-[1.625rem] lg:max-w-[1292px] lg:px-12">
      {/* ── Masthead ─────────────────────────────────────────── */}
      <motion.header
        className="sh-masthead flex items-center gap-2 pt-6 lg:gap-3 lg:pl-1 lg:pt-[1.9375rem]"
        {...rise(0, 0)}
      >
        <Image
          src="/images/shadow/Shadow.svg"
          alt=""
          width={180}
          height={192}
          priority
          className="h-[1.4375rem] w-auto lg:h-[1.625rem]"
        />
        <span className="text-[1.3125rem] font-bold leading-none text-[var(--sh-blue)] lg:text-[1.5rem]">
          Shadow
        </span>
      </motion.header>

      {/* ── Hero ─────────────────────────────────────────────── */}
      {/* On wide screens the padding is only a floor: the hero is centred in
          whatever room the window has, and a short window has little. */}
      <main className="grid flex-1 content-center pb-[1.875rem] pt-[1.1875rem] lg:grid-cols-[448px_minmax(0,1fr)] lg:gap-x-12 lg:pb-3 lg:pt-5">
        <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
          <motion.p
            className="sh-eyebrow text-[0.75rem] lg:text-[0.8125rem] lg:text-[var(--sh-blue-deep)]"
            {...rise(0.08, 10)}
          >
            Smart gym screen · Early access
          </motion.p>

          <motion.h1
            className="sh-display mt-[7px] whitespace-nowrap text-[clamp(2.75rem,12.94vw,3.25rem)] lg:-ml-1 lg:mt-[9px] lg:text-[clamp(4rem,min(5.57vw,10.5svh),5.09375rem)]"
            {...rise(0.16)}
          >
            Get Workout
            <br />
            Insights.
          </motion.h1>

          <motion.p
            className="sh-lede mt-3 text-[clamp(0.9375rem,4.1vw,1rem)] lg:mt-5 lg:text-[1.1875rem]"
            {...rise(0.22)}
          >
            A smart screen for the gym floor. It counts your reps, checks your
            range of motion and tells you when you&rsquo;re slowing down.
          </motion.p>
        </div>

        {/* Ahead of the stations in the source, so on a phone you reach the
            form first. Wide screens place both by grid position instead. */}
        <motion.div
          className="mt-5 lg:col-start-1 lg:row-start-2 lg:mt-8 lg:self-start"
          {...rise(0.28)}
        >
          <EarlyAccessForm />
        </motion.div>

        {/* On wide screens the stations shrink with the window's height, so
            the whole hero stays on one screen. 1.0987 is the art's aspect. */}
        <motion.div
          className="mt-5 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:w-[min(678px,100%,calc((100svh_-_12.5rem)_*_1.0987))] lg:self-center lg:justify-self-end"
          {...rise(0.42, 28)}
        >
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/shadow-station/Stations-Web.svg"
              width={668}
              height={608}
            />
            <img
              src="/shadow-station/Stations-Mobile.svg"
              alt="Three Shadow stations. Two show a live set with a skeleton overlay and a rep count; the middle one shows a set summary with reps, peak joint angles, fatigue and an angle chart."
              width={346}
              height={378}
              fetchPriority="high"
              className="h-auto w-full"
            />
          </picture>
        </motion.div>
      </main>

      {/* ── Footer ───────────────────────────────────────────── */}
      <motion.footer
        className="sh-credit sh-quiet pb-5 text-center text-[0.8125rem] text-[var(--sh-muted)] lg:pb-8 lg:text-left"
        {...rise(0.6, 0)}
      >
        Built in Birmingham by{" "}
        <Link href="/" className="transition-colors hover:text-[var(--sh-blue)]">
          Florian Mealing
        </Link>
      </motion.footer>
    </div>
  );
}
