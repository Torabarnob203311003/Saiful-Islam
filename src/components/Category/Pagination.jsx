
// components/Pagination.jsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Pagination() {
  return (
    <div className="flex justify-between items-center  py-6 px-32">
      <div className="text-sm text-gray-600">Page 1 of 12</div>
      <div className="flex space-x-2">
        <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center justify-center text-gray-700">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center justify-center text-gray-700">
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;