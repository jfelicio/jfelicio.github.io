"use client";

import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] dark:bg-[#0A192F] bg-white dark:bg-[#0A192F] border-t border-[#64FFDA]/20 dark:border-[#64FFDA]/20 text-[#CCD6F6] dark:text-[#CCD6F6] text-[#0A192F] dark:text-[#CCD6F6] py-8 transition-colors">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#64FFDA]" />
            <span className="font-body">Location: London, UK</span>
          </div>
          <div className="text-sm font-body">
            Copyright © João Felício {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}


