import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const JobApply = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    coverLetter: '',
    cv: null
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='py-6 px-32'>
      <Link to="/careers" className="flex items-center mb-4">
        <ArrowLeft className="mr-2" />
        Back
      </Link>
      <div className=' max-w-4xl mx-auto'>

    
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-300"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-300"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="number">
            Phone Number
          </label>
          <input
            type="text"
            id="number"
            value={formData.number}
            onChange={(e) => handleChange('number', e.target.value)}
            placeholder="Enter your phone number"
            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-300"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="coverLetter">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            value={formData.coverLetter}
            onChange={(e) => handleChange('coverLetter', e.target.value)}
            placeholder="Enter your cover letter"
            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-300"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="cv">
            Upload CV
          </label>
          <input
            type="file"
            id="cv"
            onChange={(e) => handleChange('cv', e.target.files[0])}
            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-300"
          />
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-amber-100 text-gray-800 px-12 py-2 rounded-md hover:bg-amber-200 transition-colors"
          >
            Apply
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default JobApply;

