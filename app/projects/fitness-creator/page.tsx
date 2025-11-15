"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FitnessCreator() {
  return (
    <main className="bg-offwhite min-h-screen pb-32 pt-28 px-6">
      {/* Back link */}
      <Link
        href="/"
        className="text-gray600 hover:text-accentBlue transition-colors text-sm mb-10 inline-block"
      >
        ← Back to portfolio
      </Link>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-semibold text-charcoal tracking-tight mb-4">
          Maya Carter
        </h1>

        <p className="text-gray600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
          Fitness creator focused on strength training, lifestyle, and high
          quality brand collaborations.
        </p>

        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-200">
          <Image
            src="/FitnessCreator/hero.jpg"
            alt="Fitness creator"
            width={1800}
            height={1200}
            className="w-full object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* ABOUT */}
      <section className="max-w-3xl mx-auto mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-charcoal mb-4"
        >
          About Maya
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-gray600 text-lg leading-relaxed"
        >
          Maya is a fitness creator who shares daily training content, strength
          routines, and motivational lifestyle posts. She works with brands that
          value authenticity, high quality creative, and strong community
          engagement across Instagram and TikTok.
        </motion.p>
      </section>

      {/* STATS */}
      <section className="max-w-4xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {[
          { num: "120k", label: "Followers" },
          { num: "38%", label: "Average Engagement" },
          { num: "72%", label: "Female Audience" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-[0_4px_18px_rgba(0,0,0,0.06)] border border-gray-100"
          >
            <p className="text-4xl font-semibold text-charcoal">{stat.num}</p>
            <p className="text-gray600 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* PORTFOLIO */}
      <section className="max-w-5xl mx-auto mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-charcoal mb-6"
        >
          Portfolio
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4].map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-[0_4px_18px_rgba(0,0,0,0.06)] border border-gray-200"
            >
              <Image
                src={`/FitnessCreator/gallery-${n}.jpg`}
                alt={`Portfolio image ${n}`}
                width={1200}
                height={1200}
                className="w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-3xl mx-auto mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-charcoal mb-4"
        >
          Services
        </motion.h2>

        <ul className="text-gray600 space-y-3 text-lg">
          {[
            "UGC video content",
            "Lifestyle photography",
            "Brand partnerships",
            "Product reviews",
            "Training routine breakdowns",
          ].map((service, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex gap-3"
            >
              <span className="text-accentBlue">•</span> {service}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center mt-28"
      >
        <Link
          href="/#Contact"
          className="inline-block bg-accentBlue text-white px-10 py-4 rounded-xl font-medium text-lg shadow-md hover:scale-105 transition-transform"
        >
          Work With Me
        </Link>
      </motion.div>
    </main>
  );
}
