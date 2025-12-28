"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-12 font-heading text-center">
            Let&apos;s Connect
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#2c3e50] mb-2 font-body">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1abc9c] focus:ring-2 focus:ring-[#1abc9c] outline-none transition-colors font-body"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#2c3e50] mb-2 font-body">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1abc9c] focus:ring-2 focus:ring-[#1abc9c] outline-none transition-colors font-body"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#2c3e50] mb-2 font-body">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1abc9c] focus:ring-2 focus:ring-[#1abc9c] outline-none transition-colors resize-none font-body"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#1abc9c] hover:bg-[#16a085] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
            
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-[#1abc9c] font-semibold flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                Message sent successfully!
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

