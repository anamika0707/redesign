import { MapPin, Phone, Video } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[90vh] min-h-[560px] md:min-h-[700px] flex items-center overflow-hidden">
      
      {/* Background scenery image */}
      <Image
        src="/hero-bg.jpg"   // place your calm scenery image in /public
        alt="Calm nature scenery"
        fill
        priority
        className="object-cover"
      />

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-[#F5F2EC]/85" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <Reveal className="max-w-2xl">
          
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-[#E7ECE8] text-[#3E5B4A] px-4 py-2 rounded-full text-sm mb-6">
            <MapPin className="w-4 h-4" />
            Santa Monica, California
          </div>

          {/* Heading */}
          <h1 className="text-[40px] sm:text-[48px] md:text-[64px] leading-[1.1] font-serif text-[#2F3A33] mb-6">
            Find Calm <br />
            <span className="text-[#4F6F59]">in the Chaos</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#5F6B63] leading-relaxed mb-6">
            Compassionate, evidence-based therapy for high-achieving adults
            navigating <strong>anxiety, trauma, and burnout.</strong> Rediscover
            peace with a licensed clinical psychologist who understands.
          </p>

          {/* Bullet points */}
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-[#6B746D] mb-8">
            {[
              "EMDR & CBT Trained",
              "Licensed Psychologist",
              "Telehealth Available",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#B07A56] rounded-full" />
                {item}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#3E5B4A] text-white px-7 py-4 rounded-xl flex items-center gap-2 font-medium shadow-sm hover:bg-[#324A3D] transition w-full sm:w-auto justify-center">
              <Phone className="w-5 h-5" />
              Schedule Free Consultation
            </button>

            <button className="border border-[#AAB5AE] bg-white/70 backdrop-blur text-[#2F3A33] px-7 py-4 rounded-xl flex items-center gap-2 font-medium hover:bg-white transition w-full sm:w-auto justify-center">
              <Video className="w-5 h-5" />
              Telehealth Sessions
            </button>
          </div>
        </Reveal>
      </div>

      {/* Bottom soft gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F5F2EC] to-transparent" />
    </section>
  );
}
