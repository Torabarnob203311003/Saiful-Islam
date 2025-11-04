
// File: src/components/PasswordChangeForm.jsx
import React, { useState } from 'react';
import FormField from './FormField';

const PasswordChangeForm = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const handleChange = (field, value) => {
    setPasswordData({
      ...passwordData,
      [field]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate passwords
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    
    // Handle password change
    console.log('Password change submitted');
  };

  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="">
          <FormField
            label="Current Password"
            type="password"
            value={passwordData.currentPassword}
            onChange={(value) => handleChange('currentPassword', value)}
          />
          <FormField
            label="New Password"
            type="password"
            value={passwordData.newPassword}
            onChange={(value) => handleChange('newPassword', value)}
          />
          <FormField
            label="Confirm New Password"
            type="password"
            value={passwordData.confirmPassword}
            onChange={(value) => handleChange('confirmPassword', value)}
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-amber-400 text-amber-900 font-medium rounded hover:bg-amber-500"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordChangeForm;