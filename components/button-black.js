import React from "react";
import { motion } from "framer-motion";

export default function ButtonBlack({ onClick, className, children }) {
  return (
    <motion.button
      type="button"
      className={`inline-flex justify-center rounded-sm border border-gray-900 my-2 px-6 py-4  
      hover:bg-gray-700 text-xl font-bold text-white bg-gray-900 hover:text-gray-100
      transition duration-300 ease-in-out
      focus:outline-none ${className}`}
      onClick={onClick} 
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
      </motion.button>
  );
}
