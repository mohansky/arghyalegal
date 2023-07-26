import React from "react";

export default function ButtonOutline({ onClick, className, children }) {
  return (
    <button
      type="button"
      className={`inline-flex justify-center rounded-sm border border-al-primary my-2 px-6 py-4  
      hover:bg-al-primary/50 text-xl font-bold  text-white bg-al-primary hover:text-gray-700
      transition duration-300 ease-in-out
      focus:outline-none ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
