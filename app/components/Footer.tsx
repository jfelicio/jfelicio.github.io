"use client";

import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] text-white py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#1abc9c]" />
            <span className="font-body">Location: Lisbon, Portugal</span>
          </div>
          <div className="text-sm font-body">
            Copyright © João Felicio {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}


