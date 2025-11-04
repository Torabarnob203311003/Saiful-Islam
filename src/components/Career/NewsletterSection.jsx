
// components/NewsletterSection.jsx
import React from 'react';

function NewsletterSection() {
  return (
    <section className="bg-amber-100 py-12 p-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Subscribe to get updated on job trends and our latest opportunities</h2>
        </div>
        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Email"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="bg-amber-500 hover:bg-amber-300 text-black font-semibold py-800 px-6 py-2 rounded-r-md transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
