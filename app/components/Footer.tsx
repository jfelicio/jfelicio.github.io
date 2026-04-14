"use client";

import { MapPin, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer 
      className="border-t py-8 transition-colors"
      style={{ 
        backgroundColor: 'var(--background)',
        borderColor: 'var(--border-color)',
        color: 'var(--foreground)'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" style={{ color: 'var(--primary-teal)' }} />
              <span className="font-body">Location: London, UK</span>
            </div>
            <Link
              href="https://www.linkedin.com/in/felicio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label="LinkedIn profile"
              style={{ color: 'var(--primary-teal)' }}
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-body text-sm">LinkedIn</span>
            </Link>
          </div>
          <div className="text-sm font-body">
            Copyright © João Felício {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}


