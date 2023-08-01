"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Container({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div
        className={`w-[95%] sm:w-[85%] mx-auto ${className}`}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </div>
  );
}
