import React from "react";

export default function ButtonOutlineWhite({ onClick, className, children }) {
  return (
    <button
      type="button"
      className={`inline-flex justify-center rounded-sm border border-white my-2 px-6 py-4  
      bg-transparent text-md font-medium text-white hover:text-black hover:bg-white 
      transition duration-300 ease-in-out
      focus:outline-none ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
