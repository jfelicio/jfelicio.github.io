"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

interface TimelineItem {
  type: "experience" | "education";
  title: string;
  company?: string;
  period: string;
  qualifier?: string;
  anchor?: string;
  icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    type: "experience",
    title: "Management Consultant",
    company: "Accenture",
    period: "2022–Present",
    qualifier: "Supply Chain & Operations",
    anchor: "accenture",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    type: "experience",
    title: "Functional Consultant",
    company: "Manhattan Associates",
    period: "2020–2021",
    anchor: "manhattan-functional",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    type: "experience",
    title: "Associate Consultant",
    company: "Manhattan Associates",
    period: "2018–2020",
    anchor: "manhattan-associate",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    type: "education",
    title: "MSc Industrial Engineering & Management",
    company: "University of Lisboa – Técnico Lisboa",
    period: "2016–2018",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    type: "education",
    title: "BSc Industrial Engineering & Management",
    company: "University of Aveiro",
    period: "2011–2016",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

export default function ProfessionalTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative">
      {/* Central vertical line */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 transition-colors"
        style={{ backgroundColor: 'var(--timeline-line)' }}
      />
      
      <div className="space-y-12">
        {timelineData.map((item, index) => {
          const CardContent = (
            <div 
              className="rounded-lg p-6 border shadow-md hover:shadow-lg transition-all"
              style={{ 
                backgroundColor: 'var(--card-background)',
                borderColor: 'var(--border-color)'
              }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? "items-end text-right" : "items-start text-left"}`}>
                <p 
                  className="text-sm font-semibold mb-2 font-body transition-colors"
                  style={{ color: 'var(--primary-teal)' }}
                >
                  {item.period}
                </p>
                <h3 
                  className="text-lg font-bold mb-1 font-heading transition-colors"
                  style={{ color: 'var(--foreground)' }}
                >
                  {item.title}
                </h3>
                {item.qualifier && (
                  <p 
                    className="text-sm mb-2 font-body transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {item.qualifier}
                  </p>
                )}
                {item.company && (
                  <p 
                    className="font-semibold font-body transition-colors"
                    style={{ color: 'var(--primary-teal)' }}
                  >
                    {item.company}
                  </p>
                )}
              </div>
            </div>
          );

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative flex items-start gap-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                {item.anchor ? (
                  <Link 
                    href={`/experience#${item.anchor}`}
                    className="block hover:opacity-80 transition-opacity"
                  >
                    {CardContent}
                  </Link>
                ) : (
                  CardContent
                )}
              </div>

              {/* Timeline Node */}
              <div className="relative z-10 flex-shrink-0">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 transition-colors"
                  style={{ 
                    backgroundColor: 'var(--timeline-node-bg)',
                    color: 'var(--timeline-node-text)',
                    borderColor: 'var(--background)'
                  }}
                >
                  {item.icon}
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="flex-1" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
