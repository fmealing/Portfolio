"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "SyncMove",
    description:
      "A social fitness platform helping people find training partners and stay consistent. Built the full frontend with a custom design system.",
    url: "https://syncmove.co.uk",
    external: true,
    image: "/SyncMove/Hero.png",
  },
  {
    title: "SwiftCart E-Commerce",
    description:
      "A complete e-commerce platform built with Next.js, Supabase, and Stripe. Clean architecture with scalable components.",
    url: "/projects/landing-page",
    external: false,
    image: "/SwiftCart/Hero.png",
  },
  {
    title: "Creator Website",
    description:
      "A fast personal website for creators. Clean structure, bold aesthetics, and a conversion-focused experience.",
    url: "/projects/creator-website",
    external: false,
    image: "/FitnessCreator/Website-Screenshot.png",
  },
];

export default function Portfolio() {
  return (
    <SectionWrapper
      fullHeight
      className="bg-black text-white relative overflow-hidden"
    >
      {/* BACKGROUND NOISE + BLUE GLOW */}

      <motion.div
        animate={{ x: [-4, 4, -4], y: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[url('/noise.png')]"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.04),transparent_70%)]" />

      <SectionTitle align="left" underline>
        Selected Work
      </SectionTitle>

      {/* DESKTOP GRID */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-2">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="
              group relative rounded-xl bg-[#0f0f0f] border border-gray-800
              p-6 md:p-7
              transition-all duration-300
              hover:border-accentBlue hover:scale-[1.03]
              cursor-pointer
            "
          >
            {/* LEFT ACCENT BAR */}
            <div className="absolute left-0 top-6 h-10 w-[3px] bg-gray-700 group-hover:bg-accentBlue transition-all" />

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3 tracking-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-base leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Image */}
            <div className="mt-4 h-40 rounded-lg border border-gray-800 overflow-hidden group-hover:border-accentBlue transition-colors">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={800}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Link */}
            <Link
              href={project.url}
              target={project.external ? "_blank" : "_self"}
              className="text-accentBlue font-semibold mt-4 inline-block"
            >
              Visit project →
            </Link>
          </motion.div>
        ))}
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="sm:hidden mt-10 overflow-x-auto snap-x snap-mandatory flex gap-6 pb-6 px-4">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="
              snap-center w-[85vw] flex-shrink-0
              rounded-xl bg-[#0f0f0f] border border-gray-800 
              p-6 transition-all
            "
          >
            <h3 className="text-xl font-bold mb-2 tracking-tight">
              {project.title}
            </h3>

            <p className="text-gray-400 text-base leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="mt-4 h-36 rounded-lg border border-gray-800 overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={800}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

            <Link
              href={project.url}
              target={project.external ? "_blank" : "_self"}
              className="text-accentBlue font-semibold mt-4 inline-block"
            >
              Visit project →
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
