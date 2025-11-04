
// components/CareerOpportunitiesSection.jsx
import React from 'react';

function CareerOpportunitiesSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Career opportunities</h2>
          <p className="text-gray-700">5 open positions</p>
        </div>
        <p className="mb-8">
          Explore our open jobs by scrolling or using the filters, from fully remote to on-premise positions
        </p>
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-md py-3 px-4 pr-12"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-amber-100 hover:bg-amber-200 p-1 rounded">
            🔍
          </button>
        </div>
      </div>
    </section>
  );
}

export default CareerOpportunitiesSection;