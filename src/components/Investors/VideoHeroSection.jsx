// components/VideoHeroSection.jsx
import React from "react";
import video from "../../assets/frame 36.png";

function VideoHeroSection() {
  return (
    <section className="bg-white">
      {/* Video thumbnail background */}
      <div className="flex justify-center items-center">
        <img src={video} alt="Image" className="max-w-full h-auto" />
      </div>

      {/* Caption bar */}
      <div className="bottom-0 left-0 right-0 bg-[#E0D1AF] py-6 px-6 z-30 mt-4 mb-4">
        <div className="flex items-center justify-center">
          <p className="text-white text-800 font-poppins" style={{ fontSize: '36px' }}>
            Long term sustained, Double-digit growth ↗  
          </p>
        </div>
      </div>
    </section>
  );
}

export default VideoHeroSection;
