export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(138,154,91,0.18),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-primary px-2">
            Gentle Therapy for  
            <span className="text-accent"> Meaningful Change</span>
          </h1>

          <p className="text-base sm:text-lg text-primary/80 max-w-xl leading-relaxed mx-auto lg:mx-0 px-2">
            Dr. Maya Reynolds offers compassionate, evidence-based therapy to
            help adults navigate anxiety, relationships, and life transitions
            in a calm and supportive environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-2">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-black rounded-full shadow-lg hover:shadow-xl hover:scale-[1.03] transition duration-300">
              Book a Consultation
            </button>

            <button className="px-6 sm:px-8 py-3 sm:py-4 border border-primary rounded-full hover:bg-primary hover:text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">

          {/* main organic image */}
          <div className="relative w-[280px] sm:w-[340px] md:w-[420px] lg:w-[460px] aspect-[4/5] rounded-[140px] sm:rounded-[220px] overflow-hidden shadow-2xl">
            <img
              src="/hero.png"
              alt="Calm therapy space"
              className="w-full h-full object-cover"
            />
          </div>

          {/* subtle decorative blur */}
          <div className="absolute -top-10 -right-10 w-32 sm:w-48 h-32 sm:h-48 bg-gold/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
