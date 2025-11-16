"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const points = [
  {
    title: "Founder-level execution",
    desc: "I've built products with real users, feedback loops, and growth goals, not demo projects.",
  },
  {
    title: "Bold, modern design",
    desc: "Clean, high-authority interfaces built to impress and convert.",
  },
  {
    title: "Fast delivery",
    desc: "48–72 hour turnaround when needed. No bureaucracy. Just execution.",
  },
  {
    title: "Clear communication",
    desc: "No ghosting, no vague timelines. Fast responses and clarity.",
  },
  {
    title: "Technical firepower",
    desc: "Next.js, Tailwind, TypeScript, and modern best practices.",
  },
  {
    title: "Proven experience",
    desc: "Multiple production apps, real users, real outcomes.",
  },
  {
    title: "I understand founders",
    desc: "Because I am one. I build with urgency, clarity, and impact.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <SectionWrapper
      fullHeight
      className="bg-black text-white relative overflow-hidden"
    >
      {/* BACKGROUND NOISE + BLUE GLOW */}
      <motion.div
        animate={{ x: [-4, 4, -4], y: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute inset-0 opacity-[0.05] bg-[url('/noise.png')]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]" />

      <SectionTitle align="left" underline>
        Why Work With Me
      </SectionTitle>

      {/* DESKTOP GRID */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="hidden md:grid grid-cols-2 gap-12 max-w-5xl mx-auto"
      >
        {points.map((point, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            className="relative pl-6 group"
          >
            {/* ACCENT BAR */}
            <div
              className="
              absolute left-0 top-2 
              h-8 w-[3px] 
              bg-gray-700 
              transition-all 
              group-hover:bg-accentBlue
            "
            />

            <h3 className="text-2xl font-bold tracking-tight mb-1">
              {point.title}
            </h3>
            <p className="text-gray-400 text-[17px] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
              {point.desc}
            </p>
          </motion.li>
        ))}
      </motion.ul>

      {/* MOBILE LIST (dark, minimal, founder-style) */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="md:hidden flex flex-col gap-6 max-w-sm mx-auto px-4"
      >
        {points.map((point, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="relative pl-4"
          >
            {/* ACCENT BAR */}
            <div className="absolute left-0 top-1 h-5 w-[3px] bg-gray-700" />

            <h3 className="text-lg font-semibold mb-1 leading-tight">
              {point.title}
            </h3>

            <p className="text-gray-400 text-[14px] leading-snug">
              {point.desc}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </SectionWrapper>
  );
}
