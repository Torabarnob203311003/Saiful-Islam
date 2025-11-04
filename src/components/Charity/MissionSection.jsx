// File: src/components/Charity/MissionSection.jsx
import React from 'react';
import img1 from '../../assets/Rectangle 1338.png';
import img2 from '../../assets/Rectangle 1339.png';
import img3 from '../../assets/Rectangle 1340.png';
import img4 from '../../assets/Rectangle 1341.png';

const MissionSection = () => {
  return (
    <section className="w-full bg-amber-50 py-8">
      <div className="container mx-auto px-4 pb-8 h-450">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-6 pb-16">Our charity & Donations</h1>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side images */}
          <div className="md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
            <img
              src={img2}
              alt="Children showing peace signs"
              className="rounded-lg object-cover w-100 h-100"
            />
            <img
              src={img3}
              alt="Children playing together"
              className="rounded-lg object-cover w-100 h-100"
            />
            <img
              src={img1}
              alt="Children eating together"
              className="rounded-lg object-cover w-100 h-100"
            />
            <img
              src={img4}
              alt="Children studying together"
              className="rounded-lg object-cover w-100 h-100"
            />
          </div>

          {/* Right side content */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">We are in a mission to help the helpless</h2>
            <p className="text-gray-700">
              <i className="fas fa-quote-left mr-2" aria-hidden="true"></i>
              Lorem ipsum dolor sit amet consectetur. At aliquam tristique imperdiet neque non vel et ultrices vitae. Gravida leo m malesuada dolor gravida luc lorem. Quis quis diam sem accumsan est sed enim. Posuere egestas consequat turpis nulla. Fames ut scelerisque Viverra morbi sed pellentesque dignit turpis vivera. Id velit eleifendum dignissim in pellentesque nunc erat. Quisque urna eu id id ac aliquam dictum verus parturient ipsum. Blandit at urna tellus arcu sed blandit pulvinar felis. Sed cum tortor blandit elementum lectus aliquam diam. Nam pellentesque praesent quisque egestas fringilla qget amet.
              <i className="fas fa-quote-right ml-2" aria-hidden="true"></i>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

