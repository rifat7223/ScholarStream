import React, { useState } from 'react';

const FaqQuestion = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a scholarship?",
      answer:
        "A scholarship is financial aid awarded to students to help pay for education, usually based on academic or personal achievements.",
    },
    {
      question: "How do I apply for a scholarship?",
      answer:
        "You can apply through the official website of the provider or through our platform by submitting the required documents.",
    },
    {
      question: "Is the service free?",
      answer:
        "Yes, browsing and applying for most scholarships on our platform is completely free.",
    },
    {
      question: "Can international students apply?",
      answer:
        "Most scholarships are open to international students, but eligibility depends on the provider.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return (
       <section className="bg-[#eafaf8] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B5555] text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-md border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-[#0B5555]">
                  {faq.question}
                </span>
                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default FaqQuestion;