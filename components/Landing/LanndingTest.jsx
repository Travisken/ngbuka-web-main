"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/globals.css";

// import required modules
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Avatar, MrHeading, Text } from "../Atoms";
import { Testimonials } from "@/libs/constants";

// SwiperCore.use([Autoplay, Navigation, EffectFade]);

const swiperParams = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5,
    disableOnInteraction: false,
  },
  speed: 5, // Matches the speed with the delay
  effect: "fade",
  navigation: true,
};
const LanndingTest = () => {
  return (
    <div className="px-[5.5rem]">
      <Swiper
        {...swiperParams}
        modules={[EffectFade, Navigation, Autoplay]}
        className="flex items-center justify-center text-secondary-400"
      >
        {Testimonials.map((Testimonial) => (
          <div key={Testimonial.id}>
            <SwiperSlide>
              <div className="w-[800px] flex flex-col justify-center h-[450px] rounded-2xl border border-secondary-600 p-14 bg-white">
                <MrHeading
                  fontWeight=" font-[600] lg:font-[700]"
                  className=" leading-[36px] lg:leading-[72px] text-text-primary-100 text-center mb-9 text-2xl"
                >
                  What people are saying
                </MrHeading>

                <div className="flex flex-col items-center justify-center pb-5">
                  <Avatar
                    size="extraLarge"
                    imgSrc={Testimonial.img}
                    firstLetter="U"
                  />
                  <Text
                    variant="standard"
                    className="text-lg leading-[27px]"
                    fontWeight="font-[700]"
                    textColor="text-text-primary-50 text-center"
                  >
                    {Testimonial.username}
                  </Text>
                  <Text
                    variant="standard"
                    className="text-sm leading-[20px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50 text-center "
                  >
                    {Testimonial.title}
                  </Text>
                </div>

                <Text
                  variant="standard"
                  className="text-lg leading-[27px] px-12"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50 text-center mb-5"
                >
                  “{Testimonial.body}”
                </Text>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default LanndingTest;
