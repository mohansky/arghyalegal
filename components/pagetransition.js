"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function PageTransition({ children }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {},
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
