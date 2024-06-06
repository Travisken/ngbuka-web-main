import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox, MrHeading, Text } from "../Atoms";
import Image from "next/image";
import { MdKeyboardArrowDown, MdLocationPin } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import WalletCard from "./WalletCard";

const CheckoutTab = () => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);

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
  return (
    <div>
      <Tabs
        defaultValue="delivery"
        className="w-full pt-10 data-[state=active]:bg-transparent"
      >
        <TabsList className="flex w-full items-center justify-between border-b pb-1 lg:w  rounded-none">
          <TabsTrigger value="delivery" className='w-fit px-12'>Delivery</TabsTrigger>
          <TabsTrigger value="payment" className='w-fit px-12'>Payment</TabsTrigger>
          <TabsTrigger value="confirmation" className='w-fit px-12'>Confirmation</TabsTrigger>
        </TabsList>
        <TabsContent value="delivery" className="w-full pt-4">
          <div className="">
            <MrHeading
              type="h5"
              fontWeight=" font-[600]"
              className=" text-text-primary-100 pb-2"
            >
              Delivery options
            </MrHeading>
            <div className="lg:flex flex flex-col lg:flex-row gap-5 items-center border-b border-border-25 pb-3 ">
              <div className="py-2">
                <div className="bg-white p-5 rounded-2xl flex flex-col gap-3">
                  <div className="flex gap-3 items-center">
                    <div className="bg-secondary-25 rounded-full grid place-content-center w-10 h-10">
                      <Image
                        width={24}
                        height={24}
                        src="/icons/Truck-r.svg"
                        alt="Truck img"
                        className="object-cover object-center"
                      />
                    </div>
                    <MrHeading
                      type="h5"
                      fontWeight=" font-[600]"
                      className=" text-text-primary-100"
                    >
                      Delivery
                    </MrHeading>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <Text
                      variant="standard"
                      className="text-base"
                      fontWeight="font-[400]"
                      textColor="text-text-primary-50"
                    >
                      Have your order shipped to your location in state or
                      Out-of-state
                    </Text>
                    <Text
                      variant="standard"
                      className="text-base"
                      fontWeight="font-[400]"
                      textColor="text-text-primary-50"
                    >
                      Delivery: <b>At your convenience</b>
                    </Text>
                  </div>
                  <div
                    className={`bg-secondary-25 transition duration-700 rounded-lg hidden py-2 px-3 ${
                      open && "block"
                    }`}
                  >
                    <Text
                      variant="standard"
                      className="text-lg"
                      fontWeight="font-[400]"
                      textColor="text-text-primary-50"
                    >
                      Time of delivery varies on location. Same state deliveries
                      typically take about 24 - 48 hours.
                    </Text>
                  </div>
                </div>
                <div
                  onClick={() => setOpen(!open)}
                  className="flex items-center justify-center w-full pt-5"
                >
                  <input
                    type="radio"
                    className="w-5 h-5"
                    name="delivery"
                    id="delivery"
                  />
                </div>
              </div>

              <div className="py-2">
                <div className="bg-white p-5 rounded-2xl flex flex-col gap-3">
                  <div className="flex gap-3 items-center">
                    <div className="bg-secondary-25 rounded-full grid place-content-center w-10 h-10">
                      <Image
                        width={24}
                        height={24}
                        src="/icons/PersonSimpleWalk-r.svg"
                        alt="self pick up img"
                        className="object-cover object-center"
                      />
                    </div>
                    <MrHeading
                      type="h5"
                      fontWeight=" font-[600]"
                      className=" text-text-primary-100"
                    >
                      Self pick-up
                    </MrHeading>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <Text
                      variant="standard"
                      className="text-base"
                      fontWeight="font-[400]"
                      textColor="text-text-primary-50"
                    >
                      Pick-up your order in person from the store you purchased
                      it from
                    </Text>
                    <Text
                      variant="standard"
                      className="text-base"
                      fontWeight="font-[400]"
                      textColor="text-text-primary-50"
                    >
                      Delivery:<b>2 - 5 working days</b>
                    </Text>
                  </div>

                  <div
                    className={`bg-secondary-25 transition duration-700 rounded-lg hidden py-2 px-3 ${
                      open && "block"
                    }`}
                  >
                    <Text
                      variant="standard"
                      className="text-lg"
                      fontWeight="font-[400]"
                      textColor="text-text-primary-50"
                    >
                      Note that your safety can not be guaranteed by Ngbuka, as
                      this transaction is between the customer and a third party
                    </Text>
                  </div>
                </div>
                <div
                  onClick={() => setOpen(!open)}
                  className="flex items-center justify-center w-full pt-5"
                >
                  <input
                    type="radio"
                    className="w-5 h-5"
                    name="delivery"
                    id="delivery"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <MrHeading
              type="h4"
              fontWeight=" font-[600]"
              className=" text-text-primary-100 pb-2"
            >
              Store info
            </MrHeading>

            <div className="p-5 bg-white w-full rounded-2xl">
              <div className="flex items-center justify-between">
                <Text
                  variant="standard"
                  className="text-"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-400"
                >
                  Star Auto Parts Store
                </Text>

                <div className="bg-secondary-25 rounded-full grid place-content-center w-10 h-10">
                  <Image
                    width={24}
                    height={24}
                    src="/icons/ArrowSquareOut-r.svg"
                    alt="Arrow Square Out img"
                    className="w-fit"
                  />
                </div>
              </div>
              <div className="flex gap-3 pb-2">
              <Image
                  width={24}
                  height={24}
                  src="/icons/MapPin-r.svg"
                  alt="outline map pin img"
                  className="w-fit h-fit"
                />
                <Text
                  variant="standard"
                  className="text-"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-400"
                >
                  31 Isiokpo street <br /> D-line, Port Harcourt <br /> Rivers
                  State
                </Text>
              </div>
              <div className="flex gap-2 pt-2">
                <Image
                  width={24}
                  height={24}
                  src="/icons/Phone-r.svg"
                  alt="phone img"
                  className="object-cover object-center"
                />
                <Text
                  variant="standard"
                  className="text-"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-400"
                >
                  0802 403 1100; 0817 345 6789
                </Text>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="payment" className="w-full pt-4 mb-40">
          <MrHeading
            type="h5"
            fontWeight=" font-[600]"
            className=" text-text-primary-100 pb-2"
          >
            Payment options
          </MrHeading>
          <div className="flex flex-col-reverse lg:flex-row items-center w-full gap-3">
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center"
            >
              <input
                type="radio"
                className="w-5 h-5"
                name="delivery"
                id="delivery"
              />
            </div>
            <WalletCard />
          </div>
        </TabsContent>
        <TabsContent value="confirmation" className="w-full pt-4">
          <div className="flex flex-col gap-16">
            <div className="">
              <MrHeading
                type="h5"
                fontWeight=" font-[600]"
                className=" text-text-primary-100 pb-2"
              >
                Your order
              </MrHeading>
              <div className="bg-white p-5 rounded-2xl flex items-center gap-3 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-5 w-full">
                  <div className="relative lg:h-[144px] lg:w-[220px]">
                    <Image
                      src="/images/Motor oil image.png"
                      width={350}
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
            <div className="">
              <MrHeading
                type="h5"
                fontWeight=" font-[600]"
                className=" text-text-primary-100 tex-2xl pb-2"
              >
                Delivery options
              </MrHeading>
              <div className="p-5 bg-white w-full rounded-2xl">
                <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">             
                <div className="bg-secondary-25 rounded-full grid place-content-center w-10 h-10">
                    <Image
                      width={24}
                      height={24}
                      src="/icons/Truck-r.svg"
                      alt="Truck img"
                      className="object-cover object-center"
                    />
                  </div>
                  <Text
                    variant="standard"
                    className="text-lg"
                    fontWeight="font-[600]"
                    textColor="text-text-primary-400"
                  >
                    Self pick-up
                  </Text>
                </div>
                <Text
                    variant="standard"
                    className="text-lg"
                    fontWeight="font-[400]"
                    textColor="text-primary-400"
                  >
                   change method
                  </Text>
                </div>
                <Text
                    variant="standard"
                    className="text-lg pb-2"
                    fontWeight="font-[600]"
                    textColor="text-text-primary-400"
                  >
                    Star Auto Parts Store
                  </Text>
                <div className="flex gap-3 pb-2">
                <IoLocationOutline />
                  <Text
                    variant="standard"
                    className="text-"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-400"
                  >
                    31 Isiokpo street <br /> D-line, Port Harcourt <br /> Rivers
                    State
                  </Text>
                </div>
                <div className="flex gap-2 pt-2">
                  <Image
                    width={24}
                    height={24}
                    src="/icons/Truck-r.svg"
                    alt="Truck img"
                    className="object-cover object-center"
                  />
                  <Text
                    variant="standard"
                    className="text-"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-400"
                  >
                    0802 403 1100; 0817 345 6789
                  </Text>
                </div>
              </div>
            </div>
            <div className="">
              <MrHeading
                type="h5"
                fontWeight=" font-[600]"
                className=" text-text-primary-100 pb-2"
              >
                Payment options
              </MrHeading>
              <WalletCard />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CheckoutTab;
