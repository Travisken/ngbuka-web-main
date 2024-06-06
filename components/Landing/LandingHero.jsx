"use client";

import React from "react";
import { Button, MrHeading, Text } from "../Atoms";
import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { Autoplay} from 'swiper/modules';

const categoriesList = [
  {
    item: "Suspension & Steering",
  },
  {
    item: "Oils & Lubricants",
  },
  {
    item: "Wheels & Tires",
  },
  {
    item: "Electrical",
  },
  {
    item: "Fueling",
  },
  {
    item: "Braking",
  },
  {
    item: "Engine",
  },
  {
    item: "Lighting",
  },
  {
    item: "Chassis (external body)",
  },
];

const Sliderimg = [
  {
    img: "/images/Batteries.png",
  },
  {
    img: "/images/Car batteries.png",
  },
  {
    img: "/images/Batteries.png",
  },
];

const LandingHero = () => {
  return (
    <div className="relative mt-16">
      <div className="max-w-[85rem] mx-auto lg:mx-[75px] gap-4 lg:gap-5 flex flex-col-reverse lg:grid lg:grid-cols-4 items-start justify-start lg:items-center rounded-2xl">
        <div className="bg-[#F9F9FB] rounded-2xl px-4 py-8 w-full h-full max-w-[85vw] mx-auto lg:px-8">
          <div className="mb-4">
            {categoriesList.map((items, index) => {
              return (
                <div key={index}>
                  <Text
                    variant="standard"
                    className=" text-lg leading-[27px] pb-[19px] text-left"
                    fontWeight="font-[400]"
                    textColor="text-black"
                  >
                    <Link href={"/"} className="hover:underline">
                      {items.item}
                    </Link>
                  </Text>
                </div>
              );
            })}
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-lg text-primary-400"
          >
            View Catalog
            <GoArrowRight />
          </Link>
        </div>
        <div className="w-full col-span-2 lg:h-full">
          <div className="relative rounded-2xl w-full lg:h-full max-w-[85vw] mx-auto lg:max-w-[100%]">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="w-full h-full"
            >
              {Sliderimg.map((slider, idx) => (
                
              <SwiperSlide key={idx}>
                {" "}
                <Image
                  src={slider.img}
                  width={700}
                  height={240}
                  alt="batteries"
                  className="w-full rounded-2xl relative lg:h-full object-cover"
                />
              </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute px-2 left-2 top-[50%] z-10 -translate-y-2/4 ">
              <div className="grid lg:gap-5 mb-4 lg:mb-10">
                <MrHeading
                  fontWeight=" font-[600] lg:font-[700]"
                  className=" leading-[36px] lg:leading-[72px] text-secondary-500  text-xl max-[400px]:text-2xl lg:text-5xl"
                >
                  The best prices
                </MrHeading>
                <Text
                  variant="standard"
                  className="text-lg leading-[27px] lg:w-[85%]"
                  fontWeight="font-[400]"
                  textColor="text-white "
                >
                  Get your spare parts and services at the best prices
                </Text>
              </div>
              <Button className="flex items-center font-[500] lg:font-[600] text-white gap-2 text-sm lg:text-lg px-5 py-3 lg:px-12 lg:py-4">
                Shop now
                <GoArrowRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full lg:h-full">
          <div className="flex flex-col gap-4 md:grid w-full lg:h-full box-border">
            <div className="relative rounded-2xl w-full md:h-full max-w-[300px] h-full  mx-auto">
              <Image
                src="/images/image-1.png"
                width={500}
                height={240}
                alt="batteries"
                className="w-full rounded-2xl relative lg:h-full"
              />

              <div className="absolute px-2 left-2 top-[50%] -translate-y-2/4 ">
                <div className="mb-4">
                  <MrHeading
                    fontWeight=" font-[600] lg:font-[700]"
                    className=" leading-[36px] min-[400px]:leading-[48px] lg:leading-[48px] text-white text-xl min-[400px]:text-2xl lg:text-3xl"
                  >
                    Start earning on Ngbuka.
                  </MrHeading>
                  <Text
                    variant="standard"
                    className="text-base leading-[22.4px] lg:pr-9"
                    fontWeight="font-[400]"
                    textColor="text-white "
                  >
                    Sell your products on our platform to boost your business
                  </Text>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl w-full max-w-[300px] h-full  mx-auto">
              <Image
                src="/images/Image.png"
                width={400}
                height={24}
                alt="batteries"
                className="w-full rounded-2xl relative lg:h-full object-cover"
              />

              <div className="absolute px-2 left-2 top-[50%] -translate-y-2/4 ">
                <div className="mb-4">
                  <MrHeading
                    fontWeight=" font-[600]"
                    className=" leading-[36px] min-[400px]:leading-[48px] lg:leading-[48px] text-white  text-xl min-[400px]:text-2xl lg:text-3xl"
                  >
                    Increase your base
                  </MrHeading>
                  <Text
                    variant="standard"
                    className="text-base leading-[22.4px]"
                    fontWeight="font-[400]"
                    textColor="text-white "
                  >
                    Get more clients and increase your earnings as a skilled
                    mechanic
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
