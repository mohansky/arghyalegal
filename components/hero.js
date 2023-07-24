"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; 
import ButtonOutline from "./button-outline";

export default function Hero() {
  return (
    <>
      <div className="h-[100vh] z-0">
        <div className="absolute top-0 w-full h-[100vh] z-10 bg-black/40 "></div>
        <Image
          className="absolute object-cover"
          src="/images/bg.jpg"
          alt="Argya Legal"
          fill
          //   placeholder="blur"
          //   blurDataURL={imgblurDataURL}
          priority
        />

        <motion.div 
          className="absolute top-[20%] left-[50%] mb-5 z-20"
          initial={{ opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h3 className="text-white text-3xl md:text-4xl mb-5 -translate-x-1/2">
            Welcome to <span className="text-al-primary">Λrgħyä Legal</span>
          </h3> 
        </motion.div>

        <motion.div
          className="absolute top-[35%] left-[5%] z-20"
          initial={{ opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <Image
            className="mb-5 "
            src="/images/logos/al-logo.svg"
            alt="Argya Legal"
            width={250}
            height={250}
            //   placeholder="blur"
            //   blurDataURL={imgblurDataURL}
            priority
          /> 
          <p className="text-white  font-bold text-3xl md:text-6xl mb-3">
            Partnering for success
          </p>
          <Link href="/contact"> 
            <ButtonOutline>Contact Us</ButtonOutline>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
