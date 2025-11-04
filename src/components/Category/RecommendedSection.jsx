
// components/RecommendedSection.jsx
import React from 'react';
import ServiceCard from './ServiceCard';

function RecommendedSection() {
  const recommendations = [
    {
      name: "Sarah Taylor",
      rating: 4.7,
      reviews: 211,
      description: "I have over 5 years of experience in professional home cleaning. I provide thorough and efficient service tailored to your specific needs.",
      price: 25.00,
      image: "/api/placeholder/250/150"
    },
    {
      name: "Sophie Bennett",
      rating: 4.9,
      reviews: 173,
      description: "Experienced pet sitter offering care for dogs, cats, and small pets. Daily walks, feeding, and overnight stays available.",
      price: 30.00,
      image: "/api/placeholder/250/150"
    },
    {
      name: "Frank Peterson",
      rating: 4.5,
      reviews: 150,
      description: "Moving specialist with 8+ years experience. Handling everything from packing to transportation for stress-free moves.",
      price: 45.00,
      image: "/api/placeholder/250/150"
    },
    {
      name: "Olivia Williams",
      rating: 4.8,
      reviews: 192,
      description: "Professional organizer helping transform cluttered spaces into functional, beautiful areas. Custom solutions for any budget.",
      price: 35.00,
      image: "/api/placeholder/250/150"
    }
  ];

  return (
    <div className="py-6 px-32 mt-32">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Just for you</h2>
        <span className="text-sm text-blue-600">See all &gt;</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedSection;