"use client"

import React, { useState } from "react";
import { Button, MrHeading, Text } from "../Atoms";
import Image from "next/image";

const features = [
  {
    title: "AS A VENDOR",
    contents: [
      {
        img: "/images/Image frame.png",
        text: "Showcase your products on Ngbuka and benefit from our immense visibility. Become a verified vendor and enjoy increased reach, seamless transactions, and patronage, and a supportive network",
        cta_1: 'Become a vendor',
        cta_2: 'How it works'
      },
    ],
  },
  {
    title: "AS A MECHANIC",
    contents: [
      {
        img: "/images/Batteries.png",
        text: "Explore the world of Ngbuka,  Expand your customer  reach, and enhance sales through convenient online ordering and personalized recommendations",
        cta_1: 'Become a vendor',
        cta_2: 'How it works'
      },
    ],
  },
];

const LandingFeatures = () => {
  const [value, setValue] = useState(0);
  const [featuresNote, setFeaturesNote] = useState(features);
  const { contents } = featuresNote[value];

  return (
    <>
      <div className="relative " id="earn">
        <div className=" max-w-[85vw] mx-auto">
          <div className=" rounded-2xl pt-[30px] mb-[50px]">
            <div className=" flex items-center lg:justify-start  justify-center gap-[40px] mt-[20px] lg:mt-[44px] mb-8 lg:mb-10">
              {featuresNote.map((feature, index) => {
                return (
                  <MrHeading
                    key={index}
                    type="h6"
                    className={` cursor-pointer text-base px-5 py-[10px]  ${
                      index === value ? "text-white" : "text-secondary-400"
                    } font-[400]  ${
                      index === value &&
                      " font-bold transition-colors duration-200 border bg-secondary-400 border-secondary-400 rounded-[20px]"
                    }`}
                    onClick={() => setValue(index)}
                    fontWeight=""
                  >
                    {feature.title}
                  </MrHeading>
                );
              })}
            </div>
            <div className=" border-2 border-secondary-400 lg:pr-5 rounded-2xl flex items-center">
              {contents.map((content, index) => {
                return (
                  <div
                    key={index}
                    className=" grid lg:flex items-center justify-between gap-[30px] w-full mx-auto"
                  >
                    <div className=" flex items-center rounded-3xl  w-full lg:w-1/2">
                      <Image
                        src={content.img}
                        width={562}
                        height={370}
                        alt=""
                        className=" rounded-se-2xl lg:rounded-se-none lg:rounded-s-2xl"
                      />
                    </div>
                    <div className="grid gap-5 w-full lg:w-1/2">
                      <MrHeading
                        fontWeight=" font-[600] lg:font-[700] "
                        className=" leading-[36px] lg:leading-[72px] text-text-primary-100 text-xl lg:text-5xl"
                      >
                        Earn with Ngbuka
                      </MrHeading>
                      <Text
                        variant="standard"
                        className=" text-sm lg:text-lg leading-[19px]"
                        fontWeight="font-[400]"
                        textColor=" text-text-primary-50"
                      >
                        {content.text}
                      </Text>
                      <div className="flex items-center gap-5">
                        <Button>{content.cta_1}</Button>
                        <Button variant='secondary'>{content.cta_2}</Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingFeatures;
