"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* BACKGROUND NOISE + PARALLAX DRIFT */}
      <motion.div
        animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.06]"
      />

      {/* ANIMATED GRADIENT STRIPE */}
      <motion.div
        initial={{ x: "-20%" }}
        animate={{ x: "20%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute top-[35%] left-0 w-full h-[180px] 
                   bg-gradient-to-r from-accentBlue/20 via-accentBlue/10 to-transparent"
      />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto px-10 pt-20 pb-24 text-center md:pt-40 md:pb-32 md:text-left"
      >
        {/* SMALL TAG */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-accentBlue font-semibold tracking-wider uppercase mb-6"
        >
          Founder • Engineer • Builder
        </motion.p>

        {/* NAME – MASKED REVEAL */}
        <motion.h1
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="font-extrabold text-white
             text-[clamp(60px,8vw,130px)] relative mb-10"
        >
          <div className="overflow-hidden">
            <span className="inline-block">
              Florian{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue to-accentBlue/40">
                Mealing
              </span>
            </span>
          </div>
        </motion.h1>

        {/* VALUE PROP + UNDERLINE REVEAL */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="text-white text-3xl md:text-4xl font-semibold max-w-3xl leading-snug"
          >
            I build high-performance websites for founders ready to scale.
          </motion.p>

          {/* UNDERLINE BAR */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
            className="h-[4px] w-28 bg-accentBlue origin-left mt-4 mb-12"
          />
        </div>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="text-gray-400 text-lg tracking-wide max-w-2xl mb-16"
        >
          Fast execution. Clean design. Premium experience.
        </motion.p>

        {/* CTA BUTTON */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px rgba(59,130,246,0.5)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => {
            const el = document.getElementById("Contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-12 py-5 rounded-lg font-bold text-xl bg-accentBlue text-white"
        >
          Work With Me
        </motion.button>
      </motion.div>
    </section>
  );
}
