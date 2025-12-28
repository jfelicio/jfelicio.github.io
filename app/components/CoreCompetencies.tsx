"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Settings,
  Code2,
  Zap,
  Cloud,
} from "lucide-react";

interface Competency {
  name: string;
  icon: React.ReactNode;
}

const competencies: Competency[] = [
  { name: "System Optimisation", icon: <Settings className="w-5 h-5" /> },
  { name: "Full-Stack Development", icon: <Code2 className="w-5 h-5" /> },
  { name: "Process Automation", icon: <Zap className="w-5 h-5" /> },
  { name: "Cloud Architecture", icon: <Cloud className="w-5 h-5" /> },
];

export default function CoreCompetencies() {
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
        Core Competencies
      </h2>
      
      <ul className="space-y-3">
        {competencies.map((competency, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="flex items-center gap-3 text-gray-700 font-body"
          >
            <span className="text-[#1abc9c]">{competency.icon}</span>
            <span>{competency.name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

