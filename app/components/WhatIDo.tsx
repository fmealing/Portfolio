"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const items = [
  "Personal brand websites",
  "Landing pages & startup launch pages",
  "Creator pages & link-in-bio websites",
  "Portfolios for founders & builders",
  "Simple, clean design systems",
  "High-performance frontend builds",
  "Fast turnaround (48–72 hours)",
];

export default function WhatIDo() {
  return (
    <SectionWrapper fullHeight>
      {/* background accent light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06),transparent_70%)]" />
      </div>

      <SectionTitle>What I Do</SectionTitle>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-lg md:text-xl text-gray600 max-w-xl mx-auto text-center mb-12"
      >
        I design and build clean, modern websites that help people look
        professional, attract opportunities, and stand out online.
      </motion.p>

      {/* Grid container animation */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto"
      >
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            className="text-lg text-charcoal opacity-70 font-medium tracking-tight hover:opacity-100 transition-opacity"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </SectionWrapper>
  );
}
