"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <SectionWrapper
      fullHeight
      className="bg-black text-white relative overflow-hidden"
    >
      {/* BACKGROUND NOISE */}
      <motion.div
        animate={{ x: [-4, 4, -4], y: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[url('/noise.png')]"
      />

      {/* BLUE CENTER GLOW */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_80%)]" />

      <SectionTitle align="left" underline>
        Let’s Work Together
      </SectionTitle>

      {/* TEXT BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mb-14"
      >
        <p className="text-2xl text-gray-300 mb-6 leading-snug">
          If you want a fast, modern, high-performance website that makes you
          look world-class, let’s build it.
        </p>

        {/* Contact info list */}
        <div className="space-y-3 text-[19px]">
          <div className="flex items-baseline gap-3">
            <div className="h-5 w-[3px] bg-accentBlue"></div>
            <a
              href="mailto:florian@syncmove.co.uk"
              className="text-gray-300 hover:text-white font-semibold transition-colors"
            >
              florian@syncmove.co.uk
            </a>
          </div>

          <div className="flex items-baseline gap-3">
            <div className="h-5 w-[3px] bg-accentBlue"></div>
            <a
              href="https://instagram.com/florian_mealing"
              target="_blank"
              className="text-gray-300 hover:text-white font-semibold transition-colors"
            >
              @florian_mealing
            </a>
          </div>

          <div className="flex items-baseline gap-3">
            <div className="h-5 w-[3px] bg-accentBlue"></div>
            <a
              href="https://linkedin.com/in/florian-mealing"
              target="_blank"
              className="text-gray-300 hover:text-white font-semibold transition-colors"
            >
              linkedin.com/in/florian-mealing
            </a>
          </div>
        </div>
      </motion.div>

      {/* CTA BUTTON */}
      <motion.a
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 40px rgba(59,130,246,0.6)",
        }}
        whileTap={{ scale: 0.97 }}
        href="mailto:florian@syncmove.co.uk?subject=Project%20Inquiry&body=Hi%20Florian,%0D%0A%0D%0AMy%20project%20details:%0D%0A-%20Project%20type:%0D%0A-%20Timeline:%0D%0A-%20Budget:%0D%0A%0D%0ABest,%0D%0A"
        className="
          mt-2
          px-12 py-5 
          bg-accentBlue 
          rounded-lg 
          text-lg font-bold
          text-white 
          block 
          w-fit
        "
      >
        Start Your Project
      </motion.a>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-gray-400 text-lg mt-10"
      >
        I reply fast, usually within the hour.
      </motion.p>
    </SectionWrapper>
  );
}
