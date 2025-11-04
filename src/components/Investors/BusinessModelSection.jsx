// components/BusinessModelSection.jsx
import React from 'react';
import img1 from '../../assets/business1.png';
import img2 from '../../assets/business2.png';

function BusinessModelSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Tawun Formula Column */}
          <div>
            <h3 className="text-xl font-semibold  mb-6 text-center">The Tawun Formula <span className="text-2xl">↘</span></h3>
            <div className="flex justify-center">
              <img 
                src={img2}
                alt="The Tawun Formula - Circular diagram showing continuous improvement"
                className="w-full max-w-md"
              />
            </div>
          </div>
          
          {/* Tawun Business Model Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">The Tawun Business Model <span className="text-2xl">↘</span></h3>
            <div className="flex justify-center">
              <img 
                src={img1}
                alt="The Tawun Business Model - Infographic showing business components"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessModelSection;