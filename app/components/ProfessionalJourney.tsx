"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, GraduationCap, Plus } from "lucide-react";

interface JourneyItem {
  type: "education" | "experience";
  title: string;
  period: string;
  location?: string;
  description?: string;
  icon: React.ReactNode;
}

const journeyData: JourneyItem[] = [
  {
    type: "experience",
    title: "Software Consultant",
    period: "2020 - Present",
    description: "Architecting scalable solutions and optimizing complex systems",
    icon: <Code className="w-5 h-5" />,
  },
  {
    type: "education",
    title: "MSc. Industrial Engineering",
    period: "2020",
    location: "Lisbon",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    type: "education",
    title: "University Engineering",
    period: "2019",
    description: "Specialization in Operations Research",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

export default function ProfessionalJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-8 font-heading">
        Professional Journey
      </h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#1abc9c]" />
        
        <div className="space-y-6">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative flex items-start gap-4"
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#1abc9c] flex items-center justify-center text-white shadow-md">
                  {item.icon}
                </div>
                {index < journeyData.length - 1 && (
                  <button className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-[#1abc9c] flex items-center justify-center text-[#1abc9c] hover:bg-[#1abc9c] hover:text-white transition-colors">
                    <Plus className="w-3 h-3" />
                  </button>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-bold text-[#2c3e50] mb-1 font-heading">
                  {item.title}
                </h3>
                <p className="text-[#1abc9c] font-semibold text-sm mb-1">
                  {item.period} {item.location && `- ${item.location}`}
                </p>
                {item.description && (
                  <p className="text-sm text-gray-600 font-body">{item.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

