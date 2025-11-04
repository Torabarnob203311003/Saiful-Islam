// components/HeroSection.jsx
import React from 'react';
import ch1 from '../../assets/c1.png';

function HeroSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <p className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-2">
            CAREERS • JOIN US
          </p>
          <h1 className="text-4xl font-bold mb-4">Work with us.</h1>
          <p className="text-gray-600 mb-6 max-w-lg">
            Lorem ipsum dolor sit amet consectetur. At suscipit rhoncus 
            vestibulum sit ante dictumst pellentesque. Fames velit 
            accumsan mi nibh placerat hendrerit eget vel. Sed 
            egestas nec eu pharetra tempor amet. Ac vitae suspendisse 
            pellentesque.
          </p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition-colors">
            Find out more
          </button>
        </div>
        <div className="md:w-1/2 md:pl-16">
          <img 
            src={ch1} 
            alt="Team collaboration" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;