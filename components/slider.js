"use client"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, A11y, EffectFade  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';
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
      <div className="prev text-al-primary absolute top-1/2 right-0 z-30">
        <Icon icon="ic:round-navigate-next" width="50" />
      </div>
      <div className="next text-al-primary absolute top-1/2 left-0 z-30">
        <Icon icon="ic:round-navigate-before" width="50" />
      </div>
    </Swiper>
  );
}
