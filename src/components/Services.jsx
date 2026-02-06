import Image from "next/image";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Anxiety & Panic Therapy",
    desc: "Comprehensive treatment for chronic anxiety, panic attacks, and constant worry using CBT and mindfulness-based approaches.",
    img: "/mindfulness.jpg",
    tags: ["Generalized Anxiety", "Panic Disorder", "Social Anxiety", "Health Anxiety"],
  },
  {
    title: "Trauma & PTSD Treatment",
    desc: "Specialized EMDR and trauma-focused therapy for adults experiencing single-incident or complex trauma.",
    img: "/self-care.jpg",
    tags: ["EMDR Therapy", "Complex Trauma", "PTSD", "Childhood Trauma"],
  },
  {
    title: "Burnout & Perfectionism",
    desc: "Therapy for high-achievers feeling exhausted, disconnected, or overwhelmed by pressure and expectations.",
    img: "/mindfulness.jpg",
    tags: ["Work Stress", "High Achievers", "Perfectionism", "Life Balance"],
  },
];

export default function Services() {
  return (
    <section
      className="relative py-16 md:py-28 px-4 sm:px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/section-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/70" aria-hidden="true" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#243024] mb-6">
            Therapy Services in Santa Monica
          </h2>

          <p className="text-[#4A5A4A] max-w-2xl mx-auto mb-10 sm:mb-16">
            Evidence-based therapy tailored to adults navigating anxiety,
            trauma, and burnout — available in-person or via secure telehealth.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Reveal
              key={i}
              className="bg-[#e6e8e2] rounded-2xl overflow-hidden shadow-sm text-left"
              delay={i * 90}
            >
              <Image
                src={s.img}
                alt={s.title}
                width={400}
                height={260}
                className="w-full h-44 sm:h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="font-serif text-xl text-[#243024] mb-3">
                  {s.title}
                </h3>

                <p className="text-[#4A5A4A] mb-4 text-sm leading-relaxed">
                  {s.desc}
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.tags.map((t, idx) => (
                    <span key={idx} className="text-xs bg-[#dbdcda] px-3 py-1 rounded-full text-[#2F3E2F]">
                      {t}
                    </span>
                  ))}
                </div>

                <button className="text-sm text-[#2F4F3A] font-medium hover:underline">
                  Learn more →
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom info cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-10 sm:mt-14 text-left">
          <Reveal className="bg-[#e6e8e2] rounded-2xl p-6">
            <h4 className="font-serif text-lg mb-2">In-Person Sessions</h4>
            <p className="text-[#4A5A4A] text-sm">
              Meet in my quiet Santa Monica office — a calm, grounding
              space with natural light and comfortable seating.
            </p>
          </Reveal>

          <Reveal className="bg-[#e6e8e2] rounded-2xl p-6" delay={120}>
            <h4 className="font-serif text-lg mb-2">Telehealth Sessions</h4>
            <p className="text-[#4A5A4A] text-sm">
              Secure video therapy available throughout California,
              offering the same quality care from home.
            </p>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
