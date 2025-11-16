"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({
  children,
  align = "center",
  underline = false,
}: {
  children: React.ReactNode;
  align?: "left" | "center";
  underline?: boolean;
}) {
  return (
    <div className={`mb-12 ${align === "left" ? "text-left" : "text-center"}`}>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-white font-extrabold tracking-tight text-4xl md:text-5xl"
      >
        {children}
      </motion.h2>

      {underline && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className={`h-[4px] bg-accentBlue w-24 mt-4 ${
            align === "left" ? "origin-left" : "mx-auto origin-center"
          }`}
        />
      )}
    </div>
  );
}
