"use client" 
import Image from "next/image"; 
import { motion } from "framer-motion"

export default function HeroPage({image, title}) {
  return (
    <>
      <div className="relative h-[60vh] z-0">
        <div className="relative w-full h-[60vh] z-10 bg-black/40 "></div>
        <Image
          className="absolute object-cover blur-sm"
          src={image}
          alt={title}
          fill
          //   placeholder="blur"
          //   blurDataURL={imgblurDataURL}
          //   priority={item.priority}
        />

        <motion.div className="absolute top-[40%] left-[10%] z-20"
             initial={{ opacity: 0, y: 250 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 2 }}
        >
          <h3 className="text-white font-bold text-4xl md:text-6xl mb-5">
            {title}
          </h3>
        </motion.div>
      </div>
    </>
  );
}
