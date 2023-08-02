import React from "react";
import { motion } from "framer-motion";

export default function Button({ onClick, className, children }) {
  return (
    <motion.button
      type="button"
      className={`inline-flex justify-center rounded-sm border border-transparent my-2 px-6 py-4  
      bg-al-secondary text-md font-medium text-al-primary/80 hover:text-al-primary hover:bg-al-secondary/60 
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
