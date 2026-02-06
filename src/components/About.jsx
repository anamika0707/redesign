import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section className="bg-[#F6F4EF] py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Image */}
          <Reveal className="relative">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/doctor.png"
                alt="Dr Maya Reynolds"
                width={600}
                height={750}
                className="object-cover w-full h-full"
              />
            </div>

            {/* soft shape behind */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#E7E2D8] rounded-2xl -z-10" />
          </Reveal>

          {/* Text */}
          <Reveal delay={100}>
            <p className="text-sm tracking-widest text-[#9B7B4F] uppercase mb-3">
              About Dr. Reynolds
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1F2A1F] leading-tight mb-6">
              A Warm, Collaborative  
              <br /> Approach to Healing
            </h2>

            <p className="text-[#4A5A4A] mb-4">
              I'm a licensed clinical psychologist based in Santa Monica,
              California, offering therapy for adults who feel overwhelmed
              by anxiety, stress, or the lingering effects of past experiences.
            </p>

            <p className="text-[#4A5A4A] mb-6">
              My approach is warm, collaborative, and grounded. I integrate
              CBT, EMDR, mindfulness-based practices, and body-oriented
              techniques to support both emotional and physiological healing.
            </p>

            {/* Credentials */}
            <div className="bg-[#EEF1EA] rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#2F3E2F]">
              <p>• Doctor of Psychology (PsyD)</p>
              <p>• EMDR Certified Therapist</p>
              <p>• Cognitive Behavioral Therapy</p>
              <p>• Mindfulness-Based Interventions</p>
            </div>
          </Reveal>
        </div>

        {/* QUOTE BANNER */}
        <Reveal delay={150}>
          <div className="mt-16 md:mt-20 rounded-2xl overflow-hidden relative">
            <Image
              src="/therapy-session.jpg"
              alt="Therapy room"
              width={1400}
              height={400}
              className="w-full h-[220px] sm:h-[260px] object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-[#2F4F3A]/70" />

            {/* text */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-3xl px-6 sm:px-10 text-white italic text-base sm:text-lg md:text-xl leading-relaxed">
                “My goal is not just symptom relief, but helping clients develop
                insight, resilience, and a stronger relationship with themselves
                over time.”
                <div className="mt-4 not-italic text-sm">
                  — Dr. Maya Reynolds, PsyD
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
