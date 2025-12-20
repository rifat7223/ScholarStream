import React from 'react';
import { motion } from "framer-motion";
const AllScholarHeader = () => {
    return (
          <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="inline-block text-blue-600 font-medium mb-2"
      >
        Opportunities Worldwide
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.10 }}
        className="text-4xl font-bold text-gray-800"
      >
        Explore All Scholarships
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-gray-600 mt-3 max-w-2xl mx-auto"
      >
        Discover scholarship opportunities from top universities around the world.
      </motion.p>
    </motion.div>
    );
};

export default AllScholarHeader;