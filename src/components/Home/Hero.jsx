import React from 'react';


const Hero = () => {
    return (
       <div className="bg-cover w-full h"  style={{ backgroundImage: "url('/Screenshot 2025-12-10 192528.jpg')" }}>
  
    <div className="max-w-screen-2xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-7">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#0B5555]">
          Find <span className="text-[#006D5B]">Scholarships</span> <br />
          for College
        </h1>

        {/* Points */}
        <div className="mt-8 space-y-4 text-lg text-gray-700">
          <div className="flex items-center gap-2">
            <span className="text-xl">💲</span>
            <p>Scholarships for <strong>every type</strong> of student</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xl">📝</span>
            <p><strong>100% free</strong></p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xl">🎓</span>
            <p><strong>Vetted</strong> scholarship opportunities</p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-10 bg-[#E96530] hover:bg-[#d45829] text-white font-semibold text-lg px-10 py-4 rounded-xl">
          Find Scholarships Now
        </button>

      </div>
 
</div>
    );
};

export default Hero;