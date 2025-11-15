"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-offwhite">
      {/* --- LAYER 1: Ambient lights --- */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top center light */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] 
        bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_70%)]"
        />

        {/* Bottom right light */}
        <div
          className="absolute bottom-0 right-0 w-[700px] h-[500px] 
        bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_80%)]"
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.05))]" />
      </div>

      {/* --- LAYER 2: Floating particles (premium micro-motion) --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-accentBlue/30 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-accentBlue/20 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-accentBlue/25 rounded-full blur-sm animate-pulse"></div>
      </motion.div>

      {/* --- LAYER 3: Content --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
      >
        {/* Tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm tracking-[0.2em] uppercase text-gray600 mb-6"
        >
          Founder of SyncMove • Frontend Developer
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="font-semibold text-charcoal leading-[1.05] text-[clamp(55px,7vw,95px)] mb-6"
        >
          Florian{" "}
          <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#3b82f6,rgba(59,130,246,0.4))]">
            Mealing
          </span>
        </motion.h1>

        {/* Value */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="text-2xl text-gray600 max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          I design and build fast, modern personal websites for creators,
          founders and early-stage startups.
        </motion.p>

        {/* Sub tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="text-lg text-gray600 mb-12"
        >
          Clean design • Fast delivery • Clear communication
        </motion.p>

        {/* CTA */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 12px 32px rgba(59,130,246,0.35)",
          }}
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            const el = document.getElementById("Contact");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-accentBlue text-white px-12 py-5 rounded-xl font-medium text-xl shadow-lg"
        >
          Work With Me
        </motion.button>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[2px] h-10 bg-gray300 rounded-full animate-pulse"></div>
      </motion.div>
    </section>
  );
}
