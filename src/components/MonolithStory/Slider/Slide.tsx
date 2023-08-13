import React from "react";
import Icon from "../../ui/Icon";

export interface SlidePropTypes {
  text: string;
  icon?: string;
  image?: string;
  year: string;
  isActive?: boolean;
}

const Slide = ({ text, icon, image, year, isActive }: SlidePropTypes) => {
  return (
    <div
      className={`md:cursor-pointer  md:mr-[10rem] md:h-[17rem]  ${
        isActive ? "text-[#877A4D] " : "text-white"
      }  `}
    >
      <div className="w-[6rem] h-[3.5rem] mb-4">
        {icon && <Icon name={icon} color={isActive ? "#877A4D" : "white"} />}
        {image && <img src={image} className="w-full h-full" />}
      </div>
      <div>
        <span className="">{year}</span>
        <p className=" md:text-2xl text-xl text-left mt-4 text-wrap">{text}</p>
      </div>
    </div>
  );
};

export default Slide;
