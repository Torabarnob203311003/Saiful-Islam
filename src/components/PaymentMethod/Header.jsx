import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Header Component
const Header = () => {
  return (
    <div className="flex items-center mb-6">
      <button className="flex items-center text-gray-800 font-medium">
        <ChevronLeft size={20} />
        <span className="ml-1">Payment procedure</span>
      </button>
    </div>
  );
};

export default Header;
