"use client";

import React from "react";
import { MrHeading } from "../Atoms";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';

// Import Swiper styles
import "swiper/css";

import { Navigation } from 'swiper/modules';
import SlideNavBttons from "./SwiperNavBtns";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "/images/mke_picture_ba_s5_a_13_cd2016_73807_3200x1800_res_1280x720-removebg-preview.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "/images/milan-csizmadia-d665gpJZ-cY-unsplash-removebg-preview-removebg-preview.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "/images/toyota-my-toyota-spark-plug-joe01951-removebg-preview (1).png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 4,
    name: "Machined Pencil",
    href: "#",
    price: "$35",
    imageSrc: "/images/image 3.png",
    imageAlt:
      "Hand holding black machined steel pencil with brass tip and top.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 5,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "/images/mke_picture_ba_s5_a_13_cd2016_73807_3200x1800_res_1280x720-removebg-preview.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 6,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "/images/mke_picture_ba_s5_a_13_cd2016_73807_3200x1800_res_1280x720-removebg-preview.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 7,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "/images/mke_picture_ba_s5_a_13_cd2016_73807_3200x1800_res_1280x720-removebg-preview.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    reviews: "4.5 (17 reviews)",
  },
];

const Items = ({ text, url }) => {
  return (
    <div className="w-[95vw] max-w-[85vw] mx-auto relative">
      <div className="flex items-center justify-between relative">
        <MrHeading
          fontWeight=" font-[600] lg:font-[700]"
          className=" text-text-primary-100  text-xl max-[400px]:text-2xl lg:text-3xl"
        >
          {text}
        </MrHeading>   
      </div>
      <div className="bg-[#FFEDD9] rounded p-5 mt-5 relative">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="relative">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              speed={600}
              keyboard= {{
                enabled: true,
                onlyInViewport: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <div className="bg-[#4e3213] rounded p-5 mt-5 relative">
              <div className="absolute bottom-[22rem] right-1 z-50">
                <SlideNavBttons />
              </div>
              {products.map((product) => (
                <SwiperSlide key={product.id} className="h-auto">
                  <Link
                    href={product.href}
                    className="bg-white w-full h-full rounded-lg group"
                  >
                    <div className=" w-full h-[65%] overflow-hidden rounded-tr-lg rounded-tl-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <Image
                        width={104}
                        height={104}
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full aspect-h-1 aspect-w-1 object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="px-3 grid gap-4">
                      <h3 className="mt-4 text-lg text-gray-700">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <p className="mt-1 text-lg font-medium text-gray-900">
                            {product.price}
                          </p>
                          <div className="flex items-center gap-1 text-xs">
                            <Image
                              width={20}
                              height={20}
                              src="/icons/Star-f.svg"
                              alt="ShoppingCart"
                              className=" object-cover object-center"
                            />
                            <p className="text-xs">{product.reviews}</p>
                          </div>
                        </div>
                        <div className="bg-[#FFF8EF] p-2 text-xs rounded-full">
                          <Image
                            width={20}
                            height={20}
                            src="/icons/ShoppingCart-r.svg"
                            alt="ShoppingCart"
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                    
                  </Link>
                </SwiperSlide>
              ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
      {url && (
        <Link
          href={`${url}`}
          className="mt-5 text-lg font-semibold flex gap-2 items-center justify-center text-primary-400 cursor-pointer"
        >
          See more
          <GoArrowRight />
        </Link>
      )}
    </div>
  );
};

export default Items;
