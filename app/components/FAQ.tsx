"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "./Icons";
import { FAQ } from "@/app/lib/constants";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="section bg-muted/30"
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <header className="section-header mb-12 md:mb-16">
          <span className="label">Frequently Asked</span>
          <h2 id="faq-heading">Questions?</h2>
          <p>Quick answers to common questions. Can't find what you're looking for? <a href="#contact" className="text-primary font-semibold hover:underline">Contact us</a>.</p>
        </header>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4" role="list">
            {FAQ.map((faq, index) => (
              <article
                key={index}
                className="card overflow-hidden"
                role="listitem"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 md:py-6 flex items-center justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-foreground pr-10">{faq.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform duration-200">
                    {openIndex === index ? (
                      <ChevronRightIcon size={20} className="rotate-90" />
                    ) : (
                      <ChevronDownIcon size={20} />
                    )}
                  </div>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-hidden={openIndex !== index}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}