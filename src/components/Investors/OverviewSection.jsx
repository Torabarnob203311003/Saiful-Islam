// components/OverviewSection.jsx
import React from 'react';
import { DollarSign, Users, Clock, Globe } from 'lucide-react';

const OverviewSection = () => (
  <section className="bg-amber-100 pt-12 pb-16 ">
    <div className="container mx-auto  md:px-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Tawun Overview</h2>   
      <p className="text-black  text-800 text-center max-w-4xl mx-auto mb-12">
        Lorem ipsum dolor sit amet consectetur. Turpis elit aliquet eu lacus sem. Leo sunt etiam duis massa id consequat. 
        Nam nunc magna risus vel sollicitudin elit. Ultricies magna natus euismod nunc in dapibus et sapien eget. Nunc 
        tempor in leo lectus platea tellus aenean diam. Cras eu magna ornare sagittis platea egestas amet ultrices tincidunt. 
        Dignissim nibh semper enim. Posuere turpis in sed elementum feugiat purus dui.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center space-x-4">
          <div className="flex-shrink-0">
            <DollarSign className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Revenue</p>
            <p className="text-xl font-bold">$5.6B</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Associates</p>
            <p className="text-xl font-bold">20,000+</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Clock className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Providing insights</p>
            <p className="text-xl font-bold">4 years +</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Globe className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Countries Served</p>
            <p className="text-xl font-bold">90</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="inline-flex items-center text-Black-800 font-medium  bg-amber-200 hover:bg-amber-300 py-2 px-4 rounded">
          Learn more <span className="ml-1">→</span>
        </button>
      </div>
    </div>
  </section>
);

export default OverviewSection;

