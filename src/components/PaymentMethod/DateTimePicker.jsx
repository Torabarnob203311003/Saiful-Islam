import React, { useState } from 'react'

export default function DateTimePicker() {
    const [showTimeSelector, setShowTimeSelector] = useState(false);
    return (
      <div className="mb-6 flex space-x-2">
        <div className="w-[30%] p-3 border rounded-md flex items-center text-gray-500 ml-4">
          <span className="mr-2">📅</span>
          <span>Select Date</span>
        </div>
        <div className="w-[30%] p-3 border rounded-md bg-amber-100 border-amber-200 flex items-center text-gray-500 ml-4 cursor-pointer" onClick={() => setShowTimeSelector(!showTimeSelector)}>
          <span className="mr-2">⏰</span>
          <span>Select Time</span>
        </div>
      </div>
    );
};

