"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ButtonOutlineWhite from "./button-outline-white";
import ButtonOutline from "./button-outline";

export default function Hero() {
  return (
    <>
      <div className="relative h-[60vh] sm:h-[100vh] z-0">
        <div className="relative w-full h-[60vh] sm:h-[100vh] z-10 bg-black/40 "></div>
        <Image
          className="absolute object-cover blur-sm"
          src="/images/bg3.jpg"
          alt="Argya Legal"
          fill
          //   placeholder="blur"
          //   blurDataURL={imgblurDataURL}
          priority
        />

        <motion.div
          className="absolute top-[50%] left-[10%] z-20"
          initial={{ opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h3 className="text-white font-bold text-lg md:text-2xl mb-5">
            Welcome to <span className="text-al-primary">Argya Legal </span>
          </h3>
          <p className="text-white  font-bold text-3xl md:text-6xl mb-3">
          Partnering for success
          </p>
          <Link href="/contact">
            {/* <ButtonOutlineWhite>Contact Us</ButtonOutlineWhite> */}
            <ButtonOutline>Contact Us</ButtonOutline>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
