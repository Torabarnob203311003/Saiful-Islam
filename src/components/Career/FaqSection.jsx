// components/FaqSection.jsx
import React from 'react';
import FaqItem from './FaqItem';

function FaqSection() {
  const faqs = [
    {
      question: "Lorem ipsum dolor sit?",
      answer: "Lorem ipsum dolor sit amet consectetur. At potenti rhoncus consectetur sed amet pulvinar in sed eu."
    },
    {
      question: "Lorem ipsum dolor sit?",
      answer: "Lorem ipsum dolor sit amet consectetur. At potenti rhoncus consectetur sed amet pulvinar in sed eu."
    },
    {
      question: "Lorem ipsum dolor sit?",
      answer: "Lorem ipsum dolor sit amet consectetur. At potenti rhoncus consectetur sed amet pulvinar in sed eu."
    },
    {
      question: "Lorem ipsum dolor sit?",
      answer: "Lorem ipsum dolor sit amet consectetur. At potenti rhoncus consectetur sed amet pulvinar in sed eu."
    }
  ];

  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-center text-2xl font-bold mb-8">FAQ</h2>
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default FaqSection;