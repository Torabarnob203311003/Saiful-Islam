
// File: src/components/EventCard.jsx
import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const EventCard = ({ date, month, year, image, title, time, duration, location }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-0 right-0 shadow-md-2xl  py-4 px-8 text-white font-semibold bg-orange-500">
          <p className="text-sm">{date} {month}</p>
          <p className="text-xs">{year}</p>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Clock size={16} className="mr-1" />
          <span>{time} · {duration}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;