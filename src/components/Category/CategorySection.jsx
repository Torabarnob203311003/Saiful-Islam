// components/CategorySection.jsx
import React from 'react';
import CategoryItem from './CategoryItem';

function CategorySection() {
  const categories = [
    { name: 'Laundry', icon: '👕' },
    { name: 'Cleaning', icon: '🧹' },
    { name: 'Delivery', icon: '📦' },
    { name: 'General Handyman', icon: '🔧' },
    { name: 'Pet Care', icon: '🐾' },
    { name: 'Baby Sitting', icon: '👶' },
    { name: 'Removals', icon: '🚚' },
    { name: 'Car Maintenance', icon: '🚗' },
    { name: 'Lawn Care', icon: '🌿' },
  ];

  return (
    <div className="absolute  p-6 left-1/2 transform -translate-x-1/2  -translate-y-1/2 py-6 bg-white rounded-lg shadow-lg ">
      <h2 className="text-xl font-medium mb-4">Browse by category</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
        {categories.map((category, index) => (
          <CategoryItem key={index} name={category.name} icon={category.icon} />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;

