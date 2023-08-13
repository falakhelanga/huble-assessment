import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import * as ReactDOMServer from "react-dom/server";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { useState } from "react";
import Slide, { SlidePropTypes } from "./Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import AgesSlider from "./AgesSlider";

const slides: SlidePropTypes[] = [
  {
    icon: "cash",
    year: "2018",
    text: "Pre-seed round in August 2018",
  },
  {
    icon: "cash",
    year: "2019",
    text: "Seed round of £1.9M in April 2019",
  },
  {
    icon: "group",
    year: "2020",
    text: "Reached 20 employees in January 2020",
  },
  {
    image: "/images/Gartner-Cool-Vendor-white.webp",
    year: "2020",
    text: `Named a "Garner Cool Vender" in May 2020`,
  },
  {
    icon: "cash",
    year: "2021",
    text: "Series funding of £8.5M in July 2021",
  },
  {
    icon: "office",
    year: "2022",
    text: "London office opened in March 2022",
  },
  {
    icon: "rocket",
    year: "2016",
    text: "Started with Richard Ahlfeld in September 2016",
  },
  {
    image:
      "https://www.monolithai.com/hs-fs/hubfs/Asset%201.png?width=1002&height=820&name=Asset%201.png",
    year: "2018",
    text: "First paying project with clients in March 2018 (L'Oreal, McLaren, Airbus)",
  },
];

const MonolithStorySlider = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <div className="">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
          1685: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={3}
        navigation={{ prevEl, nextEl }}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        className="  "
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div>
                <Slide {...item} isActive={isActive} />
              </div>
            )}
          </SwiperSlide>
        ))}
        <div className="flex mt-10 ">
          <div className="md:flex hidden flex-1 items-center">
            <div className="bg-gold h-[10px]  w-[10px] rounded-full "></div>
            <div className="bg-gold h-[2px] w-full timeline relative"></div>
          </div>
          <div className="md:flex hidden flex-1 items-center">
            <div className="bg-gold h-[10px]  w-[10px] rounded-full "></div>
            <div className="bg-gold h-[2px] w-full timeline relative"></div>
          </div>
          <div className="flex flex-1 items-center">
            <div className="bg-gold h-[10px]  w-[10px] rounded-full "></div>
            <div className="bg-gold h-[2px] w-full timeline relative"></div>
            <FontAwesomeIcon
              icon={faCaretRight}
              size="lg"
              className="text-gold -ml-1 "
            />
          </div>
        </div>
      </Swiper>
      <div className="flex items-baseline mt-14">
        <AgesSlider slides={slides} />
        <div className="flex gap-2">
          <div
            ref={(node) => setPrevEl(node)}
            className="flex md:cursor-pointer justify-center items-center h-9 w-9 rounded-full bg-gold text-white"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            ref={(node) => setNextEl(node)}
            className=" md:cursor-pointer flex justify-center items-center h-9 w-9 rounded-full bg-gold text-white"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonolithStorySlider;
