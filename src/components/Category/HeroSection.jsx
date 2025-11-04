// components/HeroSection.jsx
import React from 'react';

import categoryhero from '../../assets/categoryhero.png';

function HeroSection({category}) {
  return (
    <div
      className="relative h-96 mb-12 rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${categoryhero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center pb-16">
          <h1 className="text-4xl font-bold text-white mb-2">{category}</h1>
          <p className="text-white text-lg">Unlock the keys to peace of mind</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

