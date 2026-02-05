export default function OurOffice() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#E9E4DA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 leading-tight">
            A Calm Space for Healing
          </h2>

          <p className="text-base sm:text-lg leading-relaxed px-2">
            Dr. Maya Reynolds offers therapy in a quiet, welcoming office in
            Santa Monica designed to help you feel safe, comfortable, and at
            ease. Whether you meet in person or through secure telehealth
            sessions across California, the goal is the same—creating a grounded
            space where meaningful healing can begin.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <img
            src="/office1.png"
            alt="Therapy office seating area"
            className="w-full h-[240px] sm:h-[280px] md:h-[320px] object-cover rounded-xl"
          />

          <img
            src="/office2.png"
            alt="Calm counseling space interior"
            className="w-full h-[240px] sm:h-[280px] md:h-[320px] object-cover rounded-xl"
          />

          <img
            src="/office3.png"
            alt="Private and comfortable therapy room"
            className="w-full h-[240px] sm:h-[280px] md:h-[320px] object-cover rounded-xl sm:col-span-2 md:col-span-1"
          />
        </div>

        {/* Optional small detail */}
        <p className="text-center text-xs sm:text-sm mt-6 sm:mt-8 lg:mt-10 opacity-80 px-4">
          In-person sessions in Santa Monica, CA • Telehealth available across
          California
        </p>
      </div>
    </section>
  );
}
