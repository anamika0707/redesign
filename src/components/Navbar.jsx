export default function Navbar() {
  return (
    <header className="w-full bg-white/70 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-semibold text-lg">Dr. Maya Reynolds</h1>
          <p className="text-xs text-neutral-500">
            PsyD • Licensed Clinical Psychologist
          </p>
        </div>

        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#office">Our Office</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="bg-[#5C7A60] text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-[#4e6a54] w-full sm:w-auto">
          Book Consultation
        </button>
      </div>
    </header>
  );
}
