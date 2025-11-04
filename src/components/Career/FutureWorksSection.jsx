// components/FutureWorksSection.jsx
import React from 'react';

function FutureWorksSection() {
  const features = [
    {
      title: "Connected",
      icon: "🔄",
      description: "Lorem ipsum dolor sit amet consectetur. At suscipit rhoncus vestibulum sit ante dictumst pellentesque. Fames velit accumsan mi nibh placerat."
    },
    {
      title: "Inclusive",
      icon: "👥",
      description: "Lorem ipsum dolor sit amet consectetur. At suscipit rhoncus vestibulum sit ante dictumst pellentesque. Fames velit accumsan mi nibh placerat."
    },
    {
      title: "Flexible",
      icon: "🌊",
      description: "Lorem ipsum dolor sit amet consectetur. At suscipit rhoncus vestibulum sit ante dictumst pellentesque. Fames velit accumsan mi nibh placerat."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          TKWON is where the future works
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Lorem ipsum dolor sit amet consectetur. At suscipit rhoncus vestibulum sit ante dictumst pellentesque. Fames velit 
          accumsan mi nibh placerat hendrerit. Est gravida urna integer vitae et rutrum tellus egestas ornare quisque nam.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4 flex justify-center">
                <span className="bg-blue-50 text-blue-500 w-16 h-16 rounded-full flex items-center justify-center">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FutureWorksSection;