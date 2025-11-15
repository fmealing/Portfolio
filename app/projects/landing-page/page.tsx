"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function LandingPageCaseStudy() {
  return (
    <main className="bg-offwhite min-h-screen pb-32 pt-28 px-6">
      {/* Back link */}
      <Link
        href="/"
        className="text-gray600 hover:text-accentBlue transition-colors text-sm mb-10 inline-block"
      >
        ← Back to portfolio
      </Link>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-semibold text-charcoal tracking-tight mb-4">
          SwiftCart E Commerce Platform
        </h1>

        <p className="text-gray600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
          A fast, modern e commerce platform built with Next.js, Supabase, and a
          clean component driven design system. Includes full cart, wishlist,
          reviews, search, and Stripe enabled checkout flow.
        </p>

        {/* Live link */}
        <Link
          href="https://swift-cart-fm.vercel.app/"
          target="_blank"
          className="inline-block mt-4 text-accentBlue font-medium text-lg hover:underline"
        >
          Visit Live Site →
        </Link>
      </motion.div>

      {/* MAIN HERO MOCKUP */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto mt-16"
      >
        <div className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-xl border border-gray-200 overflow-hidden">
          <Image
            src="/SwiftCart/Hero.png"
            alt="SwiftCart homepage screenshot"
            width={1800}
            height={1000}
            className="w-full object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* SECTION: OVERVIEW */}
      <section className="max-w-3xl mx-auto mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-charcoal mb-4"
        >
          Project Overview
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray600 text-lg leading-relaxed mb-6"
        >
          SwiftCart is a full e commerce experience built as a flagship project
          for my portfolio. The goal was to demonstrate real world engineering
          skills including authentication, product systems, cart logic, wishlist
          syncing, responsive UI, and Stripe checkout flow.
        </motion.p>

        <ul className="text-gray600 space-y-3 text-lg">
          {[
            "Full authentication system",
            "Cart and wishlist synced to Supabase",
            "Clean reusable component architecture",
            "Product filtering, search, and reviews",
            "Responsive layout across all devices",
            "High performance frontend with modern React patterns",
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex gap-3"
            >
              <span className="text-accentBlue">•</span> {item}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* SECTION: DESIGN PHILOSOPHY */}
      <section className="max-w-3xl mx-auto mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-charcoal mb-4"
        >
          Design Philosophy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray600 text-lg leading-relaxed"
        >
          The interface uses a clean, modern card layout paired with subtle
          hover motion and generous spacing. The goal was to create an interface
          that feels crisp, lightweight, and enjoyable to browse. The design
          takes inspiration from premium direct to consumer brands.
        </motion.p>
      </section>

      {/* SECTION: ADDITIONAL MOCKUPS */}
      <section className="max-w-5xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {[1, 2].map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-white border border-gray-200 shadow-[0_4px_18px_rgba(0,0,0,0.06)] rounded-xl overflow-hidden"
          >
            <Image
              src={`/SwiftCart/Screenshot-${n}.png`}
              alt={`SwiftCart screenshot ${n}`}
              width={1600}
              height={1000}
              className="w-full object-cover"
            />
          </motion.div>
        ))}
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
