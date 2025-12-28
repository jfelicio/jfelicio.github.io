"use client";

import { motion } from "framer-motion";
import { Download, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#2c3e50] engineering-grid overflow-hidden">
      {/* Equalizer-like graphic in center */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="flex items-end gap-1 h-32">
          {[40, 60, 80, 100, 80, 60, 40, 60, 80, 100, 80, 60].map((height, i) => (
            <motion.div
              key={i}
              className="w-2 bg-[#1abc9c]"
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 font-heading"
          >
            Bridging the Gap
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-white mb-8 font-body"
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
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-[#1abc9c] hover:bg-[#16a085] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors shadow-lg cursor-pointer"
            >
              Get in Touch <span className="text-xl">→</span>
            </a>
            
            <div className="bg-[#1abc9c]/20 border border-[#1abc9c] text-[#1abc9c] px-6 py-4 rounded-lg font-medium flex items-center gap-2">
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
              href="/joao_felicio_cv.pdf"
              download
              className="inline-flex items-center gap-2 text-white hover:text-[#1abc9c] transition-colors"
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

