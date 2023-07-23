import React from "react";

export default function ButtonOutline({ onClick, className, children }) {
  return (
    <button
      type="button"
      className={`inline-flex justify-center rounded-sm border border-al-primary my-2 px-6 py-4  
      bg-transparent text-md font-medium text-al-primary hover:text-white hover:bg-al-primary 
      transition duration-300 ease-in-out
      focus:outline-none ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
