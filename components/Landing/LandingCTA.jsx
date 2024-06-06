"use client"

import { Button, MrHeading, Text } from "../Atoms";

const LandingCTA = () => {
  return (
    <div
      className=" relative bg-white py-[40px] lg:py-[60px]"
      // add a bg image later for this div
    >
      <div className="  bg-secondary-25 w-[95vw] max-w-[85vw] mx-auto rounded-xl border border-primary-25">
        <div className="text-center pt-[30px] lg:pt-[50px] pb-[30px] px-4 w-full lg:w-9/12 mx-auto">
          <MrHeading
            fontWeight=" font-[600] lg:font-[700] "
            className=" leading-[36px] lg:leading-[72px] text-text-primary-100 text-xl lg:text-5xl text-left lg:text-center"
          >
            Download The App
          </MrHeading>
          <Text
            variant="standard"
            className=" text-sm lg:text-lg leading-[27px] mt-[10px] pb-[50px] text-left lg:text-center"
            fontWeight="font-[400]"
            textColor="text-text-primary-50 "
          >
            Get our versatile range of products and services when you install
            the app. Book a mechanic and shop for spare arts all in one place.
            Or you can boost your earnings by signing up as a vendor or as a
            mechanic on the Ngbuka vendor app.
          </Text>
          <div className=" flex flex-col items-center justify-center gap-3 sm:flex-row lg:gap-5">
            <Button
              className=" text-sm lg:text-lg rounded-3xl bg-secondary-400 text-white hover:bg-secondary-400"
              fontWeight="font-[400]"
            >
              Vehicle owner
            </Button>
            <Button
              className=" text-sm lg:text-lg bg-secondary-400 text-white hover:bg-secondary-400 px-11"
              fontWeight="font-[400]"
            >
              Vendor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCTA;
