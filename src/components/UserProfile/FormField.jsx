
// File: src/components/FormField.jsx
import React from 'react';

const FormField = ({ label, value, onChange, type = 'text' }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
      />
    </div>
  );
};

export default FormField;