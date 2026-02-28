"use client";

import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";

const EASE = [0.16, 1, 0.3, 1] as const;

const annotations = [
  { label: "status",     value: "available · 2026" },
  { label: "degree",     value: "MEng Mechatronics & Robotics Eng." },
  { label: "university", value: "Birmingham, UK" },
  { label: "grade",      value: "First Class · 74.76%" },
  { label: "focus",      value: "Embedded · Full-Stack" },
];

export default function Hero() {
  const { displayed: florian, done: florianDone } = useTypewriter("FLORIAN", true, 72, 600);
  const { displayed: mealing, done: mealingDone } = useTypewriter("MEALING.", florianDone, 72, 80);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Dot-grid fades in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="dot-grid absolute inset-0 pointer-events-none"
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-8 pt-32 pb-20">

        {/* ── Rule 1 draws in ── */}
        <motion.div
          className="rule mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          style={{ transformOrigin: "left" }}
        />

        {/* ── Name (left) + annotations (right) ── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-6">

          {/* IBM Plex Mono 600, uppercase — stark and precise */}
          <div className="flex-1">
            {/* Line 1 — "FLORIAN" with cursor while typing */}
            <h1
              className="font-mono font-semibold uppercase leading-[0.9] tracking-tight select-none"
              style={{ fontSize: "clamp(68px, 12vw, 158px)", color: "var(--cream)", minHeight: "1em" }}
            >
              {florian}
              {!florianDone && <span className="cursor-blink">█</span>}
            </h1>

            {/* Line 2 — "MEALING." cursor transfers here once line 1 done */}
            <h1
              className="font-mono font-semibold uppercase leading-[0.9] tracking-tight select-none"
              style={{ fontSize: "clamp(68px, 12vw, 158px)", color: "var(--green)", minHeight: "1em" }}
            >
              {mealing}
              {florianDone && <span className="cursor-blink">█</span>}
            </h1>
          </div>

          {/* Blueprint annotations */}
          <div className="lg:w-60 lg:pt-3 flex flex-col gap-4">
            {annotations.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + i * 0.09, ease: "easeOut" }}
                className="flex items-start gap-3"
              >
                <span className="shrink-0 mt-[3px] text-xs" style={{ color: "var(--green)" }}>
                  —
                </span>
                <div>
                  <p className="label mb-0.5">{a.label}</p>
                  <p className="text-xs font-light" style={{ color: "var(--cream-dim)" }}>
                    {a.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Rule 2 ── */}
        <motion.div
          className="rule mt-12 mb-9"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.55, delay: 2.1, ease: EASE }}
          style={{ transformOrigin: "left" }}
        />

        {/* ── Tagline + CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 2.25, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8"
        >
          <p
            className="text-sm font-light leading-relaxed max-w-xs"
            style={{ color: "var(--cream-dim)" }}
          >
            Embedded firmware. Full-stack product. One engineer.
          </p>

          <div className="flex flex-col sm:items-end gap-3">
            {[
              { label: "→ view projects", href: "#projects",                    green: false },
              { label: "→ github ↗",      href: "https://github.com/fmealing", green: true, external: true },
              { label: "→ get in touch",  href: "#contact",                     green: false },
            ].map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noopener noreferrer" : undefined}
                className="text-sm tracking-wide transition-colors duration-200"
                style={{ color: cta.green ? "var(--green)" : "var(--cream-dim)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = cta.green ? "var(--green)" : "var(--cream-dim)")}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Vertical scroll label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.6 }}
        className="absolute bottom-8 left-8 hidden md:block"
      >
        <motion.p
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
          className="label"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.22em" }}
        >
          scroll
        </motion.p>
      </motion.div>
    </section>
  );
}
