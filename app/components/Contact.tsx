"use client";

import { motion } from "framer-motion";

const links = [
  {
    label:  "email",
    value:  "florianmealing@gmail.com",
    href:   "mailto:florianmealing@gmail.com",
  },
  {
    label:  "linkedin",
    value:  "linkedin.com/in/florian-mealing",
    href:   "https://linkedin.com/in/florian-mealing",
    external: true,
  },
  {
    label:  "github",
    value:  "github.com/fmealing",
    href:   "https://github.com/fmealing",
    external: true,
  },
  {
    label:  "phone",
    value:  "+44 7836 338399",
    href:   "tel:+447836338399",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 py-28 px-8"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="label mb-10"
        >
          05 / contact
        </motion.p>

        {/* Serif display line */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="font-display mb-5"
          style={{ fontSize: "clamp(38px, 6vw, 80px)", color: "var(--cream)" }}
        >
          Let&apos;s build<br />something real.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="text-sm font-light max-w-sm mb-16"
          style={{ color: "var(--cream-dim)", lineHeight: "1.85" }}
        >
          Actively looking for graduate software engineering roles starting
          2026. If you&apos;re hiring or want to collaborate, reach out.
        </motion.p>

        {/* Rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rule mb-0"
          style={{ transformOrigin: "left" }}
        />

        {/* Contact link list */}
        <div>
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
              className="contact-link flex items-center justify-between py-5 group"
            >
              <span
                className="label group-hover:text-[var(--cream)] transition-colors duration-200"
                style={{ color: "var(--cream-muted)" }}
              >
                {l.label}
              </span>
              <span
                className="text-sm font-light transition-colors duration-200"
                style={{ color: "var(--cream-dim)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream-dim)")}
              >
                {l.value}
                {l.external && (
                  <span className="ml-2" style={{ color: "var(--gold)" }}>
                    ↗
                  </span>
                )}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-xs font-light"
          style={{ color: "var(--cream-muted)" }}
        >
          Florian Mealing — University of Birmingham — 2026
        </motion.p>
      </div>
    </section>
  );
}
