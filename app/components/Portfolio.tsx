"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface PortfolioItem {
  title: string;
  category: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Manufacturing Process AI",
    category: "AI & Automation",
  },
  {
    title: "Cloud Data Platform",
    category: "Cloud Architecture",
  },
  {
    title: "Supply Chain Optimization",
    category: "Operations Research",
  },
  {
    title: "Full-Stack Application",
    category: "Web Development",
  },
  {
    title: "Process Automation System",
    category: "Automation",
  },
  {
    title: "Data Analytics Dashboard",
    category: "Data Science",
  },
];

export default function Portfolio() {
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
        Portfolio
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer aspect-square"
          >
            <div className="w-full h-full bg-gradient-to-br from-[#2c3e50] to-[#1abc9c] flex flex-col items-center justify-center p-4 text-center">
              <h3 className="text-sm font-bold text-white mb-1 font-heading">{item.title}</h3>
              <p className="text-xs text-white/80 font-body">{item.category}</p>
            </div>
            <div className="absolute inset-0 bg-[#1abc9c] opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
              <span className="text-white font-semibold text-sm">View</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

