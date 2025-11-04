
// File: src/components/ProfileContent.jsx
import React from 'react';

const ProfileContent = ({ contentType }) => {
  // Handle different content types
  if (contentType === 'medals') {
    return (
      <div>
        <h2 className="text-xl font-medium mb-4">Your Medals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Example medals */}
          <MedalCard
            name="Gold Member"
            description="Achieved by being a member for over 2 years"
            icon="🥇"
          />
          <MedalCard
            name="Top Reviewer"
            description="Left over 50 product reviews"
            icon="⭐"
          />
          <MedalCard
            name="Frequent Buyer"
            description="Made more than 20 purchases"
            icon="🛒"
          />
          <MedalCard
            name="Ambassador"
            description="Referred 5 friends to our platform"
            icon="🏆"
          />
        </div>
      </div>
    );
  }
  
  return <div>Content not available</div>;
};

// Helper component for medals display
const MedalCard = ({ name, description, icon }) => (
  <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-center">
    <div className="text-4xl mb-2">{icon}</div>
    <h3 className="font-medium text-amber-900">{name}</h3>
    <p className="text-sm text-amber-700 mt-1">{description}</p>
  </div>
);

export default ProfileContent;