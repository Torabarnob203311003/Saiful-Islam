// components/FaqItem.jsx
import React, { useState } from 'react';

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4">
      <button 
        className="flex w-full justify-between items-center text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="ml-6 flex-shrink-0">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default FaqItem;