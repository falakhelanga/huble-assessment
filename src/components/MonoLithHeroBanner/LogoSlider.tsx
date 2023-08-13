import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import * as ReactDOMServer from "react-dom/server";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const slides = ["kautex.png", "honda.png", "michelin.png", "mercedis.png"];

const LogoSlider = () => {
  const pagination = {
    el: ".my-custom-pagination-div",
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return ReactDOMServer.renderToStaticMarkup(
        <div className={`${className} bg-pink  flex gap-4 rounded-full`}></div>
      );
    },
  };
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <div className="relative">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 3,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1685: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        speed={5000}
        loop={true}
        navigation={{ prevEl, nextEl }}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        className=" w-full  items-baseline mt-24 logo_slider "
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className={` flex justify-center  `}>
              <img className=" " alt="logo" src={`/images/${item}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="my-custom-pagination-div md:hidden flex gap-2 justify-center  w-full h-10 mt-20   max-sm:mt-[2rem] " />
      <div
        className=" md:hidden rounded-full h-4 w-4 items-center justify-center border border-peach flex absolute top-[40%] md:left-[0rem] md:ml-[0rem] left-0 z-[3] md:cursor-pointer  "
        ref={(node) => setPrevEl(node)}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-peach text-xs" />
      </div>

      <div
        ref={(node) => setNextEl(node)}
        className=" md:hidden rounded-full h-4 w-4 items-center justify-center border border-peach  flex absolute top-[40%] md:right-[0rem] md:mr-[0rem] right-0 z-[3] md:cursor-pointer  "
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-peach text-xs" />
      </div>
    </div>
  );
};

export default LogoSlider;
