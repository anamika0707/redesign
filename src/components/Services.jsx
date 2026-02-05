export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* soft gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(190,150,110,0.15),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT TEXT */}
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl leading-tight text-primary">
            Compassionate Therapy for  
            <span className="text-accent"> Real Healing</span>
          </h1>

          <p className="text-lg text-primary/80 max-w-xl leading-relaxed">
            Dr. Maya Reynolds provides thoughtful, evidence-based therapy in a
            calm and supportive space—helping adults navigate anxiety,
            relationships, and life transitions with clarity and confidence.
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

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-accent/20 to-gold/20 blur-3xl rounded-full" />
          <img
            src="/about.png"
            className="relative rounded-[10rem] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
