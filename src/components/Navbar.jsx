"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      if (window.scrollY < 50) {
        setVisible(true);
        return;
      }

      setVisible(true);
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setVisible(false);
      }, 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center backdrop-blur bg-transparent">
        <h1 className="text-lg sm:text-xl font-semibold">Dr. Maya Reynolds</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm">
          <a href="#services" className="hover:opacity-70 transition">
            Services
          </a>
          <a href="#contact" className="hover:opacity-70 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-full bg-current transition-transform ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-current transition-opacity ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-current transition-transform ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-4 py-6 space-y-4 text-center">
            <a
              href="#services"
              className="block py-2 text-base hover:opacity-70 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="block py-2 text-base hover:opacity-70 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
