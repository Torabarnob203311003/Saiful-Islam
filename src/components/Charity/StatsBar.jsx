// File: src/components/StatsBar.jsx
import React from 'react';

const StatsBar = () => {
  const stats = [
    { value: "100M", label: "Helped people" },
    { value: "100M", label: "Fund raised " },
  ];
  
  return (
    <section className="w-full bg-amber-100 py-6 pl16 pr-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center text-center px-4 py-2">
              <svg className="w-8 h-8 text-gray-300 mr-2" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C13.1046 2 14 2.89543 14 4V6H16V4C16 2.89543 16.8954 2 18 2C19.1046 2 20 2.89543 20 4V6H22C23.1046 6 24 6.89543 24 8V10H2V8C2 6.89543 2.89543 6 4 6H6V4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4V6H12V4C12 2.89543 12.8954 2 14 2H12Z" fill="currentColor"/>
              </svg>
              <div className="relative">
                <p className="text-2xl font-bold z-10 relative">{stat.value}</p>
                <p className="text-gray-700 z-10 relative">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
