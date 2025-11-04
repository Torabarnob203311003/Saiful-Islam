// File: src/components/ForumHeader.jsx
import React from 'react';
import img1 from '../../assets/cf1.png';

const ForumHeader = () => {
  return (
    <div className="py-6 px-32">

    
    <div className="rounded-2xl overflow-hidden relative ">
      <img
        src={img1}
        alt="Marketplace"
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Community Forum</h1>
        
      </div>
    </div>
    </div>
  )
}

export default ForumHeader;
