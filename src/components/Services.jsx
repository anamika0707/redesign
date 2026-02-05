export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* soft gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(190,150,110,0.15),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">


        {/* RIGHT IMAGE */}
        <div className="relative order-1 lg:order-none">
          <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-accent/20 to-gold/20 blur-3xl rounded-full" />
          <img
            src="/about.png"
            className="relative rounded-[6rem] sm:rounded-[8rem] lg:rounded-[10rem] shadow-2xl"
            alt="Therapy services"
          />
        </div>
        
        {/* LEFT TEXT */}
        <div className="space-y-6 sm:space-y-8 order-2 lg:order-none text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-primary px-2 lg:px-0">
            Compassionate Therapy for  
            <span className="text-accent"> Real Healing</span>
          </h1>

          <p className="text-base sm:text-lg text-primary/80 max-w-xl leading-relaxed mx-auto lg:mx-0 px-2 lg:px-0">
            Dr. Maya Reynolds provides thoughtful, evidence-based therapy in a
            calm and supportive space—helping adults navigate anxiety,
            relationships, and life transitions with clarity and confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-2 lg:px-0">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-black rounded-full shadow-lg hover:shadow-xl hover:scale-[1.03] transition">
              Book a Consultation
            </button>

            <button className="px-6 sm:px-8 py-3 sm:py-4 border border-primary rounded-full hover:bg-primary hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        
      </div>
    </section>
  );
}
