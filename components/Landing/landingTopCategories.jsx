"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MrHeading } from "../Atoms";
import { useRouter } from "next/navigation";
import { GoArrowRight } from "react-icons/go";

const LandingTopCategories = () => {
  const router = useRouter();
  return (
    <section className="relative mt-16">
      <div className=" w-[95vw] max-w-[85vw] mx-auto ">
        <div className="h-full py-6 sm:py-8 lg:py-12">
          <div className="mb-3 flex items-center justify-between gap-8">
            <MrHeading
              fontWeight=" font-[600] lg:font-[700]"
              className=" leading-[36px] text-text-primary-100 text-center  text-xl max-[400px]:text-2xl lg:text-2xl"
            >
              Spare Parts
            </MrHeading>

            <Link
              href="/"
              className="flex items-center gap-2 text-center text-sm font-semibold text-primary-400 transition duration-100 md:text-base"
            >
              See More
              <GoArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-6 xl:gap-4">
            {/* <!-- image - start --> */}
            <div
              className="group md:col-span-2 relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              onClick={() => router.push("/products/1")}
            >
              <Image
                src="/images/Motor oil image.png"
                width={700}
                height={240}
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <div className="flex items-center justify-between w-full">
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  OIL & LUBRICANTS
                </span>
                <span className="group-hover:opacity-100 hover:text-primary-500 cursor-pointer transition duration-300 opacity-0 flex items-center gap-1 relative mr-4 mb-3 text-sm text-white">
                  see more
                  <GoArrowRight />
                </span>
              </div>
            </div>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <Image
                src="/images/Spark plug.png"
                width={700}
                height={240}
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <div className="flex items-center justify-between w-full">
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  ENGINE
                </span>
                <span className="group-hover:opacity-100 hover:text-primary-500 cursor-pointer transition duration-300 opacity-0 flex items-center gap-1 relative mr-4 mb-3 text-sm text-white">
                  see more
                  <GoArrowRight />
                </span>
              </div>
            </div>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <Image
                src="/images/Fuel injector.png"
                width={700}
                height={240}
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <div className="flex items-center justify-between w-full">
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  FUELING
                </span>
                <span className="group-hover:opacity-100 hover:text-primary-500 cursor-pointer transition duration-300 opacity-0 flex items-center gap-1 relative mr-4 mb-3 text-sm text-white">
                  see more
                  <GoArrowRight />
                </span>
              </div>
            </div>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <Image
                src="/images/Car batteries.png"
                width={700}
                height={240}
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <div className="flex items-center justify-between w-full">
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  ELECTRICAL
                </span>
                <span className="group-hover:opacity-100 hover:text-primary-500 cursor-pointer transition duration-300 opacity-0 flex items-center gap-1 relative mr-4 mb-3 text-sm text-white">
                  see more
                  <GoArrowRight />
                </span>
              </div>
            </div>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <Image
                src="/images/Cooling pump.png"
                width={700}
                height={240}
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <div className="flex items-center justify-between w-full">
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  COOLING
                </span>
                <span className="group-hover:opacity-100 hover:text-primary-500 cursor-pointer transition duration-300 opacity-0 flex items-center gap-1 relative mr-4 mb-3 text-sm text-white">
                  see more
                  <GoArrowRight />
                </span>
              </div>
            </div>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <Image
                src="/images/milan-csizmadia-d665gpJZ-cY-unsplash-removebg-preview-removebg-preview.png"
                width={700}
                height={240}
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <div className="flex items-center justify-between w-full">
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  WHEELS & TIRES
                </span>
                <span className="group-hover:opacity-100 hover:text-primary-500 cursor-pointer transition duration-300 opacity-0 flex items-center gap-1 relative mr-4 mb-3 text-sm text-white">
                  see more
                  <GoArrowRight />
                </span>
              </div>
            </div>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <Image
                src="/images/Car lights.png"
                width={700}
                height={240}
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <div className="flex items-center justify-between w-full">
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  LIGHTING
                </span>
                <span className="group-hover:opacity-100 hover:text-primary-500 cursor-pointer transition duration-300 opacity-0 flex items-center gap-1 relative mr-4 mb-3 text-sm text-white">
                  see more
                  <GoArrowRight />
                </span>
              </div>
            </div>
            {/* <!-- image - end --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTopCategories;
