
// components/ServiceCard.jsx
import React from 'react';
import { Star } from 'lucide-react';

function ServiceCard({ service }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="h-48 bg-gray-200 relative">
        <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2 bg-white rounded-full w-10 h-10 flex items-center justify-center overflow-hidden">
          {/* This would be a user avatar */}
          <div className="w-8 h-8 rounded-full bg-gray-400"></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">{service.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm ml-1">{service.rating} ({service.reviews})</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
        <div className="text-right">
          <p className="text-sm text-gray-500">From ${service.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;