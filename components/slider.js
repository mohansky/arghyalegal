"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Keyboard,
  Navigation,
  A11y,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Icon } from "@iconify/react";
import PracticesData from "@/data/practice.json";
import WorkSlide from "./workslide";

export default function Slider() {
  return (
    <Swiper
      className="mySwiper"
      modules={[Autoplay, Keyboard, Navigation, A11y, EffectFade]}
      effect={"fade"}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      keyboard={{
        enabled: true,
      }}
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
      onSlideChange={() => console.log("slide change")}
    >
      {PracticesData.practices.map((practice) => {
        return (
          <SwiperSlide key={practice.id}>
            <WorkSlide practice={practice} />
          </SwiperSlide>
        );
      })}
      <motion.div
        className="prev text-gray-900 absolute top-2/3 md:top-1/2 -right-2 z-30"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon icon="ic:round-navigate-next" width="50" />
      </motion.div>
      <motion.div
        className="next text-gray-900 absolute top-2/3 md:top-1/2 -left-2 z-30"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon icon="ic:round-navigate-before" width="50" />
      </motion.div>
    </Swiper>
  );
}
