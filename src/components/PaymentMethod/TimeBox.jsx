import React, { useState } from 'react'

export default function TimeBox() {
  const [showTimeSelector, setShowTimeSelector] = useState(false)

  return (
    <div>
       <div className="w-[30%] p-3 border rounded-md bg-amber-100 border-amber-200 flex items-center text-gray-500 ml-4 cursor-pointer" onClick={() => setShowTimeSelector(!showTimeSelector)}>
          <span className="mr-2">⏰</span>
          <span>Select Time</span>
        </div>
        {showTimeSelector && (
          <div className="w-[30%] p-3 border rounded-md bg-white shadow-md flex flex-col space-y-2 mt-2">
            <div className="flex items-center">
              <span className="mr-2">⏰</span>
              <span>Select Start Time</span>
              <select className="ml-auto border rounded-md outline-none bg-transparent">
                <option value="">-- Select Start Time --</option>
                <option value="8:00">8:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="18:00">6:00 PM</option>
              </select>
            </div>
            <div className="flex items-center">
              <span className="mr-2">⏰</span>
              <span>Select End Time</span>
              <select className="ml-auto border rounded-md outline-none bg-transparent">
                <option value="">-- Select End Time --</option>
                <option value="8:30">8:30 AM</option>
                <option value="12:30">12:30 PM</option>
                <option value="14:30">2:30 PM</option>
                <option value="16:30">4:30 PM</option>
                <option value="18:30">6:30 PM</option>
              </select>
            </div>
          </div>
        )}
    </div>
  )
}

