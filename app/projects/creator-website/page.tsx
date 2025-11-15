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
            src="https://storage.googleapis.com/syncmove/Hero-FitnessCreator.jpg"
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
      {/* SERVICES */}
      <section className="max-w-5xl mx-auto mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-charcoal mb-8 text-center"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2">
          {[
            {
              title: "UGC Video Content",
              desc: "High quality vertical videos for brands and social campaigns.",
            },
            {
              title: "Lifestyle Photography",
              desc: "Clean, aesthetic gym and lifestyle imagery for sponsored shoots.",
            },
            {
              title: "Brand Partnerships",
              desc: "Long term ambassador content and consistent brand storytelling.",
            },
            {
              title: "Product Reviews",
              desc: "Authentic, engaging product showcases that convert.",
            },
            {
              title: "Training Content",
              desc: "Form breakdowns, workout guides, and exercise demos.",
            },
            {
              title: "Campaign Shoots",
              desc: "Full content packages for launches and new product drops.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-[0_4px_18px_rgba(0,0,0,0.06)] border border-gray-200 hover:shadow-[0_6px_26px_rgba(0,0,0,0.10)] hover:scale-[1.02] transition-all"
            >
              <h3 className="text-xl font-semibold text-charcoal mb-2">
                {service.title}
              </h3>
              <p className="text-gray600 leading-relaxed text-base opacity-80">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
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
