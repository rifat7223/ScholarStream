import React from 'react';

import { motion } from 'framer-motion';
const Hero = () => {
   const pointVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };
    return (
       <div className="bg-cover w-full h"  style={{ backgroundImage: "url('/Screenshot 2025-12-10 192528.jpg')" }}>
  <div className="max-w-screen-2xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-20">
        {/* Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-[#0B5555]"
        >
          Find <span className="text-[#006D5B]">Scholarships</span> <br />
          for College
        </motion.h1>

        {/* Points Animation */}
        <div className="mt-8 space-y-4 text-lg text-gray-700">
          {[
            { icon: '💲', text: 'Scholarships for every type of student' },
            { icon: '📝', text: '100% free' },
            { icon: '🎓', text: 'Vetted scholarship opportunities' },
          ].map((point, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={pointVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2"
            >
              <span className="text-xl">{point.icon}</span>
              <p>{point.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Button Animation */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="mt-10 bg-[#E96530] hover:bg-[#d45829] text-white font-semibold text-lg px-10 py-4 rounded-xl"
        >
          Find Scholarships Now
        </motion.button>
      </div>
    
 
</div>
    );
};

export default Hero;