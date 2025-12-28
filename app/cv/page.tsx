"use client";

import { useEffect } from "react";

export default function CVPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.href = "/reference/Joao_Felicio_SupplyChain_CV_2026.pdf";
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--background)' }}>
      <div className="text-center">
        <p style={{ color: 'var(--foreground)' }}>Redirecting to CV...</p>
      </div>
    </div>
  );
}

