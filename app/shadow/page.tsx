"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { GhostMark } from "./ghost";

/* ─────────────────────────────────────────────────────────────
   Waitlist form — posts to Formspree, no page reload
   ───────────────────────────────────────────────────────────── */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzdepaa";

function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="sh-mono text-[0.8125rem] text-[var(--sh-blue-lit)]">
        You&rsquo;re on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[26rem] flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="you@example.com"
        className="sh-mono w-full rounded-lg border px-4 py-3 text-[0.875rem] text-[var(--sh-text)] outline-none transition-colors placeholder:text-[var(--sh-muted)] focus:border-[var(--sh-blue-lit)]"
        style={{ background: "var(--sh-input)", borderColor: "var(--sh-line)" }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="sh-mono shrink-0 rounded-lg px-5 py-3 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#0D1117] transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ background: "var(--sh-blue-lit)" }}
      >
        {status === "loading" ? "Sending…" : "Join the pilot"}
      </button>
      {status === "error" && (
        <p className="sh-mono text-[0.75rem] text-[#93A2B8]">
          Something went wrong &mdash; try again.
        </p>
      )}
    </form>
  );
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */

export default function ShadowPage() {
  const reduced = useReducedMotion();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="mx-auto w-full max-w-[960px] px-6 sm:px-8">
        {/* ── Masthead ─────────────────────────────────────────── */}
        <header className="flex items-center justify-between py-7">
          <div className="flex items-center gap-2.5">
            <GhostMark size={20} />
            <span className="text-[1.0625rem] font-semibold tracking-tight">
              Shadow
            </span>
          </div>
          <span className="sh-mono text-[0.625rem] uppercase tracking-[0.16em] text-[var(--sh-muted)]">
            Mealing Labs
          </span>
        </header>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="grid items-center gap-10 pb-20 pt-12 md:grid-cols-2 md:gap-16 md:pt-20">
          <motion.div
            className="relative mx-auto w-[min(240px,68vw)] aspect-[1419/2796] md:mx-0 md:w-full md:max-w-[300px]"
            style={{ filter: "drop-shadow(0 0 70px rgba(58,123,213,0.28))" }}
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduced ? 0 : 0.8,
              delay: reduced ? 0 : 0.2,
            }}
          >
            <Image
              src="/images/shadow/dashboard-portrait.png"
              alt="Shadow's home screen: last week's ghost beside this week's, with strength, consistency and intensity rings below"
              fill
              sizes="(max-width: 768px) 68vw, 300px"
              className="object-contain"
              priority
            />
          </motion.div>

          <div className="flex flex-col items-center gap-7 text-center md:items-start md:text-left">
            <motion.span
              className="sh-eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduced ? 0 : 0.6 }}
            >
              Computer vision · Workout tracking
            </motion.span>

            <motion.h1
              className="sh-display text-[clamp(2.4rem,5.2vw,3.8rem)] max-w-[13ch]"
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduced ? 0 : 0.85,
                delay: reduced ? 0 : 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              The only opponent is last week&rsquo;s you
            </motion.h1>

            <motion.p
              className="max-w-[42ch] text-[1.0625rem] leading-relaxed text-[#A9B6C9]"
              initial={{ opacity: 0, y: reduced ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduced ? 0 : 0.7,
                delay: reduced ? 0 : 0.28,
              }}
            >
              Shadow watches your set through your phone camera, counts the reps
              itself, and puts this week beside last week.
            </motion.p>

            <motion.div
              className="flex w-full flex-col items-center gap-3 pt-2 md:items-start"
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduced ? 0 : 0.7,
                delay: reduced ? 0 : 0.45,
              }}
            >
              <WaitlistForm />
            </motion.div>
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────────── */}
        <footer
          className="flex flex-wrap items-center justify-between gap-5 border-t py-10"
          style={{ borderColor: "var(--sh-line)" }}
        >
          <div className="flex items-center gap-2.5">
            <GhostMark size={17} />
            <span className="text-[0.9375rem] font-medium">Shadow</span>
            <span className="sh-mono text-[0.6875rem] text-[var(--sh-muted)]">
              by Mealing Labs
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="/shadow/privacy-policy"
              className="sh-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[var(--sh-muted)] transition-colors hover:text-[var(--sh-blue-lit)]"
            >
              Privacy
            </a>
            <a
              href="/"
              className="sh-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[var(--sh-muted)] transition-colors hover:text-[var(--sh-blue-lit)]"
            >
              Florian Mealing
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
