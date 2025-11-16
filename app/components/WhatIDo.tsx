"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const items = [
  "Personal brand websites",
  "High-converting landing pages",
  "Founder & builder portfolios",
  "Launch pages for early-stage startups",
  "Clean, minimal design systems",
  "High-performance frontend builds",
  "Fast turnaround (48–72 hours)",
];

export default function WhatIDo() {
  return (
    <SectionWrapper fullHeight>
      {/* SUBTLE BACKGROUND NOISE & ACCENT */}
      <motion.div
        animate={{ x: [-4, 4, -4], y: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('/noise.png')]"
      />

      {/* SOFT BLUE ACCENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.04),transparent_75%)] pointer-events-none" />

      {/* TITLE */}
      <SectionTitle>What I Do</SectionTitle>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-xl text-gray-300 max-w-2xl mx-auto text-center mb-14 leading-relaxed"
      >
        I build clean, high-performance websites that make founders look
        world-class. Fast execution. Modern design. Built to convert.
      </motion.p>

      {/* GRID */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto"
      >
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.6 }}
            className="text-xl text-gray-300 font-semibold tracking-tight 
                       opacity-70 hover:opacity-100 transition-opacity"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>

      {/* BOTTOM UNDERLINE ACCENT */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="h-[4px] w-24 bg-accentBlue mx-auto mt-14 origin-left"
      />
    </SectionWrapper>
  );
}
