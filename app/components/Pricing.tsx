"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const tiers = [
  {
    title: "Link-in-Bio Page",
    price: "£150–£250",
    features: [
      "Minimal, clean link hub",
      "Social links + CTA",
      "Delivered in 24–48 hours",
    ],
  },
  {
    title: "Personal Brand Landing Page",
    price: "£350–£500",
    features: [
      "High-authority hero section",
      "About + value proposition",
      "Services, CTAs, and scroll structure",
      "Delivered in 48–72 hours",
    ],
  },
  {
    title: "Founder Portfolio",
    price: "£600–£900",
    features: [
      "Multi-section site",
      "Custom animations + interactions",
      "Portfolio entries",
      "Testimonials",
      "Fully responsive",
      "4–6 day delivery",
    ],
  },
];

export default function Pricing() {
  return (
    <SectionWrapper
      fullHeight
      className="bg-black text-white relative overflow-hidden"
    >
      {/* BACKGROUND NOISE + GLOW */}
      <motion.div
        animate={{ x: [-4, 4, -4], y: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute inset-0 opacity-[0.05] bg-[url('/noise.png')]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]" />

      <SectionTitle align="left" underline>
        Pricing
      </SectionTitle>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-3 gap-10 max-w-6xl mx-auto">
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="
              group relative 
              border border-gray-800 
              bg-[#0f0f0f] 
              rounded-xl 
              p-10 
              transition-all 
              hover:border-accentBlue 
              hover:scale-[1.03]
            "
          >
            {/* Blue Accent Left Bar */}
            <div
              className="
              absolute left-0 top-8 h-12 w-[3px] 
              bg-gray-700 
              group-hover:bg-accentBlue 
              transition-all
            "
            />

            <h3 className="text-2xl font-bold mb-3">{tier.title}</h3>

            <p className="text-4xl font-extrabold text-accentBlue mb-8">
              {tier.price}
            </p>

            <ul className="space-y-3 text-gray-300 text-base">
              {tier.features.map((f, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="text-accentBlue text-lg leading-none">
                    •
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="md:hidden mt-8 px-4 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6">
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="
              snap-center min-w-[88vw] 
              bg-[#0f0f0f] 
              border border-gray-800 
              rounded-xl p-8 
              flex-shrink-0 
              relative
            "
          >
            <div className="absolute left-0 top-6 h-10 w-[3px] bg-accentBlue" />

            <h3 className="text-xl font-bold mb-2">{tier.title}</h3>

            <p className="text-3xl font-extrabold text-accentBlue mb-6">
              {tier.price}
            </p>

            <ul className="space-y-2 text-gray-300 text-base">
              {tier.features.map((f, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-accentBlue">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center text-gray-400 mt-14 text-base"
      >
        Custom quotes available for larger builds.
      </motion.p>
    </SectionWrapper>
  );
}
