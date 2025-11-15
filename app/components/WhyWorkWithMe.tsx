"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const points = [
  {
    title: "Founder-level thinking",
    desc: "I've built real products from 0 to 1 with real users.",
  },
  {
    title: "Clean, modern design",
    desc: "Simple, elegant interfaces with no unnecessary clutter.",
  },
  {
    title: "Very fast delivery",
    desc: "Most projects completed in 48 to 72 hours.",
  },
  {
    title: "Clear communication",
    desc: "Fast responses and transparent updates.",
  },
  {
    title: "Technical expertise",
    desc: "Next.js, Tailwind, TypeScript, and modern web tools.",
  },
  {
    title: "Hands-on experience",
    desc: "Built multiple production apps, not just demo sites.",
  },
  {
    title: "I understand founders",
    desc: "Because I am one. I know what high-leverage design looks like.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <SectionWrapper fullHeight>
      <SectionTitle>Why Work With Me</SectionTitle>

      {/* MOBILE: premium compact list */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          md:hidden 
          w-full 
          max-w-md 
          mx-auto 
          divide-y divide-gray-200 
          bg-white 
          rounded-xl 
          border border-gray-200 
          shadow-[0_4px_22px_rgba(0,0,0,0.06)]
          overflow-hidden
        "
      >
        {points.map((point, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.45 }}
            className="px-5 py-4"
          >
            <h3 className="text-[17px] font-semibold text-charcoal mb-1 leading-tight">
              {point.title}
            </h3>
            <p className="text-[15px] text-gray600 opacity-80 leading-snug">
              {point.desc}
            </p>
          </motion.li>
        ))}
      </motion.ul>

      {/* DESKTOP remains the same */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hidden md:grid grid-cols-2 gap-10 max-w-4xl mx-auto"
      >
        {points.map((point, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            className="text-charcoal"
          >
            <h3 className="text-xl font-semibold mb-1">{point.title}</h3>
            <p className="text-gray600 opacity-80 text-base leading-relaxed">
              {point.desc}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </SectionWrapper>
  );
}
