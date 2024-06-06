'use client'

import React from "react";
import Image from "next/image";
import {MrHeading, Text } from "../Atoms";

const LandingBook = () => {
  return (
    <>
      <div className="max-w-[85vw] mx-auto">
        <div className=" border-2 border-secondary-400 lg:pl-5 my-20 rounded-2xl flex items-center">
          <div className=" grid lg:flex items-center lg:flex-row-reverse justify-between gap-[30px] w-full mx-auto">
            <div className=" flex items-center rounded-3xl  w-full lg:w-1/2">
              <Image
                src="/images/Image.png"
                width={662}
                height={360}
                alt=""
                className=" rounded-se-2xl lg:rounded-se-none"
              />
            </div>
            <div className="grid gap-5 w-full lg:w-1/2">
              <MrHeading
                fontWeight=" font-[600] lg:font-[700] "
                className=" leading-[36px] lg:leading-[72px] text-text-primary-100 text-xl lg:text-5xl"
              >
                Book a mechanic
              </MrHeading>
              <Text
                variant="standard"
                className=" text-sm lg:text-lg leading-[19px]"
                fontWeight="font-[400]"
                textColor=" text-text-primary-50"
              >
                Getting a competent mechanic for your car doesn’t have to be an
                uncertainty anymore. Install the app to get a mechanic wherever
                you are
              </Text>
              <div className="flex items-center gap-5">
                <Image
                  src="/images/Vector_1.png"
                  width={222}
                  height={62}
                  alt="googlem image"
                  className="pt-[15px] "
                />
                <Image
                  src="/images/Vector.png"
                  width={222}
                  height={62}
                  alt="app store image"
                  className=" "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingBook;
