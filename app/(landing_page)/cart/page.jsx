"use client";

import { Button, Checkbox, Text } from "@/components/Atoms";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Items from "@/components/Molecules/Items";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useCartContext } from "@/context/CartContext";

const Cart = () => {
  const router = useRouter();
  // const { id } = router.params;
  const { cart, setCart } = useCartContext();
  const [count, setCount] = useState(cart?.quantity || 1);

  // currency formatter
  function currencyFormat(num) {
    return "₦" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const itemPrice = 45000;
  const currentPrice = count * itemPrice;

  const increment = (quantity) => {
    setCount((prev) => Math.max(prev - 1, 1));
  }

  const handleCheckChange = () => {
    let num = 1;
    console.log(num++);
  };

  console.log("cart data:", cart);

  return (
    <div className="mt-12  p-5 lg:px-24 pb-12">
      <div className="flex flex-col lg:flex-row gap-5 w-full">
        <div className="w-full">
          <div className="bg-white p-5 rounded-2xl flex items-center justify-between">
            <div className="flex items-center justify-center gap-3">
              <Checkbox
                checkboxStyle="filled"
                isSelected={false}
                handleChange
                className="w-3 h-3 lg:w-6 lg:h-6"
              />
              <Text
                fontSize="standard"
                variant="standard"
                className="text-xl md:text-3xl"
                fontWeight="font-[700]"
                textColor="text-text-primary-50"
              >
                My Cart (3)
              </Text>
            </div>

            <div className="text-danger text-lg font-normal px-1">Delete</div>
          </div>
          <div className="">
            <div className="pt-7 pb-10">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-2xl mb-4"
                fontWeight="font-[600]"
                textColor="text-text-primary-50 "
              >
                In your city
              </Text>
              <section  className="grid gap-5">
                {!cart && <div>cart is empty</div>}
                {cart?.map((cartItems) => (
                  <section key={cartItems.id}>
                    <div className="bg-white p-5 rounded-2xl flex flex-col lg:flex-row items-center gap-3 w-full">
                      <Checkbox
                        checkboxStyle="filled"
                        isSelected={false}
                        handleChange={handleCheckChange()}
                        className="w-3 h-3 lg:w-6 lg:h-6"
                      />
                      <div className="flex flex-col lg:flex-row items-center gap-5 w-full">
                        <div className="relative lg:h-[144px] lg:w-[220px]">
                          <Image
                            src={cartItems.productDetails.imageUrl}
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
                              {cartItems.productDetails.name}
                            </Text>
                          </div>
                          <div className="flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center">
                              <b>SW-30</b>{" "}
                              <MdKeyboardArrowDown className="text-2xl font-extralight" />
                            </div>
                            <div className="flex gap-3 items-center">
                              <span
                                onClick={() => increment(cartItems.quantity)}
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
                              {currencyFormat(count * cartItems.productDetails.finalPrice)}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </section>
            </div>
            <div className="pt-7">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-2xl mb-4"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                Out-of-state
              </Text>
              <div className="bg-white p-5 rounded-2xl flex flex-col lg:flex-row items-center gap-3 w-full mb-5">
                <Checkbox
                  checkboxStyle="filled"
                  isSelected={false}
                  handleChange={handleCheckChange()}
                  className="w-3 h-3 lg:w-6 lg:h-6"
                />
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
              <div className="bg-white p-5 rounded-2xl flex flex-col lg:flex-row items-center gap-3 w-full mb-5">
                <Checkbox
                  checkboxStyle="filled"
                  isSelected={false}
                  handleChange={handleCheckChange()}
                  className="w-3 h-3 lg:w-6 lg:h-6"
                />
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
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full lg:max-w-[300px]">
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
              <span>{cart?.length || 0}</span>
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
              <span>{currencyFormat(count * cart?.productDetails?.finalPrice || 0)}</span>
              
            </div>
          </div>
          <Button
            onClick={() => router.push("/cart/checkout")}
            className="bg-secondary-100"
          >
            Checkout (0)
          </Button>
        </div>
      </div>

      <div className="flex gap-20 flex-col py-16">
        <Items text="You may also like" />
      </div>
    </div>
  );
};

export default Cart;
