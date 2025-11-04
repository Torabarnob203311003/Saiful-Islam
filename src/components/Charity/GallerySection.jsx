// File: src/components/GallerySection.jsx
import React from 'react';
import img1 from '../../assets/Rectangle 1351.png';
import img2 from '../../assets/Rectangle 1352.png';
import img3 from '../../assets/Rectangle 1353.png';
import img4 from '../../assets/Rectangle 1354.png';
import img5 from '../../assets/Rectangle 1355.png';
import img6 from '../../assets/Rectangle 1356.png';

const GallerySection = () => {
  const GalleryImage = ({ image, className }) => {
    return (
      <div className={`overflow-hidden rounded-lg ${className}`}>
        <img 
          src={image} 
          alt="Gallery" 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    );
  };

  return (
    <section className="w-full py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-16 text-center">Our gallery</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-rows-2 gap-4 h-600">
            <GalleryImage image={img1} className="" />
            <GalleryImage image={img2} className="" />
          </div>
          <div className="grid grid-rows-2 grid-cols-2 gap-4 h-600">
            <GalleryImage image={img3} className="h-300" />
            <GalleryImage image={img4} className="h-300" />
            <GalleryImage image={img5} className="h-300" />
            <GalleryImage image={img6} className="h-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
