// ServicesSection.jsx
import React from 'react';

const ServicesSection = ({ services }) => {
  if (!services || services.length === 0) return null;

  return (
    <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-3">Services he provide:</h2>
      <div className="flex flex-wrap gap-2">
        {services.map((service, index) => (
          <span
            key={index}
            className="px-4 py-1 bg-gray-100 text-gray-800 rounded-full text-sm border border-gray-300"
          >
            {service.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

