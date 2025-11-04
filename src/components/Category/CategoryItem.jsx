
// components/CategoryItem.jsx
import React from 'react';

function CategoryItem({ name, icon }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl mb-2">
        {icon}
      </div>
      <span className="text-sm text-center">{name}</span>
    </div>
  );
}

export default CategoryItem;