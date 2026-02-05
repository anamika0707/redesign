export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(138,154,91,0.18),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl leading-tight text-primary">
            Gentle Therapy for  
            <span className="text-accent"> Meaningful Change</span>
          </h1>

          <p className="text-lg text-primary/80 max-w-xl leading-relaxed">
            Dr. Maya Reynolds offers compassionate, evidence-based therapy to
            help adults navigate anxiety, relationships, and life transitions
            in a calm and supportive environment.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-4 bg-primary text-black rounded-full shadow-lg hover:shadow-xl hover:scale-[1.03] transition">
              Book a Consultation
            </button>

            <button className="px-8 py-4 border border-primary rounded-full hover:bg-primary hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center lg:justify-end">

          {/* main organic image */}
          <div className="relative w-[340px] sm:w-[420px] lg:w-[460px] aspect-[4/5] rounded-[220px] overflow-hidden shadow-2xl">
            <img
              src="/hero.png"
              alt="Calm therapy space"
              className="w-full h-full object-cover"
            />
          </div>

          {/* subtle decorative blur */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-gold/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
