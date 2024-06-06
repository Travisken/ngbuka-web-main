"use client";

import { Button, MrHeading, Text } from "@/components/Atoms";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import DeliveryOptions from "@/components/Molecules/DeliveryOptions";
import { SlLocationPin } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import { BiStore } from "react-icons/bi";
import Items from "@/components/Molecules/Items";
import { Reviews } from "@/libs/constants";
import { useCartContext } from "@/context/CartContext";

const ProductId = () => {
  const { addToCart } = useCartContext();

  const product = [
    {
      id: "edd5ca10-7392-4ad1-879-258609538686",
      quantity: 2,
      isOrdered: false,
      productDetails: {
        id: "661175e3-bd6e-4c9c-acb1-2b9a2fd2ed35",
        name: "Car engine",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/ngbuka-app.appspot.com/o/uploads%2F2024-05-13%2017%3A06%3A46.766643.png?alt=media&token=4f86cf56-4ccb-45b8-91a8-a06658f9f8e7",
        description: "v4,v6. engine",
        finalPrice: 27600,
      },
    },
    // {
    //   id: "edd5ca10-7392-4ad1-879-258607538686",
    //   quantity: 1,
    //   isOrdered: false,
    //   productDetails: {
    //     id: "661175e3-bd6e-4c9c-acb1-2b9a2ed2ed35",
    //     name: " 5 litresTechno super oil; Super HD 40; SAE 40",
    //     imageUrl: "/images/Motor oil image.png",
    //     description: "v4,v6. engine",
    //     finalPrice: 45000,
    //   },
    // },
  ];

  const router = useRouter();
  // const { id } = router.params;
  const filteredReviews = Reviews.slice(0, 3);
  return (
    <div className="mt-12 px-24 pb-12">
      <div className="flex gap-5">
        <div className="flex flex-col gap-5">
          <div className="relative lg:h-[318px] lg:w-[426px]">
            <Image
              src="/images/Motor oil image.png"
              width={400}
              height={140}
              alt="Photo by Minh Pham"
              className=" inset-0 h-full w-full rounded-lg object-cover object-center transition duration-300 group-hover:scale-110"
            />
          </div>

          <div className="flex items-center gap-5">
            <div className="w-[80px] h-auto border border-secondary-400 rounded-lg">
              <Image
                src="/images/Motor oil image.png"
                width={400}
                height={140}
                alt="Photo by Minh Pham"
                className=" inset-0 h-full w-full rounded-lg object-cover object-center transition duration-300 group-hover:scale-110"
              />
            </div>
            <div className="w-[80px] h-auto border rounded-lg">
              <Image
                src="/images/Motor oil image.png"
                width={400}
                height={140}
                alt="Photo by Minh Pham"
                className=" inset-0 h-full w-full rounded-lg object-cover object-center transition duration-300 group-hover:scale-110"
              />
            </div>
            <div className="w-[80px] h-auto border rounded-lg">
              <Image
                src="/images/Motor oil image.png"
                width={400}
                height={140}
                alt="Photo by Minh Pham"
                className=" inset-0 h-full w-full rounded-lg object-cover object-center transition duration-300 group-hover:scale-110"
              />
            </div>
            <div className="w-[80px] h-auto border rounded-lg">
              <Image
                src="/images/Motor oil image.png"
                width={400}
                height={140}
                alt="Photo by Minh Pham"
                className=" inset-0 h-full w-full rounded-lg object-cover object-center transition duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
        <section className="flex flex-col justify-between w-auto max-w-[456px]">
          <div className="flex flex-col justify-between gap-2">
            <Link href="/" className="underline text-xs">
              Category: Oils & Lubricants
            </Link>

            <MrHeading
              type="h4"
              fontWeight="font-extrabold"
              className=" text-6xl text-primary-dark-50 leading-[70px]"
            >
              ₦45,000
            </MrHeading>

            <Text
              fontSize="largeText"
              variant="largeText"
              className="leading-[38px] text-lg"
              fontWeight="font-[600]"
              textColor="text-text-primary-50"
            >
              5 litresTechno super oil; Super HD 40; SAE 40
            </Text>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Image
                  width={120}
                  height={120}
                  src="/icons/Icons.svg"
                  alt="Illustration"
                  className=" object-center"
                />
                4.5
              </div>
              <span className="w-px h-[50%] bg-[#CCCCD8]"></span>
              <Link href="/" className="underline text-xs text-primary-100">
                6 reviews
              </Link>
              <span className="w-px h-[50%] bg-[#CCCCD8]"></span>

              <Text
                fontSize="standard"
                variant="standard"
                className="leading-[27px]"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                15 in stock
              </Text>
            </div>
            <div className="grid gap-2">
              <Text
                variant="standard"
                className="leading-[28px] text-xl"
                fontWeight="font-[600]"
                textColor="text-text-primary-100"
              >
                Type
              </Text>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  role="type"
                  className="rounded-xl border active:text-rose-400 border-[#CCCCD8] text-white bg-secondary-400 px-7 py-1 cursor-pointer"
                >
                  TW-20
                </button>
                <button
                  type="button"
                  role="type"
                  className="rounded-xl border border-[#CCCCD8] active:bg-secondary-400 px-7 py-1 cursor-pointer"
                >
                  TW-30
                </button>
                <button
                  type="button"
                  role="type"
                  className="rounded-xl border border-[#CCCCD8] active:bg-secondary-400 px-7 py-1 cursor-pointer"
                >
                  TW-40
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Button className="w-full">Shop now</Button>
          </div>
        </section>
        <div className="flex flex-col justify-between">
          <DeliveryOptions />
          <Button
            variant="secondary"
            onClick={() => addToCart(product)}
            className="w-full"
          >
            Add to cart
          </Button>
        </div>
      </div>
      <Tabs defaultValue="Description" className="w-full mt-16 border-b pb-5">
        <TabsList className="w-full border-b mb-4 pb-12 flex gap-8 items-start justify-start">
          <TabsTrigger value="Description" className="text-xl">
            Description
          </TabsTrigger>
          <TabsTrigger value="Specification" className="text-xl">
            Specification
          </TabsTrigger>
          <TabsTrigger value="Reviews" className="text-xl">
            Reviews
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Description" className="flex gap-5">
          <div className="bg-white h-fit px-10 py-5 rounded-2xl">
            <Text
              fontSize="standard"
              variant="standard"
              className="leading-[27px] text-lg"
              fontWeight="font-[500]"
              textColor="text-text-primary-50"
            >
              Techno Oil’s range of lubricants is of high quality, with advanced
              protection and specially blended for cars driven on Nigerian
              roads. They are blended for all modern petrol and diesel engines,
              including turbo charged ones. They have exceptional anti-wear and
              anticorrosion properties with very high detergency and dispersion,
              hence increased capacity to limit oil thickening due to sort. The
              lubricants are certified by the American Petroleum Institute and
              the International Standards Organisation (ISO).
            </Text>

            <Text
              fontSize="standard"
              variant="standard"
              className="leading-[27px] text-lg"
              fontWeight="font-[600]"
              textColor="text-text-primary-50"
            >
              This is a high quality premium multi-grade engine oil for high
              performance gasoline engine, turbo-charged and naturally aspirated
              diesel engine, suitable for use in modern gasoline and diesel
              engines where API SJ or API CG-4 performance standard and OEMs
              warranty specifications are required. Recommended drain interval
              after 10,000km.
            </Text>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-3 w-full">
              <section className="bg-white w-full max-w-[300px] lg:w-[230px] rounded-xl px-3 flex flex-col">
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
          </div>
        </TabsContent>
        <TabsContent value="Specification" className="flex gap-5">
          <div className="flex items-center gap-5">
            <div className="bg-white p-5 rounded-2xl lg:w-[400px] max-w-[500px]">
              <div className="flex item-center border-y">
                <div className="flex items-center w-40 bg-primary-25  px-5 py-[10px]">
                  <MrHeading
                    type="h5"
                    fontWeight=" font-[400]"
                    className=" text-text-primary-100"
                  >
                    Brand
                  </MrHeading>
                </div>
                <div className="bg-white px-5 py-[10px]">
                  <Text
                    variant="standard"
                    className="leading-[22.4px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    Tecno
                  </Text>
                </div>
              </div>
              <div className="flex item-center w-full border-y">
                <div className="flex items-center w-40 bg-primary-25  px-5 py-[10px]">
                  <MrHeading
                    type="h5"
                    fontWeight=" font-[400]"
                    className=" text-text-primary-100"
                  >
                    Type
                  </MrHeading>
                </div>
                <div className="bg-white px-5 py-[10px] w-full flex-1">
                  <Text
                    variant="standard"
                    className="leading-[22.4px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    SW-20; SW - 30; SW-40
                  </Text>
                </div>
              </div>
              <div className="flex item-center w-full border-y">
                <div className="flex items-center w-40 bg-primary-25  px-5 py-[10px]">
                  <MrHeading
                    type="h5"
                    fontWeight=" font-[400]"
                    className=" text-text-primary-100"
                  >
                    Volume
                  </MrHeading>
                </div>
                <div className="bg-white px-5 py-[10px] w-full flex-1">
                  <Text
                    variant="standard"
                    className="leading-[22.4px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    5 litres
                  </Text>
                </div>
              </div>
              <div className="flex item-center w-full border-y">
                <div className="flex items-center w-40 bg-primary-25  px-5 py-[10px]">
                  <MrHeading
                    type="h5"
                    fontWeight=" font-[400]"
                    className=" text-text-primary-100"
                  >
                    Weight
                  </MrHeading>
                </div>
                <div className="bg-white px-5 py-[10px] w-full flex-1">
                  <Text
                    variant="standard"
                    className="leading-[22.4px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    7kg
                  </Text>
                </div>
              </div>
              <div className="flex item-center w-full border-y">
                <div className="flex items-center w-40 bg-primary-25  px-5 py-[10px]">
                  <MrHeading
                    type="h5"
                    fontWeight=" font-[400]"
                    className=" text-text-primary-100"
                  >
                    Colour
                  </MrHeading>
                </div>
                <div className="bg-white px-5 py-[10px] w-full flex-1">
                  <Text
                    variant="standard"
                    className="leading-[22.4px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    ---
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl lg:w-[400px] max-w-[500px]">
              <div className="flex item-center w-full border-y">
                <div className="flex items-center w-32 bg-primary-25  px-5 py-[10px]">
                  <MrHeading
                    type="h5"
                    fontWeight=" font-[400]"
                    className=" text-text-primary-100"
                  >
                    SKU
                  </MrHeading>
                </div>
                <div className="bg-white px-5 py-[10px] w-full flex-1">
                  <Text
                    variant="standard"
                    className="leading-[22.4px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    TY463927E-87634
                  </Text>
                </div>
              </div>
              <div className="flex item-center w-full border-y">
                <div className="flex items-center w-32 bg-primary-25  px-5 py-[10px]">
                  <MrHeading
                    type="h5"
                    fontWeight=" font-[400]"
                    className=" text-text-primary-100"
                  >
                    COM
                  </MrHeading>
                </div>
                <div className="bg-white px-5 py-[10px] w-full flex-1">
                  <Text
                    variant="standard"
                    className="leading-[22.4px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    China
                  </Text>
                </div>
              </div>
              <div className="flex item-center w-full border-y">
                <div className="flex items-center w-32 bg-primary-25  px-5 py-[10px]">
                  <MrHeading
                    type="h5"
                    fontWeight=" font-[400]"
                    className=" text-text-primary-100"
                  >
                    Nafdac Number
                  </MrHeading>
                </div>
                <div className="bg-white px-5 py-[10px] w-full flex-1">
                  <Text
                    variant="standard"
                    className="leading-[22.4px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    ------
                  </Text>
                </div>
              </div>
              <div className="flex item-center w-full border-y">
                <div className="flex items-center w-32 bg-primary-25  px-5 py-[10px]">
                  <MrHeading
                    type="h5"
                    fontWeight=" font-[400]"
                    className=" text-text-primary-100"
                  >
                    Location
                  </MrHeading>
                </div>
                <div className="bg-white px-5 py-[10px] w-full flex-1">
                  <Text
                    variant="standard"
                    className="leading-[22.4px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    Rivers State
                  </Text>
                </div>
              </div>
              <div className="flex item-center w-full border-y">
                <div className="flex items-center w-32 bg-primary-25  px-5 py-[10px]">
                  <MrHeading
                    type="h5"
                    fontWeight=" font-[400]"
                    className=" text-text-primary-100"
                  >
                    Condition
                  </MrHeading>
                </div>
                <div className="bg-white px-5 py-[10px] w-full flex-1">
                  <Text
                    variant="standard"
                    className="leading-[22.4px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    New
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <section className="bg-white w-full max-w-[300px] lg:w-[230px] rounded-xl px-3 flex flex-col">
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
        </TabsContent>
        <TabsContent value="Reviews" className="flex gap-5">
          <div className="flex items-start w-full pb-24 gap-5 ">
            <aside className="max-w-[300px] grid gap-5 bg-white p-5 rounded-lg w-full">
              {filteredReviews.length > 0 && (
                <>
                  {" "}
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
                          {" "}
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
                  </div>{" "}
                </>
              )}

              {/* empty state */}
              {filteredReviews.length === 0 && (
                <div className="">
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
                      0
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
                        No reviews yet
                      </Text>
                    </div>
                  </div>
                  <MrHeading
                    type="h4"
                    fontWeight="font-extrabold"
                    className="text-base text-primary-dark-50 py-5 border-b pb-2"
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
                          <div className="h-2 w-[0%] bg-secondary-400 rounded-xl"></div>
                        </div>
                        0
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
                          <div className="h-2 w-[0%] bg-secondary-400 rounded-xl"></div>
                        </div>
                        0
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
                        {" "}
                        Chance of recommendation
                      </Text>
                      <div className="flex items-center gap-2">
                        {/* progress bar */}
                        <div className="h-2 w-full bg-secondary-25 rounded-xl">
                          <div className="h-2 w-[0%] bg-secondary-400 rounded-xl"></div>
                        </div>
                        0
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </aside>
            <div className=" bg-white p-5 rounded-lg w-full">
              <div className="flex items-center justify-between border-b pb-2">
                <MrHeading
                  type="h4"
                  fontWeight="font-extrabold"
                  className="text-base text-primary-dark-50"
                >
                  Reviews
                </MrHeading>

                <Link
                  href="/allreviews"
                  className="text-lg text-secondary-400 font-semibold"
                >
                  All reviews
                </Link>
              </div>
              {filteredReviews.map((filteredReview) => (
                <div className="mb-5 border-b pb-2" key={filteredReview.id}>
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
                          {filteredReview.title}
                        </Text>
                        <div className="flex items-center gap-2">
                          <Image
                            width={120}
                            height={120}
                            src={filteredReview.icon}
                            alt="Illustration"
                            className=" object-cen"
                          />
                          <span className="text-xs text-text-primary-50">
                            {filteredReview.rate}
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
                        {filteredReview.date}
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
                        {filteredReview.type}
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
                        {filteredReview.reviewText}
                      </Text>
                    </div>
                  </div>
                </div>
              ))}

              {filteredReviews.length === 0 && (
                <div className="flex flex-col items-center justify-center gap-5 py-16 px-10">
                  <div className=" w-40 h-40 rounded-full grid place-content-center bg-secondary-25">
                    <Image
                      width={120}
                      height={120}
                      src="/icons/notification-bell.svg"
                      alt="Illustration"
                      className=" object-center"
                    />
                  </div>
                  <Text
                    fontSize="largeText"
                    variant="largeText"
                    className="leading-[27px] text-lg text-center"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    There are no reviews for this product. Complete <br />
                    checkout to be able to leave a review
                  </Text>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <section className="bg-white w-full max-w-[300px] rounded-xl px-3 flex flex-col">
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
        </TabsContent>
      </Tabs>

      <div className="flex gap-20 flex-col py-16">
        <Items text="People who bought this also bought" />
        <Items text="More spare parts from this vendor" url="/" />
        <Items text="Related products" />
      </div>
    </div>
  );
};

export default ProductId;
