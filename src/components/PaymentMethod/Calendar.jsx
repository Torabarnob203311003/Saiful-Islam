import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState("June 2024");

  const handlePrevMonth = () => {
    setCurrentMonth("May 2024");
  };

  const handleNextMonth = () => {
    setCurrentMonth("July 2024");
  };

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      const isSelected = i === 26;
      const isToday = i === 10;

      days.push(
        <div
          key={i}
          className={`flex items-center justify-center h-8 w-8 rounded-full cursor-pointer ${
            isSelected ? 'bg-blue-500 text-white' :
            isToday ? 'text-blue-500 font-medium' : 'text-gray-700'
          }`}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="mb-6 ml-4" style={{ width: '30%' }}>
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm text-gray-700">{currentMonth}</div>
        <div className="flex">
          <button onClick={handlePrevMonth} className="p-1 text-gray-400">
            <ChevronLeft size={16} />
          </button>
          <button onClick={handleNextMonth} className="p-1 text-gray-400">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} className="text-gray-500 mb-2">{day}</div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
}

