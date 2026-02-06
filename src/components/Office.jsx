import Image from "next/image";
import { MapPin, Shield, Clock, Leaf } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Office() {
  return (
    <section className="bg-[#f5efdb] py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="text-sm tracking-[0.2em] text-[#c28b5b] uppercase mb-4">
            A Calm Space for Healing
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2f3e1f] mb-6">
            Our Santa Monica Office
          </h2>

          <p className="text-[#5b6b57] text-base sm:text-lg leading-relaxed">
            My office is a quiet, private space designed to feel calm and grounding.
            Clients often share that the space itself helps them feel more at ease
            the moment they arrive.
          </p>
        </Reveal>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-8 mt-10 sm:mt-16">
          <Reveal className="rounded-3xl overflow-hidden">
            <Image
              src="/office1.jpeg"
              alt="Therapy office seating"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </Reveal>

          <Reveal className="rounded-3xl overflow-hidden" delay={120}>
            <Image
              src="/office2.jpeg"
              alt="Therapy waiting room"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </Reveal>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 sm:mt-14">
          {[
            {
              icon: <Leaf className="w-6 h-6 text-[#5b6b57]" />,
              title: "Calm & Grounding",
              desc: "Natural light, plants, and uncluttered design to help you feel at ease",
            },
            {
              icon: <Shield className="w-6 h-6 text-[#5b6b57]" />,
              title: "Private & Secure",
              desc: "Complete confidentiality in a quiet, professional setting",
            },
            {
              icon: <Clock className="w-6 h-6 text-[#5b6b57]" />,
              title: "Flexible Scheduling",
              desc: "Weekday appointments with some evening availability",
            },
            {
              icon: <MapPin className="w-6 h-6 text-[#5b6b57]" />,
              title: "Easy Access",
              desc: "Convenient Santa Monica location with nearby parking",
            },
          ].map((item, i) => (
            <Reveal
              key={i}
              className="bg-white/70 backdrop-blur rounded-2xl p-8 text-center shadow-sm"
              delay={i * 80}
            >
              <div className="w-12 h-12 flex items-center justify-center mx-auto rounded-full bg-[#eef1ea] mb-4">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-[#2f3e1f] mb-2">
                {item.title}
              </h3>
              <p className="text-[#6b7763] text-sm leading-relaxed">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Location + Session Options */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          
          {/* Location */}
          <Reveal className="bg-white/70 backdrop-blur rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
            <h3 className="font-serif text-2xl text-[#2f3e1f] mb-4">
              Office Location
            </h3>

            <p className="flex items-start gap-2 text-[#2f3e1f] mb-4">
              <MapPin className="w-5 h-5 mt-1" />
              <span>
                123th Street 45 W <br/>Santa Monica, CA 90401
              </span>
            </p>

            <p className="text-[#6b7763] leading-relaxed">
              Located in the heart of Santa Monica, my office offers easy access
              with nearby parking options. The building is quiet and private,
              ensuring your confidentiality from the moment you arrive.
            </p>
          </Reveal>

          {/* Session Options */}
          <Reveal className="bg-white/70 rounded-3xl p-6 sm:p-8 md:p-10" delay={120}>
            <h3 className="font-serif text-2xl text-[#2f3e1f] mb-4">
              Session Options
            </h3>

            <ul className="space-y-3 text-[#2f3e1f]">
              <li className="flex gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#5b6b57]" />
                In-Person at Santa Monica office
              </li>
              <li className="flex gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#5b6b57]" />
                Secure telehealth throughout California
              </li>
              <li className="flex gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#5b6b57]" />
                Hybrid options available
              </li>
            </ul>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
