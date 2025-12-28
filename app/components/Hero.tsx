"use client";

import { motion } from "framer-motion";
import { Download, CheckCircle2, Network } from "lucide-react";

export default function Hero() {
  // Neural network / Supply chain node animation
  const nodes = [
    { x: 20, y: 30, delay: 0 },
    { x: 50, y: 20, delay: 0.2 },
    { x: 80, y: 35, delay: 0.4 },
    { x: 35, y: 60, delay: 0.1 },
    { x: 65, y: 70, delay: 0.3 },
    { x: 50, y: 50, delay: 0.15 },
  ];

  return (
    <section 
      className="relative min-h-[85vh] flex items-center engineering-grid overflow-hidden transition-colors"
      style={{ backgroundColor: 'var(--background)' }}
      id="top"
    >
      {/* Neural Network / Supply Chain Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15">
        <svg className="w-full h-full max-w-2xl" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {/* Connections */}
          <motion.line
            x1="20"
            y1="30"
            x2="50"
            y2="50"
            stroke="currentColor"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            style={{ color: 'var(--primary-teal)' }}
          />
          <motion.line
            x1="50"
            y1="50"
            x2="80"
            y2="35"
            stroke="currentColor"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
            style={{ color: 'var(--primary-teal)' }}
          />
          <motion.line
            x1="35"
            y1="60"
            x2="50"
            y2="50"
            stroke="currentColor"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            style={{ color: 'var(--primary-teal)' }}
          />
          <motion.line
            x1="50"
            y1="50"
            x2="65"
            y2="70"
            stroke="currentColor"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.7, repeat: Infinity, repeatType: "reverse" }}
            style={{ color: 'var(--primary-teal)' }}
          />
          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.circle
              key={i}
              cx={node.x}
              cy={node.y}
              r="2"
              fill="currentColor"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                delay: node.delay,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ color: 'var(--primary-teal)' }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading transition-colors"
              style={{ color: 'var(--foreground)' }}
            >
              João Felício
            </h1>
            
            <p
              className="text-xl md:text-2xl font-body transition-colors"
              style={{ color: 'var(--foreground)' }}
            >
              Supply Chain & Logistics Consultant
            </p>
            
            <p
              className="text-lg font-body transition-colors"
              style={{ color: 'var(--text-muted)' }}
            >
              Works at Accenture | Focus on Target Operating Model, network optimisation, process re-engineering, and systems design and implementation.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== "undefined" && typeof document !== "undefined") {
                    const element = document.querySelector("#contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors shadow-lg hover:opacity-90"
                style={{ backgroundColor: 'var(--primary-teal)', color: 'var(--primary-navy)' }}
              >
                Get in Touch <span className="text-xl">→</span>
              </a>
              
              <div 
                className="px-6 py-3 rounded-lg font-medium flex items-center gap-2 border transition-colors"
                style={{ 
                  backgroundColor: 'transparent',
                  borderColor: 'var(--primary-teal)',
                  color: 'var(--primary-teal)'
                }}
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Available for Projects</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Bio Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div 
              className="rounded-lg p-6 border shadow-lg transition-colors"
              style={{ 
                backgroundColor: 'var(--card-background)',
                borderColor: 'var(--border-color)'
              }}
            >
              <h2 
                className="text-xl font-bold mb-4 font-heading transition-colors flex items-center gap-2"
                style={{ color: 'var(--primary-teal)' }}
              >
                <Network className="w-5 h-5" />
                About
              </h2>
              <p 
                className="text-base leading-relaxed font-body mb-3 transition-colors"
                style={{ color: 'var(--foreground)' }}
              >
                Strategic and hands-on Supply Chain Consultant with 7+ years of experience delivering 
                Logistics transformation projects across Europe, the US, and APAC.
              </p>
              <p 
                className="text-base leading-relaxed font-body transition-colors"
                style={{ color: 'var(--foreground)' }}
              >
                Proven track record in Logistics Operating model, warehouse management systems (WMS), 
                logistics operations, and business process re-engineering. Consulting Manager with 
                experience leading multifunctional teams and engaging senior stakeholders.
              </p>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                <a
                  href="/cv"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: 'var(--primary-teal)' }}
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
