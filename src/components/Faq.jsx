"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    question: "What should I expect from my first session?",
    answer:
      "Your first session is an opportunity for us to get to know each other. We’ll discuss your concerns, goals, and any background information that feels important. You’re welcome to ask questions about the therapy process, and together we’ll decide the best path forward at a pace that feels comfortable for you.",
  },
  {
    question: "What types of therapy do you offer?",
    answer:
      "I use an integrative approach tailored to each individual’s needs. This may include cognitive behavioral therapy (CBT), mindfulness-based techniques, and person-centered therapy. The goal is to provide practical tools, emotional support, and meaningful insight that align with your personal experiences.",
  },
  {
    question: "Do you offer in-person or online therapy sessions?",
    answer:
      "Yes, both options are available. In-person sessions provide a traditional face-to-face environment, while secure online sessions offer flexibility and convenience from the comfort of your own space. We can choose the format that works best for your lifestyle and preferences.",
  },
  {
    question: "How long does therapy typically last?",
    answer:
      "The length of therapy varies depending on your goals and the challenges you’re working through. Some clients benefit from short-term support over a few weeks, while others prefer longer-term therapy for deeper personal growth. We’ll regularly review progress together and adjust as needed.",
  },
  {
    question: "What issues do you specialize in?",
    answer:
      "I support individuals experiencing anxiety, stress, life transitions, self-esteem concerns, relationship challenges, and emotional overwhelm. My focus is creating a safe, compassionate space where you can explore your thoughts and feelings while building healthier coping strategies.",
  },
  {
    question: "How do I know if therapy is right for me?",
    answer:
      "If you’re feeling stuck, overwhelmed, or simply seeking personal growth, therapy can be a valuable step. You don’t need to have everything figured out before starting. An initial consultation can help you determine whether this approach feels supportive and aligned with your needs.",
  },
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#F4F1EC] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 md:gap-16">

        {/* LEFT CONTENT */}
        <Reveal>
          <p className="text-sm tracking-widest text-[#C27C4E] uppercase mb-6">
            Common Questions
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2F3A33] leading-tight mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-[#6B746D] max-w-md mb-10">
            Starting therapy can bring up a lot of questions. Here are answers to
            some of the most common ones I hear from prospective clients.
          </p>

          {/* Support Card */}
          <div className="bg-[#E7E5E1] rounded-2xl p-8 max-w-md">
            <h3 className="text-lg font-medium text-[#2F3A33] mb-3">
              Still have questions?
            </h3>
            <p className="text-[#6B746D] leading-relaxed">
              I'm happy to answer any questions you might have. Reach out for a
              free consultation call to learn more about how I can help.
            </p>
          </div>
        </Reveal>

        {/* RIGHT FAQ ACCORDION */}
        <Reveal className="space-y-5" delay={120}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#EDEBE6] rounded-2xl px-6 py-5 cursor-pointer transition"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <p className="text-[#2F3A33] text-lg font-medium">
                    {faq.question}
                  </p>

                  <ChevronDown
                    className={`w-5 h-5 text-[#2F3A33] transition-transform ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </div>

                {isOpen && (
                  <p className="mt-4 text-[#6B746D] leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}

        </Reveal>
      </div>
    </section>
  );
}
