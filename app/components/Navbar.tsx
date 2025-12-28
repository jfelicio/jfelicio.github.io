"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Mail, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  const navLinks = [
    { href: "/#summary", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/#contact", label: "Contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link, handle smooth scroll; otherwise let Next.js handle routing
    if (href.includes("#")) {
      e.preventDefault();
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        const hash = href.includes("#") ? href.split("#")[1] : "";
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (href.startsWith("/")) {
          // Navigate to home page first, then scroll
          window.location.href = href;
        }
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
            <Link 
              href="/"
              className="font-bold text-xl md:text-2xl font-heading transition-colors hover:opacity-80"
              style={{ color: 'var(--foreground)' }}
            >
              João Felício
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] focus:ring-offset-2 rounded"
              style={{ color: 'var(--primary-teal)' }}
              aria-label="Home"
            >
              <Home className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== "undefined" && typeof document !== "undefined") {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  } else {
                    // If not on home page, navigate to home with hash
                    window.location.href = "/#contact";
                  }
                }
              }}
              className="transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] focus:ring-offset-2 rounded"
              aria-label="Enquire via email"
              title="Enquire via email"
              style={{ color: 'var(--primary-teal)' }}
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              if (link.href.startsWith("#")) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#64FFDA] transition-colors font-medium"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#64FFDA] transition-colors font-medium"
                  style={{ color: 'var(--foreground)' }}
                >
                  {link.label}
                </Link>
              );
            })}
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
            {navLinks.map((link) => {
              if (link.href.startsWith("#")) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block hover:text-[#64FFDA] transition-colors font-medium"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block hover:text-[#64FFDA] transition-colors font-medium"
                  style={{ color: 'var(--foreground)' }}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}


