"use client";

import React from "react";
import { MrHeading, Text } from "../Atoms";
import Image from "next/image";
import LanndingTest from "./LanndingTest";

const brandList = [
  {
    img: "/icons/bosch_logo.svg.svg",
  },
  {
    img: "/images/bridgestone-seeklogo 2.png",
  },
  {
    img: "/images/hitachi_logo.svg.png",
  },
  {
    img: "/images/michelin_logo.svg.png",
  },
  {
    img: "/images/ngv-motori-seeklogo 1.svg",
  },
  // {
  //   img: "",
  // },
  // {
  //   img: "",
  // },
  // {
  //   img: "",
  // },
  // {
  //   img: ",
  // },
];
// SwiperCore.use([Navigation, EffectFade, Autoplay]);

const LandingTestimonials = () => {
  return (
    <section className=" relative my-16 ">
      <div className="flex flex-col gap-16">
        <div className="grid gap-2 mb-6">
          <MrHeading
            fontWeight=" font-[600] lg:font-[700]"
            className=" leading-[36px] lg:leading-[72px] text-text-primary-100 text-center  text-xl max-[400px]:text-2xl lg:text-5xl"
          >
            Quality guaranteed
          </MrHeading>
          <Text
            variant="standard"
            className="text-lg leading-[27px]"
            fontWeight="font-[400]"
            textColor="text-text-primary-50  text-center"
          >
            shop your parts from the top auto-parts manufacturers
          </Text>
        </div>
        <div className="overflow-hidden w-full">
          <div className=" flex gap-8 items-center w-full px-3 justify-center">
            {brandList.map((brand, index) => (
              <Image
                src={brand.img}
                width={462}
                height={370}
                alt=""
                className=" relative lg:h-full w-[17%]"
                key={index}
              />
            ))}
          </div>
        </div>
        <LanndingTest />
      </div>
    </section>
  );
};

export default LandingTestimonials;
