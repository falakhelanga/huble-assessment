import React from "react";
import ContentWrap from "../ui/ContentWrap";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import Paragraph from "../ui/Paragraph";
import LogoSlider from "./LogoSlider";

const MonoLithHeroBanner = () => {
  return (
    <div className="md:h-[90vh]  h-full bg-bottom  bg-[url(https://www.monolithai.com/hubfs/Group_39403_min.png)]">
      <div className="h-full w-full hero-banner-container max-sm:pt-10">
        <ContentWrap className="flex flex-col h-full justify-center ">
          <div className="grid lg:grid-cols-2">
            {" "}
            <div>
              <p className="text-peach text-xl font-bold">Monolith</p>
              <Heading className="mt-2">Use AI software to test </Heading>
              <Heading className="mt-1">less and learn more.</Heading>
              <Paragraph className="mt-4">
                Spend less time running expensive, repetitive tests and more
                time learning from your engineering data to predict the exact
                tests to run.
              </Paragraph>
              <div className="flex max-sm:block  gap-6 md:mt-16 mt-6">
                <Button variant="pink">REQUEST DEMO</Button>
                <Button variant="outline" className="max-sm:mt-5">
                  SPEAK TO OUR TEAM
                </Button>
              </div>
            </div>
            <div></div>
          </div>
          <LogoSlider />
        </ContentWrap>
      </div>
    </div>
  );
};

export default MonoLithHeroBanner;
