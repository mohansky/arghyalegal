"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroPage({ image, title }) {
  return (
    <>
      <div className="relative h-[60vh] z-0">
        <div className="relative w-full h-[60vh] z-10 bg-black/40 "></div>
        <Image
          className="absolute object-cover blur-sm"
          src={image}
          alt={title}
          fill
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,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"
          priority
        />

        <motion.div
          className="absolute top-[40%] left-[10%] z-20"
          initial={{ opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h1 className="text-white font-bold text-4xl md:text-6xl mb-5">
            {title}
          </h1>
        </motion.div>
      </div>
    </>
  );
}
