"use client";
import Image from "next/image";
import { Button, Checkbox, InputBox, MrHeading, Text } from "../Atoms";
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import { BiStore } from "react-icons/bi";
import { PiLockSimpleFill } from "react-icons/pi";
import { TiTimes } from "react-icons/ti";
import { GrFormClose } from "react-icons/gr";
import { BsArrowLeftShort } from "react-icons/bs";

// swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/thumbs";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Thumbs } from 'swiper/modules';

// This file is for all my small components used in other pages
// then it can be deleted later.

const ToolsBox = () => {
  const [count, setCount] = useState(1);
   const [thumbsSwiper, setThumbsSwiper] = useState(null);

   console.log(thumbsSwiper, 'active thumb')

  function currencyFormat(num) {
    return "₦" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const itemPrice = 45000;
  const currentPrice = count * itemPrice;
  console.log(currencyFormat(currentPrice));

  const handleCheckChange = () => {
    let num = 1;
    console.log(num++);
  };

  // const getIsSelected = () => {
  //   console.log('check')
  // }

  return (
    <div className="mt-12 flex flex-col gap-16">
      {/* ITEMS ORDER DETAILS - DELIVERY CARD */}
      <div className="">
        <div className="bg-white p-5 rounded-2xl">
          <div className="flex items-center gap-5">
            <div className="relative lg:h-[144px] lg:w-[220px]">
              <Image
                src="/images/Motor oil image.png"
                width={400}
                height={140}
                alt="Photo by Minh Pham"
                className=" inset-0 h-full w-full rounded-[19px] transition duration-300 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col gap-3 w-full">
              <div>
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-sm"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  Star auto-shop
                </Text>
                <div className="flex items-center gap-2 justify-between">
                  <Text
                    variant="standard"
                    className="text-lg leading-[27px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    5 litresTechno super oil; Super HD 40; SAE 40
                  </Text>
                  <MrHeading
                    type="h4"
                    fontFamily="font-fira"
                    className="text-2xl text-text-primary-50 leading-[36px] font-[600]"
                  >
                    ₦45,000
                  </MrHeading>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="leading-[22px]"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  Type: <b>SW-30</b>
                </Text>
                <div className="flex items-center justify-between">
                  <Text
                    variant="standard"
                    className="leading-[22px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    Qty: 1
                  </Text>
                  <Text
                    variant="standard"
                    className="leading-[22px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    No. in stock:{" "}
                    <span className="text-success font-semibold">4</span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order confirmation card */}
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white p-5 rounded-2xl">
          <div className="flex items-center gap-5 border-b pb-3">
            <div className="relative lg:h-[114px] lg:w-[260px]">
              <Image
                src="/images/Motor oil image.png"
                width={400}
                height={140}
                alt="Photo by Minh Pham"
                className=" inset-0 h-full w-full rounded-[19px] transition duration-300 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col gap-3 w-full">
              <div>
                <Text
                  variant="standard"
                  className="text-lg leading-[27px]"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  5 litresTechno super oil; Super HD 40; SAE 40
                </Text>
              </div>
              <div className="flex items-center gap-5">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-sm"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  <b>SW-30</b>
                </Text>
                <Text
                  variant="standard"
                  className=" text-sm"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  5 litres
                </Text>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Text
              variant="standard"
              className="leading-[22px]"
              fontWeight="font-[600]"
              textColor="text-text-primary-50"
            >
              Qty ordered: <b>1</b>
            </Text>

            <Link href="/" className="underline font-semibold text-base">
              No. in stock:{" "}
              <span className="text-success font-semibold">4</span>
            </Link>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl">
          <div className="flex items-center gap-5 border-b pb-3">
            <div className="relative lg:h-[114px] lg:w-[260px]">
              <Image
                src="/images/Motor oil image.png"
                width={400}
                height={140}
                alt="Photo by Minh Pham"
                className=" inset-0 h-full w-full rounded-[19px] transition duration-300 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col gap-3 w-full">
              <div>
                <Text
                  variant="standard"
                  className="text-lg leading-[27px]"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  5 litresTechno super oil; Super HD 40; SAE 40
                </Text>
              </div>
              <div className="flex items-center gap-5">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-sm"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  <b>SW-30</b>
                </Text>
                <Text
                  variant="standard"
                  className=" text-sm"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  5 litres
                </Text>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Text
              variant="standard"
              className="leading-[22px]"
              fontWeight="font-[600]"
              textColor="text-text-primary-50"
            >
              Qty ordered: <b>1</b>
            </Text>

            <Link href="/" className="underline font-semibold text-base">
              No. in stock:{" "}
              <span className="text-success font-semibold">4</span>
            </Link>
          </div>
        </div>
      </div>

      {/* orders cards */}
      <div className="">
        <div className="bg-white p-5 rounded-2xl">
          <div className="flex items-center gap-5">
            <div className="relative lg:h-[114px] lg:w-[260px]">
              <Image
                src="/images/Motor oil image.png"
                width={400}
                height={140}
                alt="Photo by Minh Pham"
                className=" inset-0 h-full w-full rounded-[19px] transition duration-300 group-hover:scale-110"
              />
            </div>

            <div className=" w-full">
              <div className="flex flex-col gap-px">
                <div className="flex items-center justify-between border-b pb-3">
                  <Text
                    variant="standard"
                    className="text-sm"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    Order ID. 63567255
                  </Text>

                  <div className="flex items-center gap-3">
                    <Text
                      variant="standard"
                      className="text-sm"
                      fontWeight="font-[400]"
                      textColor="text-text-primary-50"
                    >
                      2:05pm
                    </Text>
                    <Text
                      variant="standard"
                      className="text-sm"
                      fontWeight="font-[400]"
                      textColor="text-text-primary-50"
                    >
                      Mar 17, 2024
                    </Text>
                  </div>

                  <Text
                    variant="standard"
                    className="text-xs"
                    fontWeight="font-[400]"
                    textColor="text-success"
                  >
                    NEW
                  </Text>
                </div>

                <div>
                  <Text
                    variant="standard"
                    className="text-lg leading-[27px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    5 litresTechno super oil; Super HD 40; SAE 40
                  </Text>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <Text
                      fontSize="standard"
                      variant="standard"
                      className="text-sm"
                      fontWeight="font-[600]"
                      textColor="text-text-primary-50"
                    >
                      <b>SW-30</b>
                    </Text>
                    <Text
                      variant="standard"
                      className="leading-[22px]"
                      fontWeight="font-[600]"
                      textColor="text-text-primary-50"
                    >
                      Qty: <b>1</b>
                    </Text>
                  </div>
                  <MrHeading
                    type="h4"
                    fontFamily="font-fira"
                    className="text-2xl text-text-primary-100 leading-[36px] font-[600]"
                  >
                    ₦45,000
                  </MrHeading>
                </div>
              </div>
              <div className="flex items-center justify-between border-t">
                <Text
                  variant="standard"
                  className="leading-[22px]"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  Delivery (Out-of-state)
                </Text>
                <Text
                  variant="standard"
                  className="leading-[22px]"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  Ship before 4th August, 2023
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Items Card */}
      <div className="">
        <div className="bg-white p-3"></div>
      </div>

      {/* Cart Card */}
      <div className="">
        <div className="bg-white p-5 rounded-2xl flex items-center gap-3 w-full">
          <Checkbox
            checkboxStyle="filled"
            isSelected={false}
            handleChange={handleCheckChange()}
            className="w-6 h-6"
          />
          <div className="flex items-center gap-5 w-full">
            <div className="relative lg:h-[144px] lg:w-[220px]">
              <Image
                src="/images/Motor oil image.png"
                width={400}
                height={140}
                alt="Photo by Minh Pham"
                className=" inset-0 h-full w-full rounded-[19px] transition duration-300 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col gap-5 w-full">
              <div className="border-b pb-5 w-full">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-sm"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  Star auto-shop
                </Text>
                <Text
                  variant="standard"
                  className="text-lg leading-[27px]"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  5 litresTechno super oil; Super HD 40; SAE 40
                </Text>
              </div>
              <div className="flex items-center justify-between gap-2 w-full">
                <div className="flex items-center">
                  <b>SW-30</b>{" "}
                  <MdKeyboardArrowDown className="text-2xl font-extralight" />
                </div>
                <div className="flex gap-3 items-center">
                  <span
                    onClick={() => {
                      setCount((prev) => Math.max(prev - 1, 1));
                    }}
                    className="w-6 h-6 grid place-content-center text-lg font-semibold border border-border-100 text-white bg-secondary-100 rounded-sm cursor-pointer"
                  >
                    -
                  </span>
                  <span>{count}</span>
                  <span
                    onClick={() => {
                      setCount((prev) => Math.max(prev + 1));
                    }}
                    className="w-6 h-6 grid place-content-center text-lg font-semibold border border-border-100 text-white bg-secondary-400 rounded-sm cursor-pointer"
                  >
                    +
                  </span>
                </div>
                <Text
                  variant="standard"
                  className="text-2xl"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  {currencyFormat(currentPrice)}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full">
        <div className="bg-white py-3 px-5 flex flex-col gap-3 rounded-2xl">
          <Text
            fontSize="standard"
            variant="standard"
            className="text-lg border-b pb-3"
            fontWeight="font-[600]"
            textColor="text-text-primary-100"
          >
            Summary
          </Text>
          <div className="flex items-center justify-between">
            <Text
              fontSize="standard"
              variant="standard"
              fontWeight="font-[400]"
              textColor="text-text-primary-50"
            >
              No. of items
            </Text>
            <span>0</span>
          </div>

          <div className="flex items-center justify-between">
            <Text
              fontSize="standard"
              variant="standard"
              fontWeight="font-[400]"
              textColor="text-text-primary-50"
            >
              Total
            </Text>
            <span>0</span>
          </div>
        </div>
        <Button className="bg-secondary-100">Checkout (0)</Button>
      </div>

      <div className="bg-white p-5 rounded-2xl flex items-center justify-between">
        <div className="flex items-center justify-center gap-3">
          <Checkbox
            checkboxStyle="filled"
            isSelected={false}
            handleChange={handleCheckChange()}
            className="w-6 h-6"
          />
          <Text
            fontSize="standard"
            variant="standard"
            className="text-4xl"
            fontWeight="font-[700]"
            textColor="text-text-primary-50"
          >
            My Cart (3)
          </Text>
        </div>

        <div className="text-danger text-lg font-normal px-1">Delete</div>
      </div>

      {/* // type modal */}
      <div className="flex flex-col gap-5 w-full">
        <div className="bg-white py-3 px-5 flex flex-col gap-3 rounded-2xl max-w-[600px]">
          <div className="flex items-center justify-between border-b pb-3">
            <div className="">
              <span className="w-5 h-5 bg-secondary-50 rounded-full"></span>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-lg"
                fontWeight="font-[600]"
                textColor="text-text-primary-100"
              >
                Change type
              </Text>
            </div>
            <span>X</span>
          </div>
          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex gap-5">
              <div className="flex flex-col gap-10">
                <div className="relative lg:h-[140px] lg:w-[235px]">
                  <Swiper
                    spaceBetween={10}
                    // navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    className="w-full"
                  >
                    <SwiperSlide>
                      <Image
                        src="/images/Motor oil image.png"
                        width={400}
                        height={140}
                        alt="Photo by Minh Pham"
                        className=" inset-0 h-full w-full rounded-lg object-cover object-center transition duration-300 group-hover:scale-110"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/images/Motor oil image.png"
                        width={400}
                        height={140}
                        alt="Photo by Minh Pham"
                        className=" inset-0 h-full w-full rounded-lg object-cover object-center transition duration-300 group-hover:scale-110"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/images/Motor oil image.png"
                        width={400}
                        height={140}
                        alt="Photo by Minh Pham"
                        className=" inset-0 h-full w-full rounded-lg object-cover object-center transition duration-300 group-hover:scale-110"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/images/Motor oil image.png"
                        width={400}
                        height={140}
                        alt="Photo by Minh Pham"
                        className=" inset-0 h-full w-full rounded-lg object-cover object-center transition duration-300 group-hover:scale-110"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="flex items-center gap-5 lg:w-[235px]">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className="w-full"
                  >
                    <SwiperSlide className="w-[45px] h-[25px]">
                      <Image
                        src="/images/Motor oil image.png"
                        width={400}
                        height={140}
                        alt="Photo by Minh Pham"
                        className=" w-fit h-fit rounded-lg"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="w-[45px] h-[10px]">
                      <Image
                        src="/images/Motor oil image.png"
                        width={400}
                        height={140}
                        alt="Photo by Minh Pham"
                        className=" w-fit h-fit rounded-lg"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="w-[45px] h-[25px]">
                      <Image
                        src="/images/Motor oil image.png"
                        width={400}
                        height={140}
                        alt="Photo by Minh Pham"
                        className=" w-fit h-fit rounded-lg"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="w-[45px] h-[25px]">
                      <Image
                        src="/images/Motor oil image.png"
                        width={400}
                        height={140}
                        alt="Photo by Minh Pham"
                        className=" w-fit h-fit rounded-lg"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <section className="flex flex-col justify-between w-auto max-w-[456px]">
                <div className="flex flex-col justify-between gap-2">
                  <div className="grid gap-2">
                    <Text
                      variant="standard"
                      className="leading-[28px] text-xl"
                      fontWeight="font-[600]"
                      textColor="text-text-primary-100"
                    >
                      Type
                    </Text>

                    <div className="flex items-center gap-5">
                      <button
                        type="button"
                        role="type"
                        aria-selected="true"
                        className="rounded-xl border border-[#CCCCD8] text-white bg-secondary-400 text-sm font-fira px-3 py-1 cursor-pointer"
                      >
                        TW-20
                      </button>
                      <button
                        type="button"
                        role="type"
                        aria-selected="false"
                        className="rounded-xl border border-[#CCCCD8] active:bg-secondary-400 text-sm font-fira px-3 py-1 cursor-pointer"
                      >
                        TW-30
                      </button>
                      <button
                        type="button"
                        role="type"
                        aria-selected="false"
                        className="rounded-xl border border-[#CCCCD8] active:bg-secondary-400 text-sm font-fira px-3 py-1 cursor-pointer"
                      >
                        TW-40
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Text
              fontSize="standard"
              variant="standard"
              fontWeight="font-[400]"
              textColor="text-text-primary-50"
            >
              Cancel
            </Text>
            <Button className="bg-secondary-400">Confirm selection</Button>
          </div>
        </div>
      </div>

      {/* remove product modal */}
      <div className="flex flex-col gap-5 w-full">
        <div className="bg-white py-5 px-5 flex flex-col gap-5 rounded-2xl max-w-[400px]">
          <div className="flex items-center justify-between border-b pb-3">
            <div className="">
              <span className="w-5 h-5 bg-secondary-50 rounded-full"></span>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-2xl"
                fontWeight="font-[600]"
                textColor="text-text-primary-100"
              >
                Remove product
              </Text>
            </div>
            <span>X</span>
          </div>
          <Text
            fontSize="standard"
            variant="standard"
            className="text-base"
            fontWeight="font-[600]"
            textColor="text-text-primary-100"
          >
            Do you want to remove these item(s) from your cart?
          </Text>
          <div className="flex flex-col items-center gap-2">
            <Button className="bg-secondary-400 w-full">Remove</Button>
            <Text
              fontSize="standard"
              variant="standard"
              fontWeight="font-[400]"
              className=" cursor-pointer"
              textColor="text-text-primary-50"
            >
              Cancel
            </Text>
          </div>
        </div>
      </div>

      {/* thanks for order modal */}
      <div className="flex flex-col text-center justify-center gap-5 w-fit">
        <div className="bg-white py-5 px-5 flex flex-col gap-5 rounded-2xl max-w-[400px]">
          <div className="pb-3 grid place-content-center">
            <Image
              src="/icons/check with sparkles.svg"
              width={400}
              height={140}
              alt="Photo by Minh Pham"
              className=" inset-0 w-40 rounded-lg object-cover object-center transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="grid gap-3 text-center">
            <Text
              fontSize="standard"
              variant="standard"
              className="text-2xl"
              fontWeight="font-[600]"
              textColor="text-text-primary-100"
            >
              Thank you for your order
            </Text>
            <Text
              fontSize="standard"
              variant="standard"
              className="text-base"
              fontWeight="font-[400]"
              textColor="text-text-primary-50"
            >
              Your order confirmation has been sent to your registered email
            </Text>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button className="bg-secondary-500 w-full">
              View order details
            </Button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[60px] h-[60px] grid bg-white place-content-center rounded-full">
            X
          </div>
        </div>
      </div>

      {/* change delivery method modal */}
      <div className="flex flex-col text-center justify-center gap-5 w-fit">
        <div className="bg-white p-10 flex flex-col gap-9 rounded-2xl w-full max-w-[500px] lg:w-[500px]">
          <div className="flex items-center gap-2 border-b border-border-25 pb-2">
            <Image
              width={30}
              height={30}
              src="/icons/Truck-f.svg"
              alt="Truck img"
              className=" fill-secondary-900 stroke-black"
            />
            <Text
              fontSize="standard"
              variant="standard"
              className="text-lg"
              fontWeight="font-[600]"
              textColor="text-text-primary-25"
            >
              Change delivery method
            </Text>
          </div>
          <div className="grid gap-3">
            <div className="flex items-center w-full gap-5">
              <div
                onClick={() => {}}
                className="flex items-center justify-center"
              >
                <input
                  type="radio"
                  className="w-5 h-5"
                  name="delivery"
                  id="delivery"
                />
              </div>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-lg"
                fontWeight="font-[600]"
                textColor="text-text-primary-25"
              >
                Delivery
              </Text>
            </div>
            <div className="flex items-center w-full gap-5">
              <div
                onClick={() => {}}
                className="flex items-center justify-center"
              >
                <input
                  type="radio"
                  className="w-5 h-5"
                  name="delivery"
                  id="delivery"
                />
              </div>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-lg"
                fontWeight="font-[600]"
                textColor="text-text-primary-25"
              >
                Selfpick-up
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button
              isDisabled
              className="bg-secondary-500 w-full disabled:bg-secondary-100 disabled:cursor-not-allowed"
            >
              Confirm selection
            </Button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[50px] h-[50px] grid bg-white place-content-center rounded-full">
            X
          </div>
        </div>
      </div>

      {/* change payment method modal */}
      <div className="flex flex-col text-center justify-center gap-5 w-fit">
        <div className="bg-white p-10 flex flex-col gap-9 rounded-2xl w-full max-w-[500px] lg:w-[500px]">
          <div className="flex items-center gap-2 border-b border-border-25 pb-2">
            <Image
              width={30}
              height={30}
              src="/icons/Coins-f.svg"
              alt="conin imgage"
              className=" fill-secondary-900 stroke-black"
            />
            <Text
              fontSize="standard"
              variant="standard"
              className="text-lg"
              fontWeight="font-[600]"
              textColor="text-text-primary-25"
            >
              Change delivery method
            </Text>
          </div>
          <div className="grid gap-3">
            <div className="flex items-center w-full gap-5">
              <div
                onClick={() => {}}
                className="flex items-center justify-center"
              >
                <input
                  type="radio"
                  className="w-5 h-5"
                  name="delivery"
                  id="delivery"
                />
              </div>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-lg"
                fontWeight="font-[600]"
                textColor="text-text-primary-25"
              >
                Wallet
              </Text>
            </div>
            <div className="flex items-center w-full gap-5">
              <div
                onClick={() => {}}
                className="flex items-center justify-center"
              >
                <input
                  type="radio"
                  className="w-5 h-5"
                  name="delivery"
                  id="delivery"
                />
              </div>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-lg"
                fontWeight="font-[600]"
                textColor="text-text-primary-25"
              >
                Bank Transfer
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button
              isDisabled
              className="bg-secondary-500 w-full disabled:bg-secondary-100 disabled:cursor-not-allowed"
            >
              Confirm selection
            </Button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[50px] h-[50px] grid bg-white place-content-center rounded-full">
            X
          </div>
        </div>
      </div>

      {/* change addresses modal */}
      <div className="flex flex-col text-center justify-center gap-3 w-fit">
        <div className="bg-white p-9 flex flex-col gap-9 rounded-2xl w-full max-w-[450px] lg:w-[450px]">
          <div className="flex items-center gap-2 border-b border-border-25 pb-2">
            <Image
              width={24}
              height={24}
              src="/icons/MapPin-f.svg"
              alt="filld map pin img"
              className=" fill-secondary-900 stroke-black"
            />
            <Text
              fontSize="standard"
              variant="standard"
              className="text-lg"
              fontWeight="font-[600]"
              textColor="text-text-primary-50"
            >
              Change delivery method
            </Text>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center w-full gap-5">
              <div
                onClick={() => {}}
                className="flex items-center justify-center"
              >
                <input
                  type="radio"
                  className="w-5 h-5"
                  name="delivery"
                  id="delivery"
                />
              </div>
              <div className="">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-base mb-1"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50 text-start"
                >
                  Home
                </Text>
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-sm text-start"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  66 Forces Avenue, Old GRA <br /> Port Harcourt, Rivers state{" "}
                  <br /> 500272
                  <br /> Rivers State
                </Text>
              </div>
            </div>
            <div className="flex items-center w-full gap-5">
              <div
                onClick={() => {}}
                className="flex items-center justify-center"
              >
                <input
                  type="radio"
                  className="w-5 h-5"
                  name="delivery"
                  id="delivery"
                />
              </div>
              <div className="">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-base mb-1"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50 text-start"
                >
                  Work
                </Text>
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-sm text-start"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  31 Isiopko Street, D-Line <br /> Port Harcourt, Rivers state{" "}
                  <br /> 500272
                  <br /> Rivers State
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button
              isDisabled
              className="bg-secondary-500 w-full disabled:bg-secondary-100 disabled:cursor-not-allowed"
            >
              Confirm selection
            </Button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[50px] h-[50px] grid bg-white place-content-center rounded-full">
            X
          </div>
        </div>
      </div>

      {/* order tracker modal */}
      <div className="flex flex-col text-center justify-center gap-3 w-fit">
        <div className="bg-white p-9 flex flex-col gap-9 rounded-2xl w-full max-w-[500px] lg:w-[500px]">
          <div>
            <div className="flex items-center gap-2 border-b border-border-25 pb-2">
              <Image
                width={24}
                height={24}
                src="/icons/Bank-f.svg"
                alt="Bank imgage"
                className=" fill-secondary-900 stroke-black"
              />
              <Text
                fontSize="standard"
                variant="standard"
                className="text-lg"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                Bank transfer
              </Text>
            </div>
            <Text
              fontSize="standard"
              variant="standard"
              className="text-base mb-1 text-start pt-2"
              fontWeight="font-[400]"
              textColor="text-text-primary-50 "
            >
              See our account details below
            </Text>
          </div>
          <div className="grid gap-6 pt-3">
            <div className="border-b border-border-25 pb-2">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm text-start"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Bank: <b>Access Bank of Nigeria</b>
              </Text>
            </div>
            <div className="border-b border-border-25 pb-2">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm text-start"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Account name: <b>Ngbuka Services Integrated</b>
              </Text>
            </div>

            <div className="border-b border-border-25 pb-2 flex items-start gap-3">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm text-start"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Account number: <b>0098463625</b>
              </Text>
              <Image
                width={24}
                height={24}
                src="/icons/Copy.svg"
                alt="Copy imgage"
                className=" fill-secondary-900 stroke-black"
              />
            </div>
          </div>
          <div className="grid py-3 px-5 bg-border-25 gap-1 rounded-lg">
            <div className="flex items-start gap-1">
              <div className="flex items-baseline gap-1 text-sm">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                  <div className="w-px h-6 bg-slate-900"></div>
                </div>
                <span>on the way</span>
              </div>
            </div>
            <div className="flex items-start gap-1">
              <div className="flex items-baseline gap-1 text-sm">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                  <div className="w-px h-6 bg-slate-900"></div>
                </div>
                <span>on the way</span>
              </div>
            </div>
            <div className="flex items-start gap-1">
              <div className="flex items-baseline gap-1 text-sm">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                  <div className="w-px h-6 bg-slate-900"></div>
                </div>
                <span>on the way</span>
              </div>
            </div>
            <div className="flex items-start gap-1">
              <div className="flex items-baseline gap-1 text-sm">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                  {/* <div className="w-px h-6 bg-slate-900"></div> */}
                </div>
                <span>on the way</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[50px] h-[50px] grid bg-white place-content-center rounded-full">
            X
          </div>
        </div>
      </div>

      {/* bank tranfer modal */}
      <div className="flex flex-col text-center justify-center gap-3 w-fit">
        <div className="bg-white p-9 flex flex-col gap-9 rounded-2xl w-full max-w-[500px] lg:w-[500px]">
          <div>
            <div className="flex items-center gap-2 border-b border-border-25 pb-2">
              <Image
                width={24}
                height={24}
                src="/icons/Bank-f.svg"
                alt="Bank imgage"
                className=" fill-secondary-900 stroke-black"
              />
              <Text
                fontSize="standard"
                variant="standard"
                className="text-lg"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                Bank transfer
              </Text>
            </div>
            <Text
              fontSize="standard"
              variant="standard"
              className="text-base mb-1 text-start pt-2"
              fontWeight="font-[400]"
              textColor="text-text-primary-50 "
            >
              See our account details below
            </Text>
          </div>
          <div className="grid gap-6 pt-3">
            <div className="border-b border-border-25 pb-2">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm text-start"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Bank: <b>Access Bank of Nigeria</b>
              </Text>
            </div>
            <div className="border-b border-border-25 pb-2">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm text-start"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Account name: <b>Ngbuka Services Integrated</b>
              </Text>
            </div>

            <div className="border-b border-border-25 pb-2 flex items-start gap-3">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm text-start"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Account number: <b>0098463625</b>
              </Text>
              <Image
                width={24}
                height={24}
                src="/icons/Copy.svg"
                alt="Copy imgage"
                className=" fill-secondary-900 stroke-black"
              />
            </div>
          </div>
          <div className="grid py-3 px-5 bg-border-25 gap-1 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="w-1 h-1 bg-text-primary-50 rounded-full mt-[6px]"></span>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm text-start"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Pay the exact amount of your transaction into the account number
                provided
              </Text>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-1 h-1 bg-text-primary-50 rounded-full mt-[6px]"></span>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm text-start"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                This payment gateway will be closed after 30 minutes and you
                will need to start the transaction again
              </Text>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[50px] h-[50px] grid bg-white place-content-center rounded-full">
            X
          </div>
        </div>
      </div>

      {/* change password modal */}
      <div className="flex flex-col text-center justify-center gap-3 w-fit">
        <div className="bg-white p-9 flex flex-col gap-9 rounded-2xl w-full max-w-[500px] lg:w-[500px]">
          <div>
            <div className="flex items-center gap-2 border-b border-border-25 pb-2">
              <PiLockSimpleFill className="text-secondary-800 text-2xl" />
              <Text
                fontSize="standard"
                variant="standard"
                className="text-lg"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                Change password
              </Text>
            </div>
            <Text
              fontSize="standard"
              variant="standard"
              className="text-base mb-1 text-start pt-2"
              fontWeight="font-[400]"
              textColor="text-text-primary-50 "
            >
              Change your account password
            </Text>
          </div>
          <div className="flex flex-col gap-6">
            <div className="">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm text-start"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                Current password
              </Text>
              <div className="border  rounded-full px-2 mt-1">
                <InputBox
                  type="text"
                  className="border-none w-fit"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm text-start"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                New password
              </Text>
              <div className="border  rounded-full px-2 mt-1">
                <InputBox
                  type="password"
                  className="border-none w-fit"
                  placeholder="New password"
                />
              </div>
            </div>

            <div className="">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm text-start"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                Confirm new password
              </Text>
              <div className="border  rounded-full px-2 mt-1">
                <InputBox
                  type="password"
                  className="border-none w-fit"
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          </div>
          <Button
            isDisabled
            className="bg-secondary-500 w-full disabled:bg-secondary-100 disabled:cursor-not-allowed"
          >
            Save address
          </Button>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[50px] h-[50px] grid bg-white place-content-center rounded-full">
            <TiTimes />
          </div>
        </div>
      </div>

      {/* set up your account modal */}
      <div className="flex flex-col gap-5 w-full">
        <div className="bg-white p-10 flex flex-col gap-5 rounded-2xl max-w-[600px]">
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <Image
                width={24}
                height={24}
                src="/icons/Icon.svg"
                alt="set up imgage"
                className=" w-fit h-fit"
              />
              <Text
                fontSize="standard"
                variant="standard"
                className="text-2xl"
                fontWeight="font-[600]"
                textColor="text-text-primary-100"
              >
                Set up your account
              </Text>
            </div>
            <GrFormClose className="text-xl" />
          </div>
          <Text
            fontSize="standard"
            variant="standard"
            className="text-base"
            fontWeight="font-[400]"
            textColor="text-text-primary-50"
          >
            To start withdrawing funds from your Ngbuka wallet, you need to link
            your local bank account. <br />
            Click continue to get started
          </Text>
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <Text
              fontSize="standard"
              variant="standard"
              fontWeight="font-[400]"
              className=" cursor-pointer w-full text-center"
              textColor="text-text-primary-50"
            >
              Cancel
            </Text>
            <Button className="bg-secondary-600 w-full py-2 rounded-full">
              Yes, continue
            </Button>
          </div>
        </div>
      </div>

      {/* set up successful modal */}
      <div className="flex flex-col text-center justify-center gap-5 w-fit">
        <div className="bg-white py-10 px-5 flex flex-col gap-5 rounded-2xl max-w-[400px]">
          <div className="pb-3 grid place-content-center">
            <Image
              src="/icons/check with sparkles.svg"
              width={20}
              height={20}
              alt="Photo by Minh Pham"
              className="w-fit"
            />
          </div>
          <div className="grid gap-3 text-center">
            <Text
              fontSize="standard"
              variant="standard"
              className="text-2xl"
              fontWeight="font-[600]"
              textColor="text-text-primary-100"
            >
              Set-up successful!
            </Text>
            <Text
              fontSize="standard"
              variant="standard"
              className="text-base text-center"
              fontWeight="font-[400]"
              textColor="text-text-primary-50"
            >
              Your account set up has been completed and you can start making
              withdrawals
            </Text>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button className="bg-secondary-600 w-full">Thank you</Button>
            <Text
              fontSize="standard"
              variant="standard"
              fontWeight="font-[400]"
              className=" cursor-pointer"
              textColor="text-text-primary-50"
            >
              Later
            </Text>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[60px] h-[60px] grid bg-white place-content-center rounded-full">
            X
          </div>
        </div>
      </div>

      {/* successful deposite modal */}
      <div className="flex flex-col text-center justify-center gap-5 w-fit">
        <div className="bg-white py-10 px-5 flex flex-col gap-5 rounded-2xl max-w-[400px]">
          <div className="pb-3 grid place-content-center">
            <Image
              src="/icons/check with sparkles.svg"
              width={20}
              height={20}
              alt="Photo by Minh Pham"
              className="w-fit"
            />
          </div>
          <div className="grid gap-3 text-center">
            <Text
              fontSize="standard"
              variant="standard"
              className="text-2xl"
              fontWeight="font-[600]"
              textColor="text-text-primary-100"
            >
              Successful
            </Text>
            <Text
              fontSize="standard"
              variant="standard"
              className="text-base text-center"
              fontWeight="font-[400]"
              textColor="text-text-primary-50"
            >
              You have successfully deposited <b>₦40,000 </b> into your Ngbuka
              wallet
            </Text>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button className="bg-secondary-600 w-full">Thank you</Button>
            <Text
              fontSize="standard"
              variant="standard"
              fontWeight="font-[400]"
              className=" cursor-pointer"
              textColor="text-text-primary-50"
            >
              Later
            </Text>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[60px] h-[60px] grid bg-white place-content-center rounded-full">
            X
          </div>
        </div>
      </div>

      {/* failed deposit modal */}
      <div className="flex flex-col text-center justify-center gap-5 w-fit">
        <div className="bg-white py-10 px-5 flex flex-col gap-5 rounded-2xl max-w-[400px]">
          <div className="pb-3 grid place-content-center">
            <Image
              src="/images/ErrorIllustation.png"
              width={24}
              height={24}
              alt="Failed icon"
              className="w-full"
            />
          </div>
          <div className="grid gap-3 text-center">
            <Text
              fontSize="standard"
              variant="standard"
              className="text-2xl"
              fontWeight="font-[600]"
              textColor="text-text-primary-100"
            >
              Failed
            </Text>
            <Text
              fontSize="standard"
              variant="standard"
              className="text-base text-center"
              fontWeight="font-[400]"
              textColor="text-text-primary-50"
            >
              Sorry, it seems something went wrong. Try again
            </Text>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button className="bg-secondary-600 w-full">Thank you</Button>
            <Text
              fontSize="standard"
              variant="standard"
              fontWeight="font-[400]"
              className=" cursor-pointer"
              textColor="text-text-primary-50"
            >
              Later
            </Text>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[60px] h-[60px] grid bg-white place-content-center rounded-full">
            X
          </div>
        </div>
      </div>

      {/* Deposit funds modal */}
      <div className="flex flex-col text-center justify-center gap-3 w-fit">
        <div className="bg-white p-9 flex flex-col gap-9 rounded-2xl w-full max-w-[500px] lg:w-[500px]">
          <div>
            <div className="flex items-center gap-2 border-b border-border-25 pb-2">
              <PiLockSimpleFill className="text-secondary-800 text-2xl" />
              <Text
                fontSize="standard"
                variant="standard"
                className="text-lg"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                Deposit funds
              </Text>
            </div>
            <Text
              fontSize="standard"
              variant="standard"
              className="text-base mb-1 text-start pt-2"
              fontWeight="font-[400]"
              textColor="text-text-primary-50 "
            >
              Fund your Ngbuka wallet to make transactions easier
            </Text>
            <div className="text-secondary-600 text-sm text-start font-normal">
              **You can’t deposit less than ₦2,500
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="bg-primary-25 p-4 flex items-center rounded-2xl justify-center lg:w-[75%   m]">
              <p>%</p>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-base pl-3"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Current balance:
              </Text>
              <span className="text-2xl font-semibold text-text-primary-50">
                ₦40,000.00
              </span>
            </div>
            <div className="">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm text-start"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                Amount
              </Text>
              <div className="border flex items-center gap-2 rounded-full px-2 mt-1">
                <span className="">#</span>
                <InputBox
                  type="number"
                  className="border-none w-fit"
                  placeholder="New password"
                />
              </div>
            </div>
          </div>
          <Button
            isDisabled
            className="bg-secondary-500 w-full disabled:bg-secondary-100 disabled:cursor-not-allowed"
          >
            Save address
          </Button>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[50px] h-[50px] grid bg-white place-content-center rounded-full">
            <TiTimes />
          </div>
        </div>
      </div>

      {/* withdraw funds modal */}
      <div className="flex flex-col text-center justify-center gap-3 w-fit">
        <div className="bg-white p-9 flex flex-col gap-9 rounded-2xl w-full max-w-[500px] lg:w-[500px]">
          <div>
            <div className="flex items-center gap-2 border-b border-border-25 pb-2">
              <PiLockSimpleFill className="text-secondary-800 text-2xl" />
              <Text
                fontSize="standard"
                variant="standard"
                className="text-lg"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                Deposit funds
              </Text>
            </div>
            <Text
              fontSize="standard"
              variant="standard"
              className="text-base mb-1 text-start pt-2"
              fontWeight="font-[400]"
              textColor="text-text-primary-50 "
            >
              Fund your Ngbuka wallet to make transactions easier
            </Text>
            <div className="text-secondary-600 text-sm text-start font-normal">
              **You can’t deposit less than ₦2,500
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="bg-primary-25 p-4 flex items-center rounded-2xl justify-center lg:w-[75%   m]">
              <p>%</p>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-base pl-3"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Current balance:
              </Text>
              <span className="text-2xl font-semibold text-text-primary-50">
                ₦40,000.00
              </span>
            </div>
            <div className="">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm text-start"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                Amount
              </Text>
              <div className="border flex items-center gap-2 rounded-full px-2 mt-1">
                <span className="">#</span>
                <div className="w-full">
                  <InputBox
                    type="text"
                    className="border-none w-full"
                    placeholder="New password"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm text-start"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                Password
              </Text>
              <div className="border flex items-center gap-2 w-full rounded-full px-2 mt-1">
                <div className="">#</div>
                <div className="w-full">
                  <InputBox
                    type="password"
                    className="border-none w-full"
                    placeholder="New password"
                  />
                </div>
              </div>
            </div>
          </div>
          <Button
            isDisabled
            className="bg-secondary-500 w-full disabled:bg-secondary-100 disabled:cursor-not-allowed"
          >
            Save address
          </Button>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[50px] h-[50px] grid bg-white place-content-center rounded-full">
            <TiTimes />
          </div>
        </div>
      </div>

      {/* withdraw funds modal */}
      <div className="flex flex-col text-center justify-center gap-3 w-fit">
        <div className="bg-white p-9 flex flex-col gap-9 rounded-2xl w-full max-w-[500px] lg:w-[500px]">
          <div>
            <div className="flex items-center gap-2 border-b border-border-25 pb-2">
              <BsArrowLeftShort className="text-2xl" />
              <Text
                fontSize="standard"
                variant="standard"
                className="text-lg"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                Transaction details
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="grid gap-4">
              <div className="pb-3 grid place-content-center ">
                <Image
                  src="/images/success-img.png"
                  width={500}
                  height={500}
                  alt="Photo by Minh Pham"
                  className="w-[160px]"
                />
              </div>
              <span className="text-success font-semibold text-2xl">
                ₦45,000
              </span>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-lg"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Successful
              </Text>
            </div>
            <div className="grid gap-3">
              <div className="border-b border-border-25 pb-2">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-lg text-start"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  Transaction details
                </Text>
              </div>
              <div className="flex flex-col gap-2"></div>
              <div className="flex items-center justify-between">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-lg"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  Transaction ID
                </Text>
                <div className=" flex items-center gap-2">
                  <Text
                    fontSize="standard"
                    variant="standard"
                    className="text-base"
                    fontWeight="font-[600]"
                    textColor="text-text-primary-50"
                  >
                    #567255
                  </Text>
                  <Image
                    width={20}
                    height={20}
                    src="/icons/Copy.svg"
                    alt="Copy imgage"
                    className=" "
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-lg"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  Date
                </Text>
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-base"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  Mar 17, 2024
                </Text>
              </div>
              <div className="flex items-center justify-between">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-lg"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  Time
                </Text>
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-base"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  12:20pm
                </Text>
              </div>
              <div className="flex items-center justify-between">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-lg"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  Amount
                </Text>
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-base"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  ₦85,200
                </Text>
              </div>
              <div className="flex items-center justify-between">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-lg"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  Type
                </Text>
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-base"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  Refund
                </Text>
              </div>
              <div className="flex items-center justify-between">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-lg"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  Items
                </Text>
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-base"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  Debit
                </Text>
              </div>
              <div className="flex items-center justify-between">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-lg"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  Status
                </Text>
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-base"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  Pending
                </Text>
              </div>
            </div>
          </div>
          <Button className="bg-secondary-600 ">Go to order page</Button>
        </div>
      </div>

      <section className="bg-white w-[250px] rounded-xl px-3 fixed top-40 right-20 flex flex-col z-[100]">
        <div className="pb-2 pt-4 border-b">
          <MrHeading
            type="h4"
            fontWeight="font-extrabold"
            className="text-base text-primary-dark-50"
          >
            Seller info
          </MrHeading>
        </div>
        <div className="py-5 flex flex-col gap-3">
          <div className="flex items-start gap-2">
            <BiStore className="text-2xl" />
            <div className="flex flex-col">
              <Text
                fontSize="largeText"
                variant="standard"
                className="leading-[27px]"
                fontWeight="font-[600]"
                textColor="text-text-primary-100"
              >
                Store name
              </Text>
              <Link
                href="/"
                className="text-primary-400  font-medium underline"
              >
                Star Auto Parts Store
              </Link>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CiStar className="text-2xl" />
            <div className="flex flex-col">
              <Text
                fontSize="largeText"
                variant="standard"
                className="leading-[27px]"
                fontWeight="font-[600]"
                textColor="text-text-primary-100"
              >
                Store rating
              </Text>
              <div className="flex items-center gap-1">
                <Image
                  width={120}
                  height={120}
                  src="/icons/Icons.svg"
                  alt="Illustration"
                  className=" object-cen"
                />
                4.7
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <SlLocationPin className="text-2xl" />
            <div className="flex flex-col">
              <Text
                fontSize="largeText"
                variant="standard"
                className="leading-[27px]"
                fontWeight="font-[600]"
                textColor="text-text-primary-100"
              >
                Address
              </Text>
              <Text
                fontSize="largeText"
                variant="standard"
                className=""
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                31 Isiokpo street, D-line, Port Harcourt, Rivers State
              </Text>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolsBox;
