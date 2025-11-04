// ExperienceSection.jsx
import React from 'react';

const ExperienceSection = ({ experiences }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <h2 className="text-lg font-medium mb-4">Experience & Qualifications</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="p-4 bg-gray-50 rounded-lg mb-4 last:mb-0">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{experience.title}</h3>
              <p className="text-gray-600 text-sm">{experience.company}</p>
            </div>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded">{experience.type}</span>
          </div>
          <div className="text-gray-500 text-xs mt-2">{experience.period}</div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;

