"use client";

import { motion } from "framer-motion";
import { C, glow, glow2, mono, sans } from "../tokens";

export const Hero = () => {
  return (
    <section
      style={{
        ...sans,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        background: C.bg,
      }}
    >
      {/* Prototype background image  */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/ghost_glove_images/prototype.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.55,
          zIndex: 0,
        }}
      />
      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to bottom, ${C.bg}99 0%, ${C.bg}33 40%, ${C.bg}99 100%)`,
          zIndex: 1,
        }}
      />
      {/* Scanline overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 4px)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      {/* Ambient green glow */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(57,255,106,0.08) 0%, transparent 68%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Centre content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px 0",
          zIndex: 3,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(3rem, 9vw, 8rem)",
            fontWeight: 700,
            lineHeight: 1.02,
            color: C.green,
            textShadow: glow,
            letterSpacing: "-0.025em",
            marginBottom: 32,
          }}
        >
          Progress
          <br />
          you can see.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: 480,
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            color: C.text,
            lineHeight: 1.75,
            fontWeight: 300,
            marginBottom: 48,
            opacity: 0.7,
          }}
        >
          Most people who join the gym quit. Not because they lack motivation.
          Because they can&apos;t see the progress.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", gap: 16 }}
        >
          <a
            href="#problem"
            style={{
              ...mono,
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: C.bg,
              background: C.green,
              border: "none",
              borderRadius: 4,
              padding: "14px 28px",
              cursor: "pointer",
              textDecoration: "none",
              boxShadow: `0 0 24px rgba(57,255,106,0.35)`,
              fontWeight: 700,
            }}
          >
            See how it works
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: 48,
          zIndex: 3,
        }}
      >
        <div
          style={{
            width: 1,
            height: 56,
            background: `linear-gradient(to bottom, ${C.green}, transparent)`,
            boxShadow: glow2,
          }}
        />
      </motion.div>
    </section>
  );
};
