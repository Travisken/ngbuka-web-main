'use client'

import Image from "next/image";
import { InputBox, MrHeading, Text } from "../Atoms";

const LandingContact = () => {
  return (
    <>
      <div className=" relative bg-primary-25" id="contact">
        <div className=" w-[95vw] max-w-[85vw] mx-auto ">
          <div className="text-left lg:text-center pt-[30px] lg:pt-[50px] mb-6">
            <MrHeading
              fontWeight=" font-[600] lg:font-[700] "
              className=" leading-[36px] lg:leading-[72px] text-xl lg:text-5xl text-text-primary-100"
            >
              Get in touch with us
            </MrHeading>
            <Text
              variant="standard"
              className="text-lg hidden lg:block leading-[27px] mt-[10px] mb-6 w-full lg:w-1/2 mx-auto"
              fontWeight="font-[400]"
              textColor="text-text-primary-50"
            >
              Can’t find what you wanted in the FAQ’s, shoot us a quick message
              and we can take it from there
            </Text>
          </div>

          <div className="mt-0 lg:mt-[30px] pb-[30px] lg:pb-[60px] flex flex-col-reverse lg:flex-row items-center gap-[20px] lg:gap-[73px]">
            <div className=" w-full lg:w-[45%] mt-5 lg:mt-0">
              <form>
                <InputBox
                  id="name"
                  className="w-full px-4 py-2 text-lg border border-none rounded-md mb-4 bg-white hover:shadow-md hover:shadow-blue-700 hover:ring-2 hover:ring-blue-800 hover:outline-none outline-none text-white 
                   
                  "
                  dbname="name"
                  type="text"
                  placeholder="Enter Your Name"
                  style={{ color: "primary-100" }}
                />

                <InputBox
                  id="email"
                  className="w-full px-4 py-2 text-lg border border-none rounded-md mb-4 bg-white hover:shadow-md hover:shadow-blue-700 hover:ring-2 hover:ring-blue-800 hover:outline-none outline-none "
                  dbname="email"
                  type="email"
                  placeholder="Enter Your Email Address"
                />
                <textarea
                  className="py-3 px-4 block w-full border border-none rounded-md mb-[30px] text-lg bg-white hover:shadow-md hover:shadow-blue-700 hover:ring-2 hover:ring-blue-800 hover:outline-none outline-none"
                  dbname="message"
                  rows="3"
                  placeholder="Enter Your Message"
                ></textarea>
                <button
                  className=" w-[50vw] lg:w-[9vw]  bg-primary-200 py-[14px] px-5 rounded-3xl text-white"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className=" flex items-center lg:ml-0 rounded-2xl w-full lg:w-[45%]">
              <Image
                src="/images/contact.png"
                width={562}
                height={370}
                alt="Contact"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingContact;
