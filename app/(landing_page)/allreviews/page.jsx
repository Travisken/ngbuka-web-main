"use client";

import { Button, Dropdown, MrHeading, Text } from "@/components/Atoms";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Reviews } from "@/libs/constants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AllReviews = () => {
const [active, setActive] = useState("Newest first");

const handelClick = (value) => {
  console.log(value);
  setActive(value);
}

  return (
    <section>
      <Link href="/" className="pl-20">
        All Reviews
      </Link>
      <div className="flex items-start bg-[#FFFBF5] px-24 pt-12 pb-24 gap-5 ">
        <aside className="max-w-[300px] grid gap-5 bg-white p-5 rounded-lg w-full">
          <div className=" border-b pb-2">
            <MrHeading
              type="h4"
              fontWeight="font-extrabold"
              className="text-base text-primary-dark-50"
            >
              Ratings
            </MrHeading>
          </div>
          <div className="flex flex-col gap-3 border-b">
            <Text
              fontSize="extraLarge"
              variant="extraLarge"
              className="text-6xl"
              fontWeight="font-[600]"
              textColor="text-primary-400"
            >
              4.2
            </Text>
            <div className="flex flex-col gap-1">
              <Image
                width={120}
                height={120}
                src="/icons/Icons.svg"
                alt="Illustration"
                className=" object-cen"
              />
              <Text
                fontSize="standard"
                variant="standard"
                className="leading-[27px]"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Based on 15 customer reviews
              </Text>
            </div>
          </div>
          <div>
            <MrHeading
              type="h4"
              fontWeight="font-extrabold"
              className="text-base text-primary-dark-50 border-b pb-2"
            >
              Metrics
            </MrHeading>
            <div className="grid gap-3 mt-3">
              <div>
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="leading-[27px]"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-100"
                >
                  Product Quality
                </Text>
                <div className="flex items-center justify-between gap-2">
                  {/* progress bar */}
                  <div className="h-2 w-full bg-secondary-25 rounded-xl">
                    <div className="h-2 w-[85%] bg-secondary-400 rounded-xl"></div>
                  </div>
                  4.7
                </div>
              </div>
              <div>
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="leading-[27px]"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-100"
                >
                  Speed of delivery
                </Text>
                <div className="flex items-center gap-2">
                  {/* progress bar */}
                  <div className="h-2 w-full bg-secondary-25 rounded-xl">
                    <div className="h-2 w-[60%] bg-secondary-400 rounded-xl"></div>
                  </div>
                  3.7
                </div>
              </div>
              <div>
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="leading-[27px]"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  Chance of recommendation
                </Text>
                <div className="flex items-center gap-2">
                  {/* progress bar */}
                  <div className="h-2 w-full bg-secondary-25 rounded-xl">
                    <div className="h-2 w-[50%] bg-secondary-400 rounded-xl"></div>
                  </div>
                  3.0
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex-1 bg-white p-5 rounded-lg w-full">
          <div className="flex items-center justify-between border-b pb-2">
            <MrHeading
              type="h4"
              fontWeight="font-extrabold"
              className="text-base text-primary-dark-50"
            >
              Reviews
            </MrHeading>

            <div className="flex items-center gap-2">
              <Select onValueChange={handelClick} defaultValue="Newest first" >
                <SelectTrigger className="w-[130px] border-none py-0 h-auto">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent align="end" className='w-[180px] bg-white rounded-lg mt-8'>
                  <SelectGroup>
                    <SelectItem className={active === "Newest first" ? "text-secondary-400": " "}  value="Newest first" >Newest first</SelectItem>
                    <SelectItem  className={active === "Oldest first" ? "text-secondary-400" : " "} value="Oldest first">Oldest first</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {Reviews.map((review) => (
            <div className="mb-5 border-b pb-2" key={review.id}>
              <div className="grid gap-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Text
                      fontSize="standard"
                      variant="standard"
                      className="leading-[27px]"
                      fontWeight="font-[400]"
                      textColor="text-text-primary-100"
                    >
                      {review.title}
                    </Text>
                    <div className="flex items-center gap-2">
                      <Image
                        width={120}
                        height={120}
                        src={review.icon}
                        alt="Illustration"
                        className=" object-cen"
                      />
                      <span className="text-xs text-text-primary-50">
                        {review.rate}
                      </span>
                    </div>
                  </div>
                  <Text
                    fontSize="standard"
                    variant="standard"
                    className="leading-[27px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    {review.date}
                  </Text>
                </div>
                <div>
                  <Text
                    fontSize="medium"
                    variant="medium"
                    className="leading-[27px]"
                    fontWeight="font-[600]"
                    textColor="text-text-primary-50"
                  >
                    {review.type}
                  </Text>
                </div>
                <div>
                  <Text
                    fontSize="largeText"
                    variant="largeText"
                    className="leading-[27px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    {review.reviewText}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllReviews;
