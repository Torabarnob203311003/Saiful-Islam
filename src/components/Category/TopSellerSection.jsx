
// components/TopSellerSection.jsx
import React from 'react';
import ServiceCard from './ServiceCard';

function TopSellerSection() {
  const topSellers = [
    {
      name: "Lucas Martinez",
      rating: 4.9,
      reviews: 321,
      description: "Professional handyman with 10+ years experience. Specializing in furniture assembly, minor plumbing, and electrical work.",
      price: 35.00,
      image: "/api/placeholder/250/150"
    },
    {
      name: "Isabella Rodriguez",
      rating: 4.7,
      reviews: 278,
      description: "Experienced home chef offering meal prep, special event cooking, and cooking lessons. Using fresh, locally sourced ingredients.",
      price: 40.00,
      image: "/api/placeholder/250/150"
    },
    {
      name: "Julian Wilson",
      rating: 4.8,
      reviews: 305,
      description: "Expert gardener providing complete lawn care, garden design, planting, and maintenance. Eco-friendly practices.",
      price: 30.00,
      image: "/api/placeholder/250/150"
    },
    {
      name: "Charlotte Johnson",
      rating: 4.9,
      reviews: 317,
      description: "Certified pet trainer and sitter. Specializing in dog walking, basic training, and pet sitting services. Animal lover.",
      price: 25.00,
      image: "/api/placeholder/250/150"
    }
  ];

  return (
    <div className="py-6 px-32">
      <h2 className="text-xl font-medium mb-4">Top seller</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topSellers.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default TopSellerSection;