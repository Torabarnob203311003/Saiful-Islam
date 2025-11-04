import React from 'react';

import hero from '../../assets/hero.png'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const BecomeMemberSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between mt-32 py-6 px-32">
      
      {/* Left Content */}
      <div className="flex-1 flex flex-col items-start justify-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Empowering <span className="text-yellow-600">Service Providers</span> & Members for a Thriving Future
        </h2>
        <p className="text-gray-600 max-w-md">
          Join Tawun today and unlock new opportunities for growth, collaboration, and success in your community.
        </p>

        {/* Buttons */}
        <div className="flex flex-col space-y-4 w-full max-w-sm">
          <Link to="/provider/register" className="bg-[#E8D8B9] text-black font-semibold py-3 rounded-lg text-center">
            Become a service provider
          </Link>
          <Link to="/register" className="border border-[#E8D8B9] text-black font-semibold py-3 rounded-lg text-center">
            Become a tawun member
          </Link>
        </div>

<div>
  <p className="">2K+ professional registered </p>
   {/* Profile Avatars */}
   <div className="flex items-center mt-6">
          {[1,2,3,4,5].map((_, idx) => (
            <img 
              key={idx}
              src={`https://randomuser.me/api/portraits/men/${idx + 30}.jpg`} 
              alt="User" 
              className={`w-10 h-10 rounded-full border-2 border-white ${idx !== 0 && '-ml-4'}`} 
            />
          ))}
        </div>
</div>

       
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center mb-12 md:mb-0">
        <img 
          src={hero}
          alt="Service Illustration" 
          className="w-full max-w-lg"
        />
      </div>

    </section>
  );
};

export default BecomeMemberSection;
