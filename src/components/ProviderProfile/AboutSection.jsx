// AboutSection.jsx
import React from 'react';

const AboutSection = ({ about }) => {
  return (
    <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-3">About:</h2>
      <p className="text-gray-700 text-sm">{about || 'No information provided'}</p>
    </div>
  );
};

export default AboutSection;

