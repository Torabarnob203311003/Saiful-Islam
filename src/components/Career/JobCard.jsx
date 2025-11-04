
// components/JobCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
function JobCard({ title, location, remote,id }) {
  return (
    <div className="bg-white rounded-md border border-gray-200 p-4 flex justify-between items-center">
      <div>
      <Link to={`/job/${id}`}>
                 
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-500">{location}</p>
      <p className="text-sm text-gray-500">{remote}</p>

                
              </Link>
       
      </div>
      <Link to={`/apply/job/${id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md">Apply</Link>
    </div>
  );
}

export default JobCard;



