"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-6 font-heading">
        About Me
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed font-body">
        João Felicio is an Industrial Engineer with a passion for software. He optimizes 
        complex systems and builds scalable digital solutions, bridging the gap between 
        traditional engineering and modern software development.
      </p>
    </motion.div>
  );
}

