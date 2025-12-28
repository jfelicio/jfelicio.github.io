"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  type: "experience" | "education";
  title: string;
  company?: string;
  period: string;
  location?: string;
  description: string[];
  icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    type: "experience",
    title: "Management Consultant, Supply Chain & Operations",
    company: "Accenture",
    period: "Jan 2022 - Present",
    location: "London, UK",
    description: [
      "Workstream lead in Logistics Transformation for an A&D client with c. £500M of logistics spend and global footprint.",
      "Led WMS deployments for two DCs in AU and UK for a major fashion retailer, boosting fulfilment capacity by 10-25% and supporting 130+ stores. Led a team of 4 across EMEA and APAC.",
      "Logistics cost optimisation strategy for a UK consumer goods company, delivering a 10-12% cost-to-serve reduction.",
      "Led warehouse process optimisation for a UK nuclear energy company, identifying £400K in savings and a 10-15% productivity uplift. Managed a team of 3 consulting analysts.",
      "Designed process taxonomies and re-engineered operating models for a UK utilities company, informing long-term digital and operational transformation. Led a team of 4 in business process re-engineering efforts.",
      "Supported warehouse automation assurance for a UK retailer's £20M investment, ensuring alignment of tech, ops, and process requirements.",
    ],
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    type: "experience",
    title: "Functional Consultant",
    company: "Manhattan Associates",
    period: "Jan 2020 - Dec 2021",
    location: "Reading, UK",
    description: [
      "Delivered WMS implementation projects (WMOS 2018/19) for UK and Russian retailers, including end-to-end design, testing, and Go-live – boosting operational efficiency by 10-30% and supporting 150+ stores.",
      "Delivered training and enhancements for omni-channel operations.",
      "Participated in internal initiatives and user acceptance testing (UAT) of Manhattan's latest SaaS WMS offering.",
    ],
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    type: "experience",
    title: "Associate Consultant",
    company: "Manhattan Associates",
    period: "Nov 2018 - Jan 2020",
    location: "Reading, UK",
    description: [
      "Supported WMS design and deployment for tier-1 fashion and retail brands across Europe and Russia.",
      "Focused on configuration, data validation, and testing to improve productivity and inventory accuracy.",
      "Contributed to internal tooling and process improvement initiatives.",
    ],
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    type: "education",
    title: "MSc Industrial Engineering & Management",
    company: "University of Lisboa – Técnico Lisboa",
    period: "2016 – 2018",
    description: [
      "Grade: 18/20 (UK First-Class Honours equivalent)",
      "Modules: Operations Research, S&OP, SCM, Operations Planning & Control, Logistics and Distribution",
      "Thesis: Sustainable Supply Chain Optimisation (MILP) Model in the Aerospace & Defence sector — in collaboration with MIT Portugal and Embraer (Awarded grade: 20/20)",
    ],
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    type: "education",
    title: "BSc Industrial Engineering & Management",
    company: "University of Aveiro",
    period: "2011 – 2016",
    description: [
      "Student Leadership: Deputy President (2015) and Education Officer (2014) at Students' Union",
      "Student Governance: Chair & Member, University Academic Board (2014-2016)",
    ],
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
        {timelineData.map((item, index) => (
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
            <div className={`flex-1 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
              <div 
                className="rounded-lg p-6 border shadow-lg transition-colors"
                style={{ 
                  backgroundColor: 'var(--card-background)',
                  borderColor: 'var(--border-color)'
                }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? "items-end" : "items-start"}`}>
                  <h3 
                    className="text-xl font-bold mb-2 font-heading transition-colors"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {item.title}
                  </h3>
                  {item.company && (
                    <p 
                      className="font-semibold mb-2 font-body transition-colors"
                      style={{ color: 'var(--primary-teal)' }}
                    >
                      {item.company}
                      {item.location && ` – ${item.location}`}
                    </p>
                  )}
                  <p 
                    className="font-semibold text-sm mb-4 font-body transition-colors"
                    style={{ color: 'var(--primary-teal)' }}
                  >
                    {item.period}
                  </p>
                  <ul className={`space-y-2 font-body text-sm ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    {item.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start gap-2">
                        {index % 2 === 0 ? (
                          <>
                            <span className="flex-1 transition-colors" style={{ color: 'var(--foreground)' }}>{desc}</span>
                            <span className="mt-1 transition-colors" style={{ color: 'var(--primary-teal)' }}>•</span>
                          </>
                        ) : (
                          <>
                            <span className="mt-1 transition-colors" style={{ color: 'var(--primary-teal)' }}>•</span>
                            <span className="flex-1 transition-colors" style={{ color: 'var(--foreground)' }}>{desc}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
        ))}
      </div>
    </div>
  );
}

