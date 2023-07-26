import React from "react";

export default function ButtonOutlineBlack({ onClick, className, children }) {
  return (
    <button
      type="button"
      className={`inline-flex justify-center rounded-sm border border-black my-2 px-6 py-4  
      bg-transparent text-md font-medium text-black hover:text-white hover:bg-black 
      transition duration-300 ease-in-out
      focus:outline-none ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
