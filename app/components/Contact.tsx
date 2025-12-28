"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prevent duplicate submissions
    if (isSubmitting) return;

    // Honeypot check - if filled, it's likely a bot
    if (formData.website) {
      // Silently fail to avoid revealing the honeypot
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Get Formspree endpoint from environment variable or use default
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID';
      
      // Validate endpoint is configured
      if (formspreeEndpoint.includes('YOUR_FORM_ID')) {
        setSubmitStatus({ 
          type: 'error', 
          message: 'Contact form not configured. Please set NEXT_PUBLIC_FORMSPREE_ENDPOINT environment variable.' 
        });
        setIsSubmitting(false);
        return;
      }

      // Prepare form data
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        _subject: 'New message from jfelicio.github.io',
      };

      // Client-side validation
      if (!payload.name || !payload.email || !payload.message) {
        setSubmitStatus({ 
          type: 'error', 
          message: 'All fields are required.' 
        });
        setIsSubmitting(false);
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(payload.email)) {
        setSubmitStatus({ 
          type: 'error', 
          message: 'Please enter a valid email address.' 
        });
        setIsSubmitting(false);
        return;
      }

      // Validate field lengths
      if (payload.name.length < 2 || payload.name.length > 100) {
        setSubmitStatus({ 
          type: 'error', 
          message: 'Name must be between 2 and 100 characters.' 
        });
        setIsSubmitting(false);
        return;
      }

      if (payload.message.length < 10 || payload.message.length > 2000) {
        setSubmitStatus({ 
          type: 'error', 
          message: 'Message must be between 10 and 2000 characters.' 
        });
        setIsSubmitting(false);
        return;
      }

      // Send to Formspree
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Your message has been categorised and sent.' 
        });
        // Reset form
        setFormData({ name: "", email: "", message: "", website: "" });
        // Clear status after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: '' });
        }, 5000);
      } else {
        // Handle Formspree error response
        const errorMessage = result.error || 'Something went wrong. Please try again later.';
        setSubmitStatus({ 
          type: 'error', 
          message: errorMessage 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 transition-colors"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-12 font-heading text-center transition-colors"
            style={{ color: 'var(--primary-teal)' }}
          >
            Let&apos;s Connect
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field - hidden from users but visible to bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>

            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-semibold mb-2 font-body transition-colors"
                style={{ color: 'var(--foreground)' }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border outline-none transition-colors font-body"
                style={{ 
                  borderColor: 'var(--border-color)',
                  backgroundColor: 'var(--card-background)',
                  color: 'var(--foreground)'
                }}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-semibold mb-2 font-body transition-colors"
                style={{ color: 'var(--foreground)' }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border outline-none transition-colors font-body"
                style={{ 
                  borderColor: 'var(--border-color)',
                  backgroundColor: 'var(--card-background)',
                  color: 'var(--foreground)'
                }}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-semibold mb-2 font-body transition-colors"
                style={{ color: 'var(--foreground)' }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border outline-none transition-colors resize-none font-body"
                style={{ 
                  borderColor: 'var(--border-color)',
                  backgroundColor: 'var(--card-background)',
                  color: 'var(--foreground)'
                }}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: 'var(--primary-teal)',
                color: 'var(--primary-navy)'
              }}
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
            
            {/* Success message */}
            {submitStatus.type === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center font-semibold flex items-center justify-center gap-2"
                style={{ color: 'var(--primary-teal)' }}
              >
                <CheckCircle2 className="w-5 h-5" />
                {submitStatus.message}
              </motion.div>
            )}

            {/* Error message */}
            {submitStatus.type === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center font-semibold flex items-center justify-center gap-2"
                style={{ color: '#ef4444' }}
              >
                <AlertCircle className="w-5 h-5" />
                {submitStatus.message}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

