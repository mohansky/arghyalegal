import React from "react";
import { motion } from "framer-motion";

export default function ButtonOutlineWhite({ onClick, className, children }) {
  return (
    <motion.button
      type="button"
      className={`inline-flex justify-center rounded-sm border border-white my-2 px-6 py-4  
      bg-transparent text-md font-medium text-white hover:text-black hover:bg-white 
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
