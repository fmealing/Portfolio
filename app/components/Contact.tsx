"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <SectionWrapper fullHeight>
      <SectionTitle>Let’s Work Together</SectionTitle>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center max-w-lg mx-auto mb-10"
      >
        <p className="text-xl text-gray600 mb-3">
          Email:{" "}
          <a
            href="mailto:florian@syncmove.co.uk"
            className="text-charcoal hover:text-accentBlue transition-colors font-medium"
          >
            florian@syncmove.co.uk
          </a>
        </p>

        <p className="text-xl text-gray600 mb-3">
          Instagram:{" "}
          <a
            href="https://instagram.com/florian_mealing"
            target="_blank"
            className="text-charcoal hover:text-accentBlue transition-colors font-medium"
          >
            @florian_mealing
          </a>
        </p>

        <p className="text-xl text-gray600">
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/florian-mealing"
            target="_blank"
            className="text-charcoal hover:text-accentBlue transition-colors font-medium"
          >
            linkedin.com/in/florian-mealing
          </a>
        </p>
      </motion.div>

      <motion.a
        whileHover={{
          scale: 1.03,
          boxShadow: "0 8px 24px rgba(59,130,246,0.35)",
        }}
        whileTap={{ scale: 0.97 }}
        href="mailto:florian@syncmove.co.uk?subject=Project%20Inquiry&body=Hi%20Florian,%0D%0A%0D%0AI'm%20interested%20in%20working%20with%20you.%20Here%20are%20the%20details:%0D%0A-%20Project%20type:%0D%0A-%20Timeline:%0D%0A-%20Budget:%0D%0A%0D%0ABest,%0D%0A"
        className="bg-accentBlue text-white px-10 py-4 rounded-xl font-medium text-lg shadow-md mx-auto block text-center max-w-[280px] w-full"
      >
        Let’s Build Your Website
      </motion.a>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-center text-gray600 opacity-80 mt-8 text-lg"
      >
        I reply fast, usually within the hour.
      </motion.p>
    </SectionWrapper>
  );
}
