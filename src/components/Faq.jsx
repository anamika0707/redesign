export default function Faq() {
  const faqs = [
    "Do you offer virtual sessions across California?",
    "What issues do you specialize in?",
    "How do I schedule a consultation?",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl mb-8 text-center">FAQs</h2>

        {faqs.map((q, i) => (
          <div key={i} className="border-t py-4 text-lg">
            {q}
          </div>
        ))}
      </div>
    </section>
  );
}
