import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1E2D25] to-[#16221C] text-[#E7E3DA] pt-12 md:pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* TOP GRID */}
        <Reveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          
          {/* LEFT INFO */}
          <div>
            <h3 className="text-xl font-serif mb-2">Dr. Maya Reynolds</h3>
            <p className="text-sm opacity-80 mb-4">
              PsyD • Licensed Clinical Psychologist
            </p>

            <p className="opacity-80 leading-relaxed max-w-sm">
              Compassionate therapy for anxiety, trauma, and burnout.
              Serving adults in Santa Monica and throughout California.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-serif mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-90">
              {[
                "About Dr. Reynolds",
                "Therapy Services",
                "Our Office",
                "FAQ",
                "Contact",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:opacity-70 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SPECIALIZATIONS */}
          <div>
            <h4 className="font-serif mb-4">Specializations</h4>
            <ul className="space-y-2 opacity-90">
              {[
                "Anxiety & Panic Therapy",
                "Trauma & PTSD Treatment",
                "EMDR Therapy",
                "Burnout & Perfectionism",
                "Telehealth Therapy",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:opacity-70 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* DIVIDER */}
        <div className="border-t border-[#2E3D34] my-10" />

        {/* BOTTOM ROW */}
        <Reveal className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm opacity-90" delay={120}>
          <p>© 2026 Dr. Maya Reynolds, PsyD. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:opacity-70 cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:opacity-70 cursor-pointer transition">
              Terms of Service
            </span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
