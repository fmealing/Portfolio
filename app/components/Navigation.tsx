"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "about",      href: "#about" },
  { label: "projects",   href: "#projects" },
  { label: "skills",     href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "contact",    href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? "rgba(11,9,0,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          transition: "background 0.35s ease, backdrop-filter 0.35s ease",
        }}
      >
        {/* Amber underline — appears when scrolled */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300"
          style={{ background: "var(--gold-line)", opacity: scrolled ? 1 : 0 }}
        />

        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          {/* Logotype */}
          <a
            href="#"
            className="text-xs tracking-[0.2em] uppercase transition-colors duration-200"
            style={{ color: "var(--gold)", fontWeight: 400 }}
          >
            Florian Mealing
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs tracking-[0.14em] uppercase transition-colors duration-200"
                style={{ color: "var(--cream-dim)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream-dim)")}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://github.com/fmealing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.14em] uppercase transition-colors duration-200"
              style={{ color: "var(--gold)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              github ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-1"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px"
              style={{ background: "var(--cream-dim)" }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-px"
              style={{ background: "var(--cream-dim)" }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px"
              style={{ background: "var(--cream-dim)" }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col justify-center px-10"
            style={{ background: "rgba(11,9,0,0.97)" }}
          >
            <div className="space-y-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.055, ease: "easeOut" }}
                >
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-3xl font-light tracking-wide"
                    style={{ color: "var(--cream-dim)" }}
                  >
                    {l.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.055 }}
              >
                <a
                  href="https://github.com/fmealing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-3xl font-light"
                  style={{ color: "var(--gold)" }}
                >
                  github ↗
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
