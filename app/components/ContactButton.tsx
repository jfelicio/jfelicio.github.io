"use client";

export default function ContactButton() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#64FFDA] focus:ring-offset-2 rounded px-1 transition-colors"
      aria-label="Enquire via contact form"
      style={{ color: 'var(--primary-teal)' }}
    >
      Enquire via contact form
    </button>
  );
}

