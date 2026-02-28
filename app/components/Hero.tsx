"use client";

import { motion } from "framer-motion";

// Custom easing — fast start, luxurious slow settle
const EASE = [0.16, 1, 0.3, 1] as const;

const annotations = [
  { label: "status",     value: "available · 2026" },
  { label: "degree",     value: "MEng Engineering" },
  { label: "university", value: "Birmingham, UK" },
  { label: "grade",      value: "First Class · 74.76%" },
  { label: "focus",      value: "Embedded · Full-Stack" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Dot-grid fades in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="dot-grid absolute inset-0 pointer-events-none"
      />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-8 pt-32 pb-20">

        {/* ── Rule 1: draws left → right ── */}
        <motion.div
          className="rule mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          style={{ transformOrigin: "left" }}
        />

        {/* ── Name (left) + blueprint annotations (right) ── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-6">

          {/* Instrument Serif italic — the only display moment on the page */}
          <div className="flex-1">
            <div className="overflow-hidden">
              <motion.h1
                className="font-display leading-[0.88] select-none"
                style={{ fontSize: "clamp(72px, 12.5vw, 164px)", color: "var(--cream)" }}
                initial={{ y: "106%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.95, delay: 0.5, ease: EASE }}
              >
                Florian
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="font-display leading-[0.88] select-none"
                style={{ fontSize: "clamp(72px, 12.5vw, 164px)", color: "var(--cream)" }}
                initial={{ y: "106%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.95, delay: 0.68, ease: EASE }}
              >
                Mealing.
              </motion.h1>
            </div>
          </div>

          {/* Callout annotations — like blueprint labels */}
          <div className="lg:w-56 lg:pt-3 flex flex-col gap-4">
            {annotations.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.92 + i * 0.09, ease: "easeOut" }}
                className="flex items-start gap-3"
              >
                <span className="shrink-0 mt-[3px] text-xs" style={{ color: "var(--gold)" }}>
                  —
                </span>
                <div>
                  <p className="label mb-0.5">{a.label}</p>
                  <p className="text-sm font-light" style={{ color: "var(--cream-dim)" }}>
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
          transition={{ duration: 0.55, delay: 1.18, ease: EASE }}
          style={{ transformOrigin: "left" }}
        />

        {/* ── Tagline + CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.35, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8"
        >
          <p
            className="text-sm font-light leading-relaxed max-w-xs"
            style={{ color: "var(--cream-dim)" }}
          >
            Building things that move, sense, and scale —<br />
            from bare-metal IoT firmware to production<br />
            web and mobile platforms.
          </p>

          <div className="flex flex-col sm:items-end gap-3">
            {[
              { label: "→ view projects", href: "#projects",                    gold: false },
              { label: "→ github ↗",      href: "https://github.com/fmealing", gold: true, external: true },
              { label: "→ get in touch",  href: "#contact",                     gold: false },
            ].map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noopener noreferrer" : undefined}
                className="text-sm tracking-wide transition-colors duration-200"
                style={{ color: cta.gold ? "var(--gold)" : "var(--cream-dim)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = cta.gold ? "var(--gold)" : "var(--cream-dim)")}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Vertical "scroll" label — bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.6 }}
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
