import React from "react";
import bannerImage from '../../assets/banner.png'; // Adjust the path as necessary

const Banner = () => {
  return (
    <div className="bg-cover bg-center p-6 md:p-8 lg:p-10" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className=" bg-opacity-80 max-w-6xl mx-auto text-center p-8 rounded-lg">
        <div className="text-white">
        <h1 style={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "24px", lineHeight: "100%", letterSpacing: "0%", textAlign: "center" }} className="mb-4">
          From Everyday Essentials to Specialized
        </h1>
        <h2 style={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "24px", lineHeight: "100%", letterSpacing: "0%", textAlign: "center" }} className="mb-6">
          Solutions Find It All On-
        </h2>
        </div>
        
        <div className="mb-8 ">
          <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">TAWUN</span>
        </div>
        
        <button className="bg-white text-[#6F5B36] font-semibold py-3 px-8 rounded-full text-lg transition duration-300">
          Browse all
        </button>
      </div>
    </div>
  );
};

export default Banner;
