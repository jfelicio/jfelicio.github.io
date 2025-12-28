"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Mail, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  const navLinks = [
    { href: "#summary", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0A192F] shadow-lg border-b border-[#E2E8F0] dark:border-[#64FFDA]/20 transition-colors"
      style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border-color)' }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-[#0A192F] dark:text-white font-bold text-xl md:text-2xl font-heading transition-colors" style={{ color: 'var(--foreground)' }}>
              João Felício
            </span>
            <Home className="w-5 h-5 text-[#64FFDA]" style={{ color: 'var(--primary-teal)' }} />
            <Mail className="w-5 h-5 text-[#64FFDA]" style={{ color: 'var(--primary-teal)' }} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[#0A192F] dark:text-[#CCD6F6] hover:text-[#64FFDA] transition-colors font-medium"
                style={{ color: 'var(--foreground)' }}
              >
                {link.label}
              </a>
            ))}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-[#64FFDA]/10 transition-colors"
                aria-label="Toggle theme"
                style={{ color: 'var(--primary-teal)' }}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-[#64FFDA]/10 transition-colors"
                aria-label="Toggle theme"
                style={{ color: 'var(--primary-teal)' }}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}
            <button
              className="text-[#0A192F] dark:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: 'var(--foreground)' }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-[#0A192F] dark:text-[#CCD6F6] hover:text-[#64FFDA] transition-colors font-medium"
                style={{ color: 'var(--foreground)' }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}


