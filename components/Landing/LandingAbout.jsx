import React from "react";
import Image from "next/image";
import { MrHeading, Text } from "../Atoms";


const LandingAbout = () => {
  return (
    <section className=" relative mt-16 " id="about">
      <div className=" w-[95vw] max-w-[85vw] mx-auto mb-32">
        <div className="relative rounded-2xl">
          <Image
            src="/images/About-image.png"
            width={800}
            height={600}
            alt="about us image"
            className="w-full rounded-2xl relative lg:h-full object-fill"
          />

          <div className="absolute px-2 left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 w-[800px]">
            <div className="grid lg:gap-5">
              <MrHeading
                fontWeight=" font-[600] lg:font-[700]"
                className=" leading-[36px] lg:leading-[72px] text-white text-center  text-xl max-[400px]:text-2xl lg:text-5xl"
              >
                About us
              </MrHeading>
              <Text
                variant="standard"
                className="text-lg leading-[27px]"
                fontWeight="font-[400]"
                textColor="text-background-white "
              >
                As a leading platform, we are bridging the gap between
                customers, vendors and mechanics and making sure they are
                accessible to each other on this platform as patrons. We have
                made it accessible and easier to use our services and we aim to
                serve all your consumer and business needs <br />
                Our mission as Ngbuka is to simplify your journey and make your
                search for quality spare-parts and skilled mechanics seamless.
              </Text>
              <Text
                variant="standard"
                className="text-lg leading-[27px]"
                fontWeight="font-[400]"
                textColor="text-background-white "
              >
                Get started by shopping spare-parts from any location and
                install the mobile app to book a mechanic to service your
                vehicle
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;
