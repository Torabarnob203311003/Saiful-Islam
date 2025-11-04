// components/ValuesSection.jsx
import React from 'react';
import img1 from '../../assets/Careersimg.png';

function ValuesSection() {
  const values = [
    { icon: "👤", label: "Ownership" },
    { icon: "🛠️", label: "Innovation" },
    { icon: "🤝", label: "Collaboration" },
    { icon: "🎯", label: "Excellence" },
    { icon: "🤝", label: "Collaboration" },
    { icon: "🎯", label: "Excellence" }
  ];

  return (
    <section className="bg-no-repeat bg-center bg-cover py-16 px-4 md:px-8 lg:px-16" style={{ backgroundImage: `url(${img1})` }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-3 flex items-center justify-center gap-2 text-white">
          Our core values
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet consectetur. At suscipit rhoncus vestibulum sit ante dictumst pellentesque. Fames velit 
          accumsan mi nibh placerat hendrerit. Est gravida urna integer vitae et rutrum tellus egestas ornare quisque nam.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-gray-800 text-2xl mx-auto mb-3 ">
                {value.icon}
              </div>
              <p className="font-medium text-white">{value.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
