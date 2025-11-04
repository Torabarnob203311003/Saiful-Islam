// ProfileHeader.jsx
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const ProfileHeader = ({ profile }) => {
  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-24 h-24",
    large: "w-32 h-32"
  };

  const RatingStars = ({ rating, maxRating = 5 }) => {
    return (
      <div className="flex items-center justify-center">
        {[...Array(maxRating)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const ContactItem = ({ icon, text }) => {
    return (
      <div className="flex items-center justify-center mt-1 text-gray-600">
        {icon}
        <span className="text-sm ml-1">{text}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start p-6 bg-white rounded-lg shadow-sm justify-center">
      <div className="flex flex-col items-center mr-6">
        <img 
          src={profile.avatar} 
          alt={profile.name} 
          className={`${sizeClasses.medium} rounded-full object-cover`}
        />
        <h1 className="text-xl font-bold mt-2 text-center">{profile.name}</h1>
        <div className="flex items-center justify-center mt-1">
          <span className="text-gray-600 mr-1">{profile.rating}</span>
          <RatingStars rating={profile.rating} />
        </div>
        <ContactItem 
          icon={<Mail size={16} className="mr-1" />} 
          text={profile.email} 
        />
        <ContactItem 
          icon={<MapPin size={16} className="mr-1" />} 
          text={profile.location} 
        />
      </div>
    </div>
  );
};

export default ProfileHeader;

