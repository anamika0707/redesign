"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);

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
    <nav >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between backdrop-blur bg-transparent">
        <h1 className="text-xl font-semibold">Dr. Maya Reynolds</h1>

        <div className="space-x-8 text-sm">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
