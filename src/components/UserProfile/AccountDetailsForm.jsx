// File: src/components/AccountDetailsForm.jsx
import React, { useState } from 'react';
import FormField from './FormField';
import  API  from '../../services/authService';

const AccountDetailsForm = ({ user }) => {
  const {
    full_name,
    email,
    about_yourself ,
    address ,
    contact ,
  } = user?.user_information || {};
  

  console.log(user);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name,
    email,
    about_yourself,
    address,
    contact,
  });

  const handleChange = (field) => (value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/profile-update', formData);
      setIsEditing(false);
      console.log('Account details updated:', formData);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Account Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="First Name"
            value={isEditing ? formData.full_name : full_name}
            onChange={handleChange('full_name')}
            disabled={!isEditing}
          />
         
          <FormField
            label="Email Address"
            type="email"
            value={isEditing ? formData.email : email}
            onChange={handleChange('email')}
            disabled={!isEditing}
          />
          <FormField
            label="About Yourself"
            value={isEditing ? formData.about_yourself : about_yourself}
            onChange={handleChange('about_yourself')}
            disabled={!isEditing}
          />
          <FormField
            label="Address"
            value={isEditing ? formData.address : address}
            onChange={handleChange('address')}
            disabled={!isEditing}
          />
          <FormField
            label="Contact"
            value={isEditing ? formData.contact : contact}
            onChange={handleChange('contact')}
            disabled={!isEditing}
          />
        </div>
        <div className="mt-6">
          {isEditing ? (
            <button
              type="submit"
              className="px-4 py-2 bg-amber-400 text-amber-900 font-medium rounded hover:bg-amber-500"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-gray-300 text-gray-800 font-medium rounded hover:bg-gray-400"
            >
              Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AccountDetailsForm;

