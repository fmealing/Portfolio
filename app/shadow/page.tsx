"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Ghost, { GhostMark } from "./ghost";
import { buildPlot, REPS, SET, SET_WEIGHT_KG } from "./signal";

/* ─────────────────────────────────────────────────────────────
   Shared pieces
   ───────────────────────────────────────────────────────────── */

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

/**
 * SVG presentation attributes cannot reliably resolve var(), so the tokens
 * that end up on shapes are repeated here as literals. Same values as the
 * custom properties in layout.tsx.
 */
const T = {
  blue: "#3A7BD5",
  blueLit: "#5BA3F5",
  slate: "#6B7688",
  muted: "#4A6080",
  lineLit: "rgba(58,123,213,0.34)",
} as const;

function Section({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      className="flex flex-col gap-8 py-16 md:py-24"
      variants={rise}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col gap-6">
        <hr className="sh-rule" />
        <span className="sh-eyebrow">{eyebrow}</span>
      </div>
      {children}
    </motion.section>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="sh-display text-[clamp(1.9rem,5vw,3.1rem)] max-w-[18ch]">
      {children}
    </h2>
  );
}

/** One short line under a heading. Never more than a sentence or two. */
function Lede({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-[56ch] text-[1.0625rem] leading-relaxed text-[#A9B6C9]">
      {children}
    </p>
  );
}

/* ─────────────────────────────────────────────────────────────
   Weekly metric ring, the app's Home-screen readout
   ───────────────────────────────────────────────────────────── */

const R = 34;
const C = 2 * Math.PI * R;

function Ring({
  label,
  value,
  arc,
  ahead,
  delay,
}: {
  label: string;
  value: string;
  arc: number;
  ahead: boolean;
  delay: number;
}) {
  const reduced = useReducedMotion();
  const tone = ahead ? T.blue : T.slate;

  return (
    <div className="flex flex-col items-center gap-3">
      <span
        className="sh-mono text-[0.625rem] tracking-[0.14em] uppercase"
        style={{ color: ahead ? "var(--sh-blue-lit)" : "var(--sh-slate)" }}
      >
        {label}
      </span>
      <div className="relative">
        <svg width="82" height="82" viewBox="0 0 82 82">
          <circle
            cx="41"
            cy="41"
            r={R}
            fill="none"
            stroke="rgba(107,118,136,0.18)"
            strokeWidth="4"
          />
          <motion.circle
            cx="41"
            cy="41"
            r={R}
            fill="none"
            stroke={tone}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={C}
            transform="rotate(-90 41 41)"
            initial={{ strokeDashoffset: reduced ? C * (1 - arc / 100) : C }}
            animate={{ strokeDashoffset: C * (1 - arc / 100) }}
            transition={{
              duration: reduced ? 0 : 1.1,
              delay: reduced ? 0 : delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </svg>
        <span
          className="sh-mono absolute inset-0 grid place-items-center text-[0.95rem] font-medium"
          style={{ color: ahead ? "var(--sh-text)" : "var(--sh-slate)" }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Hero panel: the ghost pair, exactly as the app shows it
   ───────────────────────────────────────────────────────────── */

function GhostPair() {
  const reduced = useReducedMotion();

  return (
    <div className="sh-card px-5 py-9 sm:px-10 sm:py-11 flex flex-col gap-9 w-full">
      <div className="flex items-end justify-center gap-8 sm:gap-16">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.1 }}
        >
          <Ghost size={82} consistency={80} unformed title="Your shadow, last week" />
          <span className="sh-mono text-[0.625rem] tracking-[0.14em] uppercase text-[var(--sh-slate)]">
            Last week
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: reduced ? 1 : 0.78 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduced ? 0 : 0.95,
            delay: reduced ? 0 : 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="relative">
            <div
              className="sh-bloom absolute -inset-6 blur-[38px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(58,123,213,0.7), transparent 68%)",
              }}
              aria-hidden
            />
            <div className="relative">
              <Ghost size={120} intensity={71} consistency={87} title="You, this week" />
            </div>
          </div>
          <span className="sh-mono text-[0.625rem] tracking-[0.14em] uppercase text-[var(--sh-blue-lit)]">
            You, now
          </span>
        </motion.div>
      </div>

      {/* The one true thing */}
      <motion.p
        className="text-center text-[0.9375rem] leading-relaxed mx-auto max-w-[42ch] rounded-2xl border px-5 py-4"
        style={{ borderColor: "var(--sh-line)", color: "#A9B6C9" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 1.1 }}
      >
        Ahead on two of three. Last week trained harder than you did.
      </motion.p>

      <div className="flex justify-center gap-7 sm:gap-14">
        <Ring label="Stronger" value="+5kg" arc={68} ahead delay={0.9} />
        <Ring label="Consistent" value="87%" arc={87} ahead delay={1.05} />
        <Ring label="Intense" value="-3" arc={71} ahead={false} delay={1.2} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   The signal: one real set, plotted
   ───────────────────────────────────────────────────────────── */

function Waveform() {
  const reduced = useReducedMotion();
  const plot = useMemo(() => buildPlot(1000, 240), []);
  const [active, setActive] = useState<number | null>(null);
  const rep = active ? REPS[active - 1] : null;

  return (
    <div className="flex flex-col gap-5">
      <div className="sh-card overflow-hidden">
        <div className="relative px-4 pt-6 sm:px-7">
          <svg
            viewBox="0 0 1000 240"
            className="w-full h-auto block"
            onMouseLeave={() => setActive(null)}
          >
            <defs>
              <linearGradient id="sh-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3A7BD5" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#3A7BD5" stopOpacity="0" />
              </linearGradient>
            </defs>

            {plot.ticks.map((t) => (
              <g key={t.angle}>
                <line
                  x1="0"
                  y1={t.y}
                  x2="1000"
                  y2={t.y}
                  stroke="rgba(107,118,136,0.14)"
                  strokeWidth="1"
                />
                <text x="6" y={t.y - 6} className="sh-mono" fontSize="11" fill={T.muted}>
                  {t.angle}°
                </text>
              </g>
            ))}

            <path d={plot.area} fill="url(#sh-fill)" />

            <motion.path
              d={plot.path}
              fill="none"
              stroke={T.blue}
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              initial={{ pathLength: reduced ? 1 : 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: reduced ? 0 : 2.4, ease: "easeInOut" }}
            />

            {/* One marker at the bottom of each rep, the deepest point */}
            {plot.spans.map((s) => (
              <g key={s.rep}>
                <circle
                  cx={s.troughX}
                  cy={s.troughY}
                  r={active === s.rep ? 5 : 3}
                  fill={active === s.rep ? T.blueLit : T.blue}
                  opacity={active && active !== s.rep ? 0.3 : 1}
                  style={{ transition: "r 140ms ease, opacity 140ms ease" }}
                />
                {active === s.rep && (
                  <line
                    x1={s.troughX}
                    y1={s.troughY}
                    x2={s.troughX}
                    y2="240"
                    stroke={T.lineLit}
                    strokeWidth="1"
                    strokeDasharray="3 4"
                  />
                )}
                <rect
                  x={s.x0}
                  y="0"
                  width={s.x1 - s.x0}
                  height="240"
                  fill="transparent"
                  onMouseEnter={() => setActive(s.rep)}
                  onFocus={() => setActive(s.rep)}
                  onClick={() => setActive(s.rep)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Rep ${s.rep}`}
                  style={{ cursor: "crosshair" }}
                />
              </g>
            ))}
          </svg>

          <div className="flex justify-between pb-4 pt-1">
            <span className="sh-mono text-[0.625rem] uppercase tracking-[0.14em] text-[var(--sh-muted)]">
              Left knee angle
            </span>
            <span className="sh-mono text-[0.625rem] uppercase tracking-[0.14em] text-[var(--sh-muted)]">
              Squat · {SET_WEIGHT_KG}kg · {plot.durationS.toFixed(1)}s
            </span>
          </div>
        </div>

        {/* Readout. Set summary until a rep is picked. */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-px"
          style={{ background: "var(--sh-line)", borderTop: "1px solid var(--sh-line)" }}
        >
          {(rep
            ? [
                ["Rep", String(rep.n)],
                ["Range of motion", `${rep.romDeg}°`],
                ["Concentric", `${rep.concentricS.toFixed(2)}s`],
                ["Angular velocity", `${rep.velocity.toFixed(1)}°/s`],
              ]
            : [
                ["Reps counted", String(SET.reps)],
                ["Mean ROM", `${SET.meanRom}°`],
                ["Mean velocity", `${SET.meanVelocity}°/s`],
                ["Fatigue index", `${SET.fatigueIndexPct}%`],
              ]
          ).map(([label, value]) => (
            <div
              key={label}
              className="flex flex-col gap-1.5 px-5 py-4"
              style={{ background: "var(--sh-card)" }}
            >
              <span className="sh-mono text-[0.625rem] uppercase tracking-[0.14em] text-[var(--sh-muted)]">
                {label}
              </span>
              <span className="sh-mono text-[1.25rem] text-[var(--sh-text)]">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="sh-mono text-[0.6875rem] text-[var(--sh-muted)]">
        {rep
          ? `Rep ${rep.n} of ${SET.reps}.`
          : `Estimated 1RM ${SET.estimated1rm}kg · Hover a rep to inspect it.`}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Content
   ───────────────────────────────────────────────────────────── */

const PIPELINE = [
  ["Pose estimation", "33 body landmarks, every frame"],
  ["Angle extraction", "One joint angle per frame, both sides"],
  ["Smoothing", "4th-order Butterworth, 5 Hz cutoff"],
  ["Peak detection", "The authoritative rep count"],
  ["Intensity", "Per-rep mechanics, set-level effort"],
];

const STEPS = [
  ["Prop your phone", "Full body in frame. A calibration screen confirms the shot before the set starts."],
  ["Do the set", "Nothing to tap, nothing to type. A counter runs live while you lift."],
  ["Get the evidence", "A second pass corrects the count, then scores depth, effort and fatigue."],
];

const METRICS = [
  {
    name: "Strength",
    nature: "Estimated 1RM, your best day that week",
    shown: "+5kg",
    ahead: "Greater than last week",
  },
  {
    name: "Intensity",
    nature: "Session-average effort, 0 to 100",
    shown: "+5",
    ahead: "Greater than last week",
  },
  {
    name: "Consistency",
    nature: "Sessions attended against sessions planned",
    shown: "You 87%, shadow 80%",
    ahead: "Matches or beats last week",
  },
];

const PHASES = [
  ["Phase 1", "Rep zero", "Your first session. Nothing to compare it to yet, and the app does not pretend otherwise."],
  ["Phase 2", "Forming", "Your ghost is visible but not racing. A bar fills toward the reveal."],
  ["Phase 3", "Revealed", "The weekly shadow goes live, and never switches off."],
];

const RIVALS = [
  ["Freeletics, Fitbod", "Tell you what to do next"],
  ["Hevy, Strong", "Store what you typed in"],
  ["Shadow", "Shows you what actually happened"],
];

const PROOF = [
  ["Verified, not self-reported", "No rep inflation, no rounding up when you lose count."],
  ["Quality, not just quantity", "Two sets can log identically and be nothing alike."],
  ["Effort you cannot feel", "How close to failure you went, measured from rep speed."],
  ["You, next to you", "Not a number beside a number. Footage of you, scored."],
];

const PRIVACY = [
  ["On device", "Pose estimation runs on your phone. No feed is streamed anywhere."],
  ["Not uploaded", "Set video stays on the phone and is deleted when you leave the review screen."],
  ["Yours to delete", "Account and history removable from the profile screen."],
];

const FREE = [
  "The weekly shadow, all three metrics",
  "Squat, bench and deadlift",
  "The post-session insight",
  "The shareable shadow card",
  "Last four weeks of history",
];

const PLUS = [
  "More windows: four weeks ago, all-time best, a PR you pick",
  "Several comparisons at once",
  "Lifts beyond the big three",
  "Deeper intensity analytics",
  "Video replay and storage",
  "Unlimited history",
];

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */

export default function ShadowPage() {
  const reduced = useReducedMotion();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1040px] px-6 sm:px-8">
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
        <section className="flex flex-col items-center gap-7 pt-12 pb-6 text-center md:pt-20">
          <motion.span
            className="sh-eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduced ? 0 : 0.6 }}
          >
            Computer vision · Workout tracking
          </motion.span>

          <motion.h1
            className="sh-display text-[clamp(2.6rem,8.5vw,5.4rem)] max-w-[13ch]"
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
            className="max-w-[48ch] text-[1.0625rem] leading-relaxed text-[#A9B6C9]"
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.28 }}
          >
            Shadow watches your set through your phone camera, counts the reps
            itself, and puts this week beside last week.
          </motion.p>

          <motion.div
            className="w-full pt-6"
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : 0.4 }}
          >
            <GhostPair />
          </motion.div>
        </section>

        {/* ── The problem ──────────────────────────────────────── */}
        <Section eyebrow="Why it exists">
          <Heading>Progress in the gym is invisible</Heading>
          <Lede>
            A column of numbers does not show change the way seeing it does. And
            without a coach&rsquo;s eye, you cannot tell whether your form or your
            effort was any good. So people plateau or quit. Not from lack of
            effort, from lack of feedback.
          </Lede>
        </Section>

        {/* ── How it works ─────────────────────────────────────── */}
        <Section eyebrow="How a set becomes evidence">
          <Heading>Three things you do. Five things it does.</Heading>

          <div className="grid gap-px sm:grid-cols-3" style={{ background: "var(--sh-line)" }}>
            {STEPS.map(([title, body]) => (
              <div
                key={title}
                className="flex flex-col gap-2.5 p-6"
                style={{ background: "var(--sh-bg)" }}
              >
                <h3 className="text-[1rem] font-semibold text-[var(--sh-text)]">
                  {title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-[#93A2B8]">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <ol className="flex flex-col pt-2">
            {PIPELINE.map(([stage, output], i) => (
              <li
                key={stage}
                className="relative flex flex-col gap-1 border-l py-3 pl-6 sm:flex-row sm:items-baseline sm:gap-6"
                style={{ borderColor: "var(--sh-line)" }}
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-[1.35rem] h-px w-3"
                  style={{ background: T.blue, opacity: 1 - i * 0.15 }}
                />
                <span className="sh-mono min-w-[12rem] text-[0.8125rem] text-[var(--sh-blue-lit)]">
                  {stage}
                </span>
                <span className="text-[0.875rem] text-[#93A2B8]">{output}</span>
              </li>
            ))}
          </ol>
        </Section>

        {/* ── The signal ───────────────────────────────────────── */}
        <Section eyebrow="What the camera sees">
          <Heading>A rep is a shape</Heading>
          <Lede>
            One set of squats. Not a number typed in afterwards, but the knee
            angle frame by frame. Every dip is a rep, and they get wider and
            shallower as the set runs on. That is fatigue.
          </Lede>

          <Waveform />

          <p className="max-w-[56ch] text-[0.9375rem] leading-relaxed text-[var(--sh-slate)]">
            Lifters underestimate how close to failure they trained by four to
            five reps. Rep-speed decay settles it, and commercial gyms buy
            dedicated hardware to measure it.
          </p>
        </Section>

        {/* ── The mechanic ─────────────────────────────────────── */}
        <Section eyebrow="The shadow">
          <Heading>Your shadow is you, one week ago</Heading>
          <Lede>
            Three metrics decide the week. Each is compared differently, because
            each behaves differently.
          </Lede>

          <div className="grid gap-4 md:grid-cols-3">
            {METRICS.map((m) => (
              <div key={m.name} className="sh-card flex flex-col gap-4 p-6">
                <h3 className="sh-display text-[1.4rem] text-[var(--sh-text)]">
                  {m.name}
                </h3>
                <p className="text-[0.875rem] leading-relaxed text-[#93A2B8]">
                  {m.nature}
                </p>
                <dl
                  className="flex flex-col gap-3 border-t pt-4"
                  style={{ borderColor: "var(--sh-line)" }}
                >
                  <div className="flex flex-col gap-1">
                    <dt className="sh-mono text-[0.5625rem] uppercase tracking-[0.16em] text-[var(--sh-muted)]">
                      Shown as
                    </dt>
                    <dd className="sh-mono text-[0.8125rem] text-[var(--sh-text)]">
                      {m.shown}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="sh-mono text-[0.5625rem] uppercase tracking-[0.16em] text-[var(--sh-muted)]">
                      Ahead when
                    </dt>
                    <dd className="sh-mono text-[0.8125rem] text-[var(--sh-blue-lit)]">
                      {m.ahead}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col gap-3 rounded-2xl border p-6 sm:flex-row sm:items-center sm:gap-8"
            style={{
              borderColor: "var(--sh-line-lit)",
              background: "rgba(58,123,213,0.05)",
            }}
          >
            <span className="sh-display text-[2.4rem] leading-none text-[var(--sh-blue)]">
              2 of 3
            </span>
            <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-[#A9B6C9]">
              You beat your shadow by being ahead on at least two of the three.
              Volume is shown alongside them, but it does not get a vote.
            </p>
          </div>
        </Section>

        {/* ── The reveal ───────────────────────────────────────── */}
        <Section eyebrow="The reveal">
          <Heading>A shadow has to be earned</Heading>
          <Lede>
            It appears after 28 days and six logged sessions. The calendar floor
            means it cannot be rushed. The session floor means it has enough data
            to mean anything.
          </Lede>

          <ol className="flex flex-col gap-px" style={{ background: "var(--sh-line)" }}>
            {PHASES.map(([n, title, body], i) => (
              <li
                key={n}
                className="flex items-start gap-5 p-6 sm:gap-10"
                style={{ background: "var(--sh-bg)" }}
              >
                <div className="flex shrink-0 items-center gap-4 sm:w-44">
                  <Ghost
                    size={28}
                    unformed={i < 2}
                    intensity={i === 2 ? 78 : 0}
                    consistency={i === 0 ? 24 : i === 1 ? 58 : 100}
                  />
                  <span className="sh-mono hidden text-[0.625rem] uppercase tracking-[0.16em] text-[var(--sh-muted)] sm:inline">
                    {n}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[1rem] font-semibold">{title}</h3>
                  <p className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-[#93A2B8]">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* ── Positioning ──────────────────────────────────────── */}
        <Section eyebrow="What it is not">
          <Heading>It never tells you what to do next</Heading>

          <ul className="flex flex-col">
            {RIVALS.map(([who, what], i) => {
              const isShadow = i === RIVALS.length - 1;
              return (
                <li
                  key={who}
                  className="flex flex-col gap-1 border-b py-5 sm:flex-row sm:items-baseline sm:gap-10"
                  style={{ borderColor: "var(--sh-line)" }}
                >
                  <span
                    className="sh-mono min-w-[13rem] text-[0.8125rem]"
                    style={{ color: isShadow ? T.blueLit : T.slate }}
                  >
                    {who}
                  </span>
                  <span
                    className="text-[1rem]"
                    style={{ color: isShadow ? "var(--sh-text)" : "#93A2B8" }}
                  >
                    {what}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="grid gap-px sm:grid-cols-2" style={{ background: "var(--sh-line)" }}>
            {PROOF.map(([title, body]) => (
              <div
                key={title}
                className="flex flex-col gap-2 p-6"
                style={{ background: "var(--sh-bg)" }}
              >
                <h3 className="text-[0.9375rem] font-semibold text-[var(--sh-blue-lit)]">
                  {title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-[#93A2B8]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── The app ──────────────────────────────────────────── */}
        <Section eyebrow="On the phone">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div className="flex flex-col gap-6">
              <Heading>One screen, one glance</Heading>
              <Lede>
                Your shadow on the left, you on the right, and one sentence
                telling you the truest thing about where you stand. When nothing
                improved, it says so rather than inventing a win.
              </Lede>
              <div className="flex flex-col gap-1.5 pt-1">
                <span className="sh-mono text-[0.625rem] uppercase tracking-[0.16em] text-[var(--sh-muted)]">
                  Status
                </span>
                <span className="sh-mono text-[0.8125rem] text-[#93A2B8]">
                  iOS and Android, in pilot
                </span>
              </div>
            </div>

            <div
              className="relative mx-auto w-[min(258px,72vw)] aspect-[1419/2796]"
              style={{ filter: "drop-shadow(0 0 70px rgba(58,123,213,0.28))" }}
            >
              <Image
                src="/images/shadow/dashboard-portrait.png"
                alt="Shadow's home screen: last week's ghost beside this week's, with strength, consistency and intensity rings below"
                fill
                sizes="(max-width: 768px) 72vw, 258px"
                className="object-contain"
              />
            </div>
          </div>
        </Section>

        {/* ── Privacy ──────────────────────────────────────────── */}
        <Section eyebrow="Your camera">
          <Heading>The footage never leaves your phone</Heading>

          <div className="grid gap-px sm:grid-cols-3" style={{ background: "var(--sh-line)" }}>
            {PRIVACY.map(([title, body]) => (
              <div
                key={title}
                className="flex flex-col gap-2 p-6"
                style={{ background: "var(--sh-bg)" }}
              >
                <h3 className="sh-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[var(--sh-blue-lit)]">
                  {title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-[#93A2B8]">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[0.9375rem] text-[#93A2B8]">
            What leaves is numbers: reps, angles, timings, scores.{" "}
            <a href="/shadow/privacy-policy" className="sh-link">
              Read the privacy policy
            </a>
            .
          </p>
        </Section>

        {/* ── Tiers ────────────────────────────────────────────── */}
        <Section eyebrow="What costs money">
          <Heading>The weekly shadow is never gated</Heading>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="sh-card flex flex-col gap-5 p-7">
              <div className="flex items-baseline justify-between">
                <h3 className="sh-display text-[1.4rem]">Shadow</h3>
                <span className="sh-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--sh-blue-lit)]">
                  Free
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {FREE.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[0.9375rem] leading-relaxed text-[#A9B6C9]"
                  >
                    <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-[var(--sh-blue)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="flex flex-col gap-5 rounded-2xl border p-7"
              style={{
                borderColor: "var(--sh-slate-line)",
                background: "rgba(107,118,136,0.04)",
              }}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="sh-display text-[1.4rem] text-[var(--sh-slate)]">
                  Shadow+
                </h3>
                <span className="sh-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--sh-slate)]">
                  Not yet built
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {PLUS.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[0.9375rem] leading-relaxed text-[#93A2B8]"
                  >
                    <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-[var(--sh-slate)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

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
