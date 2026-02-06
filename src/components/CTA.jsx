import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function CTA() {
  return (
    <section className="bg-[#4F6F59] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
        
        {/* LEFT CONTENT */}
        <Reveal className="text-[#F4F1EC]">
          <p className="uppercase tracking-widest text-sm mb-6 opacity-80">
            Ready to begin?
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif leading-tight mb-6">
            Take the First Step Toward Feeling Better
          </h2>

          <p className="text-base sm:text-lg opacity-90 max-w-xl leading-relaxed mb-10">
            If you're looking for a therapist who combines practical tools with
            depth-oriented work—and who understands the realities of living and
            working in a fast-paced environment—I may be a good fit. Schedule a
            free consultation to discuss your needs.
          </p>

          <button className="bg-[#E9E6E1] text-[#2F3A33] px-8 py-4 rounded-xl flex items-center gap-3 font-medium hover:opacity-90 transition w-full sm:w-auto justify-center">
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </Reveal>

        {/* RIGHT CONTACT CARD */}
        <Reveal className="bg-[#5E7D67] rounded-3xl p-6 sm:p-8 md:p-10 text-[#F4F1EC] shadow-lg" delay={120}>
          <h3 className="text-2xl font-serif mb-8">Contact Information</h3>

          <div className="space-y-8">
            
            {/* Phone */}
            <div className="flex gap-4">
              <div className="bg-[#6F8F79] p-3 rounded-xl">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="opacity-80 text-sm">Phone</p>
                <p className="font-medium">(310) 555-0123</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="bg-[#6F8F79] p-3 rounded-xl">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="opacity-80 text-sm">Email</p>
                <p className="font-medium">
                  dr.maya@therapysantamonica.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="bg-[#6F8F79] p-3 rounded-xl">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="opacity-80 text-sm">Office Address</p>
                <p className="font-medium leading-snug">
                  123th Street 45 W
                  <br />
                  Santa Monica, CA 90401
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="bg-[#6F8F79] p-3 rounded-xl">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="opacity-80 text-sm">Office Hours</p>
                <p className="font-medium">
                  Monday – Friday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#7F9B88] mt-10 pt-6 text-sm opacity-90">
            In-person sessions in Santa Monica • Telehealth throughout California
          </div>
        </Reveal>
      </div>
    </section>
  );
}
