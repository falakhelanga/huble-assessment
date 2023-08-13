import React from "react";
import ContentWrap from "../ui/ContentWrap";
import MonolithStorySlider from "./Slider";

const MonolithStory = () => {
  return (
    <div className="bg-black md:pb-[7rem] pb-14">
      <ContentWrap>
        <h1 className="text-center  md:text-[2.6em] text-3xl font-thin  py-[5rem]">
          The Monolith story
        </h1>
        <MonolithStorySlider />
      </ContentWrap>
    </div>
  );
};

export default MonolithStory;
