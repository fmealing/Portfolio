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
      "Delivered in 24 to 48 hours",
    ],
  },
  {
    title: "Personal Brand Landing Page",
    price: "£350–£500",
    features: [
      "Hero section",
      "About & value section",
      "Services + CTA",
      "Delivered in 48 to 72 hours",
    ],
  },
  {
    title: "Founder Portfolio",
    price: "£600–£900",
    features: [
      "Full multi-section site",
      "Custom animations",
      "Portfolio entries",
      "Testimonials",
      "Fully responsive",
      "4 to 6 day delivery",
    ],
  },
];

export default function Pricing() {
  return (
    <SectionWrapper fullHeight>
      <SectionTitle>Pricing</SectionTitle>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-3 gap-10 max-w-6xl mx-auto">
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.08,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              bg-white rounded-xl p-10 border border-gray-200
              shadow-sm hover:shadow-[0_12px_34px_rgba(0,0,0,0.08)]
              transition-all duration-300
            "
          >
            <h3 className="text-xl font-semibold text-charcoal mb-2 tracking-tight">
              {tier.title}
            </h3>

            <p className="text-4xl font-bold text-accentBlue mb-8">
              {tier.price}
            </p>

            <ul className="space-y-2 text-gray600 text-base">
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

      {/* MOBILE HORIZONTAL SWIPE */}
      <div className="md:hidden mt-6 px-4 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6">
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="
              snap-center
              min-w-[88vw]
              bg-white 
              rounded-xl 
              p-6
              shadow-[0_6px_24px_rgba(0,0,0,0.08)]
              border border-gray-200
              flex-shrink-0
            "
          >
            <h3 className="text-xl font-semibold text-charcoal mb-2">
              {tier.title}
            </h3>

            <p className="text-3xl font-bold text-accentBlue mb-4">
              {tier.price}
            </p>

            <ul className="space-y-2 text-gray600 text-base leading-relaxed">
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

      {/* FOOTNOTE */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-center text-gray600 opacity-80 mt-10 text-base"
      >
        Custom quotes available for larger builds.
      </motion.p>
    </SectionWrapper>
  );
}
