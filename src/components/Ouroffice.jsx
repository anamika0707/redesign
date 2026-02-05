export default function OurOffice() {
  return (
    <section className="py-24 bg-[#E9E4DA]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">
            A Calm Space for Healing
          </h2>

          <p className="text-lg leading-relaxed">
            Dr. Maya Reynolds offers therapy in a quiet, welcoming office in
            Santa Monica designed to help you feel safe, comfortable, and at
            ease. Whether you meet in person or through secure telehealth
            sessions across California, the goal is the same—creating a grounded
            space where meaningful healing can begin.
          </p>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-3 gap-6">
          <img
            src="/office1.png"
            alt="Therapy office seating area"
            className="w-full h-[320px] object-cover rounded-xl"
          />

          <img
            src="/office2.png"
            alt="Calm counseling space interior"
            className="w-full h-[320px] object-cover rounded-xl"
          />

          <img
            src="/office3.png"
            alt="Private and comfortable therapy room"
            className="w-full h-[320px] object-cover rounded-xl"
          />
        </div>

        {/* Optional small detail */}
        <p className="text-center text-sm mt-10 opacity-80">
          In-person sessions in Santa Monica, CA • Telehealth available across
          California
        </p>
      </div>
    </section>
  );
}
