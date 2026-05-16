"use client";

import { MapPin } from "lucide-react";
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
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
