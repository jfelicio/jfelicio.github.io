"use client";

import { motion } from "framer-motion";
import { Download, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center engineering-grid overflow-hidden transition-colors"
      style={{ backgroundColor: 'var(--background)' }}
    >
      {/* Equalizer-like graphic in center */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="flex items-end gap-1 h-32">
          {[40, 60, 80, 100, 80, 60, 40, 60, 80, 100, 80, 60].map((height, i) => (
            <motion.div
              key={i}
              className="w-2 transition-colors"
              style={{ backgroundColor: 'var(--primary-teal)' }}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 font-heading transition-colors"
            style={{ color: 'var(--foreground)' }}
          >
            Bridging the Gap
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl mb-8 font-body transition-colors"
            style={{ color: 'var(--foreground)' }}
          >
            Industrial Engineer & Software Consultant
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
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
              className="bg-[#64FFDA] hover:bg-[#52E3C2] text-[#0A192F] px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors shadow-lg cursor-pointer"
            >
              Get in Touch <span className="text-xl">→</span>
            </a>
            
            <div className="bg-[#64FFDA]/10 border border-[#64FFDA] text-[#64FFDA] px-6 py-4 rounded-lg font-medium flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Status: Available for Projects
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8"
          >
            <a
              href="/reference/Joao_Felicio_SupplyChain_CV_2026.pdf"
              download
              className="inline-flex items-center gap-2 transition-colors"
              style={{ color: 'var(--foreground)' }}
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

