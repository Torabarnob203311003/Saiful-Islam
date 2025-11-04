// components/WorkGroupsSection.jsx
import React from 'react';

function WorkGroupsSection() {
  const groups = [
    {
      icon: "👥",
      title: "Enjoy Work",
      description: "Lorem ipsum dolor sit amet consectetur. At suscipit rhoncus vestibulum sit ante dictumst pellentesque. Fames velit accumsan mi nibh placerat hendrerit eget vel. Sed egestas nec eu pharetra tempor amet."
    },
    {
      icon: "👥",
      title: "Employee resource groups",
      description: "Lorem ipsum dolor sit amet consectetur. At suscipit rhoncus vestibulum sit ante dictumst pellentesque. Fames velit accumsan mi nibh placerat hendrerit eget vel. Sed egestas nec eu pharetra tempor amet."
    },
    {
      icon: "👥",
      title: "Enjoy Town",
      description: "Lorem ipsum dolor sit amet consectetur. At suscipit rhoncus vestibulum sit ante dictumst pellentesque. Fames velit accumsan mi nibh placerat hendrerit eget vel. Sed egestas nec eu pharetra tempor amet."
    }
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {groups.map((group, index) => (
            <div key={index} className="flex bg-red shadow-lg p-8 rounded-lg h-72">
              <div className="mr-4 pb-8" >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl text-blue-600 ">
                  {group.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{group.title}</h3>
                <p className="text-gray-600">{group.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkGroupsSection;