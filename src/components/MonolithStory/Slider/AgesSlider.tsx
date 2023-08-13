import React from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import * as ReactDOMServer from "react-dom/server";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { SlidePropTypes } from "./Slide";

interface AgeSliderPropTypes {
  slides: SlidePropTypes[];
}
const AgesSlider = ({ slides }: AgeSliderPropTypes) => {
  return (
    <Swiper
      breakpoints={{
        0: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 6,
        },
        1685: {
          slidesPerView: 6,
        },
      }}
      speed={1000}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Navigation, Autoplay]}
      className="  flex-1  "
    >
      {slides.map((item, idx) => (
        <SwiperSlide key={idx}>
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "text-gold" : "text-white"
              } md:text-2xl font-bold `}
            >
              {item.year}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AgesSlider;
