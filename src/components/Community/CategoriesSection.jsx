// File: src/components/CategoriesSection.jsx
import React from 'react';
import img1 from '../../assets/cf5.png';
import img2 from '../../assets/cf2.png';
import img3 from '../../assets/cf3.png';
import img4 from '../../assets/cf4.png';

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      title: 'Cleaning like a pro',
      image: img1,
      postCount: '23'
    },
    {
      id: 2,
      title: 'Cooking',
      image: img2,
      postCount: '23'
    },
    {
      id: 3,
      title: 'Baby sitting',
      image: img3,
      postCount: '23'
    },
    {
      id: 4,
      title: 'Commercial',
      image: img4,
      postCount: '23'
    }
  ];

  return (
    <section className="py-8 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(category => (
          <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <div className="h-40 overflow-hidden">
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex justify-between items-center">
              <h3 className="font-medium">{category.title}</h3>
              <div className="text-xs text-gray-500">{category.postCount} posts</div>
            </div>
            <div className="absolute top-3 right-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5 text-gray-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;

