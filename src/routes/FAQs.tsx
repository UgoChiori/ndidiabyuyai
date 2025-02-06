import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What type of cuisine do you serve?",
      answer:
        "We specialize in authentic Nigerian cuisine, offering a variety of traditional dishes made with love and care.",
    },
    {
      question: "Do you offer vegetarian or vegan options?",
      answer: (
        <>
          Yes, we have a selection of vegetarian and vegan dishes. Please inform our staff of any dietary restrictions when ordering or visit our{" "}
          <Link to="/reservations" className="text-black underline">
            Reservations Page
          </Link>
          .
        </>
      ),
    },
    {
      question: "Do you offer catering services?",
      answer:
        "Yes, we provide catering services for events, parties, and gatherings. Contact us for more details!",
    },
    {
      question: "Can I make a reservation?",
      answer:
      (
        <>
        Absolutely! You can book a table through our website or by calling our restaurant directly. Visit our{" "}
        <Link to="/reservations" className="text-black  underline">
          Reservations Page
        </Link>
        .
      </>
      ),
        // ,
    },
    {
      question: "Do you offer delivery services?",
      answer:
        "Yes, we offer delivery services within Lagos. You can place an order through our website or your preferred food delivery app.",
    },
    {
      question: "What are your opening hours?",
      answer:
        "We are open from 10:00 AM to 10:00 PM, Monday to Sunday. Special hours may apply during holidays.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-12 md:py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-gray-600">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
