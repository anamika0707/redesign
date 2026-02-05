export default function Faq() {
  const faqs = [
    "Do you offer virtual sessions across California?",
    "What issues do you specialize in?",
    "How do I schedule a consultation?",
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 text-center leading-tight">
          FAQs
        </h2>

        {faqs.map((q, i) => (
          <div key={i} className="border-t py-4 sm:py-5 text-base sm:text-lg px-2">
            {q}
          </div>
        ))}
      </div>
    </section>
  );
}
