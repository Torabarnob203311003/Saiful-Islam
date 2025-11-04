// File: src/components/TabsNavigation.jsx
import React, { useState } from 'react';

const TabsNavigation = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('account');
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };
  
  return (
    <div className="flex items-center justify-center mb-6">
      <button
        className={`py-3 px-6 text-center ${
          activeTab === 'account'
            ? 'bg-amber-300 font-medium'
            : 'bg-white hover:bg-amber-100'
        }`}
        onClick={() => handleTabClick('account')}
      >
        Account details
      </button>
      <button
        className={`py-3 px-6 text-center ${
          activeTab === 'password'
            ? 'bg-amber-100 font-medium'
            : 'bg-white hover:bg-amber-100'
        }`}
        onClick={() => handleTabClick('password')}
      >
        Change password
      </button>
      <button
        className={`py-3 px-6 text-center ${
          activeTab === 'orders'
            ? 'bg-amber-100 font-medium'
            : 'bg-white hover:bg-amber-100'
        }`}
        onClick={() => handleTabClick('orders')}
      >
        Order history
      </button>
      {/* <button
        className={`py-3 px-6 text-center ${
          activeTab === 'medals'
            ? 'bg-amber-100 font-medium'
            : 'bg-white hover:bg-amber-100'
        }`}
        onClick={() => handleTabClick('medals')}
      >
        Medals
      </button> */}
    </div>
  );
};

export default TabsNavigation;

