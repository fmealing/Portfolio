"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-3xl md:text-4xl font-semibold text-charcoal mb-12 text-center tracking-tight"
    >
      {children}
    </motion.h2>
  );
}
