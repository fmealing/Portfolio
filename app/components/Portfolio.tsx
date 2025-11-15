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
      "A social fitness platform that helps people find training partners and stay consistent. Built the entire frontend using Next.js with a clean, modern design system.",
    url: "https://syncmove.co.uk",
    external: true,
    image: "/SyncMove/Hero.png",
  },
  {
    title: "SwiftCart E Commerce",
    description:
      "A complete e commerce platform built with Next.js, Supabase, Stripe, and a clean, scalable component system.",
    url: "/projects/landing-page",
    external: false,
    image: "/SwiftCart/Hero.png",
  },
  {
    title: "Creator Website",
    description:
      "A fast personal website for creators. Clean structure, strong aesthetics, and an optimized conversion flow.",
    url: "/projects/creator-website",
    external: false,
    image: "/FitnessCreator/Website-Screenshot.png", // update when ready
  },
];

export default function Portfolio() {
  return (
    <SectionWrapper fullHeight>
      <SectionTitle>Selected Work</SectionTitle>

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
              bg-white 
              rounded-xl 
              p-6 md:p-7
              shadow-[0_3px_14px_rgba(0,0,0,0.08)] 
              hover:shadow-[0_8px_26px_rgba(0,0,0,0.12)] 
              hover:scale-[1.02]
              transition-all duration-300
              border border-gray-100
            "
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold text-charcoal mb-2 tracking-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray600 text-base leading-relaxed opacity-80 mb-4">
              {project.description}
            </p>

            {/* Image */}
            <div className="mt-4 h-40 rounded-lg border border-gray-200 overflow-hidden">
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
              className="text-accentBlue font-medium mt-4 inline-block"
            >
              Visit project →
            </Link>
          </motion.div>
        ))}
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="sm:hidden mt-10 overflow-x-auto snap-x snap-mandatory flex gap-6 pb-4 px-4">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="
              snap-center
              w-[85vw]
              bg-white
              rounded-xl
              p-6
              shadow-[0_3px_14px_rgba(0,0,0,0.08)]
              border border-gray-100
              flex-shrink-0
            "
          >
            <h3 className="text-xl font-semibold text-charcoal mb-2 tracking-tight">
              {project.title}
            </h3>

            <p className="text-gray600 text-base leading-relaxed opacity-80 mb-4">
              {project.description}
            </p>

            <div className="mt-4 h-36 rounded-lg border border-gray-200 overflow-hidden">
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
              className="text-accentBlue font-medium mt-4 inline-block"
            >
              Visit project →
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
