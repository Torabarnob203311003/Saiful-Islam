// WorkingHoursSection.jsx
import React from 'react';

const WorkingHoursSection = ({ schedule }) => {
  const days = schedule.days || [];
  const timeSlots = schedule.timeSlots|| [];

  const formatTime = (time) => {
    const date = new Date(time);
    return isNaN(date.getTime()) ? "Invalid Time" : date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-3">Working hours:</h2>
      <div className="mb-4">
        <p className="text-gray-700 mb-2">Weekly - {schedule.weeklyDays} days</p>
        <div className="flex gap-2">
          {days.map((days, index) => (
            <div key={index} className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-xs">
              {days}
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <p className="text-gray-700 mb-2">Daily - {schedule.dailyHours} hours</p>
        <div className="flex gap-2">
          {timeSlots.map((slot, index) => (
            <div key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm border border-gray-300">
              {`${formatTime(slot.start)} - ${formatTime(slot.end)}`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingHoursSection;


