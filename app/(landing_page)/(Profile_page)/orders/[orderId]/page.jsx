"use client";
import { Button, MrHeading, Text } from "@/components/Atoms";
import Image from "next/image";
import { useParams } from "next/navigation";
import { orders } from "@/libs/constants";
import { IoIosArrowDown } from "react-icons/io";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const OrderId = () => {
  const params = useParams();
  const id = params.orderId;

  const getItemById = (id, payload) => {
    const idToSearch = typeof id === "string" ? parseInt(id, 10) : id;
    return payload.find((item) => item.id === idToSearch);
  };

  const orderIdData = getItemById(id, orders);
  console.log("Order ID Data:", orderIdData);

  return (
    <div>
      <div className="bg-white p-5 rounded-2xl">
        <Text
          fontSize="standard"
          variant="standard"
          className="text-2xl"
          fontWeight="font-[700]"
          textColor="text-text-primary-50"
        >
          orders
        </Text>
      </div>
      <section className="grid gap-14 py-10">
        <div className="">
          <MrHeading
            type="h4"
            fontWeight="font-semibold"
            className="text-2xl text-text-primary-50 pb-5"
          >
            Order Details
          </MrHeading>
          <div className="bg-white p-5 gap-3 flex flex-col rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Text
                  variant="standard"
                  className="text-sm"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  Order ID: {orderIdData?.orderId}
                </Text>
                <Image
                  width={24}
                  height={24}
                  src="/icons/Copy.svg"
                  alt="Copy imgage"
                  className=" text-secondary-900 stroke-black"
                />
              </div>

              <div className="flex items-center gap-3">
                <Text
                  variant="standard"
                  className="text-sm"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  Order status:
                </Text>
                <div className="flex items-center h-full">
                  <Text
                    variant="standard"
                    className="font-fira capitalize text-xs"
                    textColor={`${
                      orderIdData?.status === "completed"
                        ? "bg-success border border-success"
                        : "text-danger border border-danger" &&
                          orderIdData?.status === "pending"
                        ? "border bg-primary-400 border-primary-400"
                        : "text-danger border border-danger" &&
                          orderIdData?.status === "shipped"
                        ? "border bg-[#FAA627] border-[#FAA627]"
                        : "text-danger border border-danger"
                    } px-2 py-1 text-white rounded-lg`}
                  >
                    {orderIdData?.status}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                width={24}
                height={24}
                src="/icons/Copy.svg"
                alt="Copy imgage"
                className=" fill-secondary-900 stroke-black"
              />
              <Text
                variant="standard"
                className="text-sm"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Order date:{" "}
                <span className="font-semibold">{orderIdData?.orderDate}</span>
              </Text>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  width={24}
                  height={24}
                  src="/icons/Copy.svg"
                  alt="Copy imgage"
                  className=" fill-secondary-900 stroke-black"
                />
                <Text
                  variant="standard"
                  className="text-sm"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  Delivery method:{" "}
                  <span className="font-semibold">Delivery</span>
                </Text>
              </div>

              <Dialog className="p-0 bg-red-600 border-none">
                <DialogTrigger>
                  <div className="text-primary-400 gap-1 text-base flex items-center">
                    <Text
                      variant="standard"
                      className="text-sm"
                      fontWeight="font-[400]"
                      textColor="text-primary-400"
                    >
                      Track Order
                    </Text>
                    <IoIosArrowDown />
                  </div>
                </DialogTrigger>
                <DialogContent>
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
                          Your order confirmation has been sent to your
                          registered email
                        </Text>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <Button className="bg-secondary-500 w-full">
                          View order details
                        </Button>
                      </div>
                    </div>

                    <DialogFooter className="sm:justify-start">
                      <DialogClose asChild>
                        <div className="w-full flex items-center justify-center ">
                          <div className="w-[60px] h-[60px] grid bg-white place-content-center cursor-pointer rounded-full">
                            X
                          </div>
                        </div>
                      </DialogClose>
                    </DialogFooter>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <MrHeading
            type="h4"
            fontWeight="font-semibold"
            className="text-2xl text-text-primary-50"
          >
            Order Details
          </MrHeading>
          <div className="flex flex-col lg:flex-row w-full gap-5">
            <div className="bg-white p-5 gap-3 flex flex-col rounded-2xl border border-border-25 w-full">
              <div className="flex items-start flex-col gap-5">
                <div className="flex items-center gap-2">
                  <Image
                    width={24}
                    height={24}
                    src="/icons/Copy.svg"
                    alt="Copy imgage"
                    className=" fill-secondary-900 stroke-black"
                  />
                  <MrHeading
                    type="h4"
                    fontWeight="font-semibold"
                    className="text-base text-text-primary-50 font"
                  >
                    customer info
                  </MrHeading>
                </div>

                <div className="flex flex-col gap-3 px-8">
                  <div className="">
                    <MrHeading
                      type="h4"
                      fontWeight="font-semibold"
                      className="text-base text-text-primary-50 font"
                    >
                      name
                    </MrHeading>
                    <Text
                      variant="standard"
                      className="text-sm"
                      fontWeight="font-[400]"
                      textColor="text-text-primary-50"
                    >
                      Kenneth Olusola
                    </Text>
                  </div>
                  <div className="">
                    <MrHeading
                      type="h4"
                      fontWeight="font-semibold"
                      className="text-base text-text-primary-50"
                    >
                      Address
                    </MrHeading>
                    <Text
                      variant="standard"
                      className="text-sm"
                      fontWeight="font-[400]"
                      textColor="text-text-primary-50"
                    >
                      31 Isiokpo Street, D-line, <br />
                      Port Harcourt, Rivers State
                    </Text>
                  </div>
                  <div className="">
                    <MrHeading
                      type="h4"
                      fontWeight="font-semibold"
                      className="text-base text-text-primary-50"
                    >
                      Phone number
                    </MrHeading>
                    <Text
                      variant="standard"
                      className="text-sm"
                      fontWeight="font-[400]"
                      textColor="text-text-primary-50"
                    >
                      0812 345 6789
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 gap-3 flex flex-col rounded-2xl border border-border-25 w-full">
              <div className="flex items-start flex-col gap-5">
                <div className="flex items-start gap-2 w-full">
                  <Image
                    width={24}
                    height={24}
                    src="/icons/Copy.svg"
                    alt="Copy imgage"
                    className=" fill-secondary-900 stroke-black"
                  />
                  <div className="w-full">
                    <MrHeading
                      type="h4"
                      fontWeight="font-semibold"
                      className="text-base text-text-primary-50 pb-5"
                    >
                      Payment info
                    </MrHeading>
                    <div className="flex flex-col gap-3 w-full">
                      <div className="">
                        <MrHeading
                          type="h4"
                          fontWeight="font-semibold"
                          className="text-base text-text-primary-50 "
                        >
                          Method
                        </MrHeading>
                        <Text
                          variant="standard"
                          className="text-sm"
                          fontWeight="font-[400]"
                          textColor="text-text-primary-50"
                        >
                          Ngbuka wallet
                        </Text>
                      </div>
                      <div className="">
                        <MrHeading
                          type="h4"
                          fontWeight="font-semibold"
                          className="text-base text-text-primary-50"
                        >
                          Address
                        </MrHeading>
                        <div className="grid gap-[10px]">
                          <div className="flex items-center justify-between ">
                            <Text
                              variant="standard"
                              className="text-sm"
                              fontWeight="font-[400]"
                              textColor="text-text-primary-50"
                            >
                              Subtotal:
                            </Text>
                            <div className="font-normal text-text-primary-100">
                              ₦45,000
                            </div>
                          </div>
                          <div className="flex items-center justify-between ">
                            <Text
                              variant="standard"
                              className="text-sm"
                              fontWeight="font-[400]"
                              textColor="text-text-primary-50"
                            >
                              Discount:
                            </Text>
                            <div className="font-normal text-text-primary-100">
                              ---
                            </div>
                          </div>
                          <div className="flex items-center justify-between border-b pb-1">
                            <Text
                              variant="standard"
                              className="text-sm"
                              fontWeight="font-[400]"
                              textColor="text-text-primary-50"
                            >
                              Delivery:
                            </Text>
                            <div className="font-normal text-text-primary-100">
                              ₦5,000
                            </div>
                          </div>
                          <div className="flex items-center justify-between ">
                            <Text
                              variant="standard"
                              className="text-sm"
                              fontWeight="font-[400]"
                              textColor="text-text-primary-50"
                            >
                              Total:
                            </Text>
                            <div className="font-normal text-text-primary-100">
                              ₦50,000
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-white p-5 rounded-2xl">
            <div className="flex items-center gap-5">
              <div className="relative lg:h-[144px] lg:w-[220px]">
                <Image
                  src={orderIdData?.imgSrc}
                  width={400}
                  height={140}
                  alt="Photo by Minh Pham"
                  className="h-full w-full rounded-[19px]"
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
                    {orderIdData?.shop}
                  </Text>
                  <div className="flex items-center gap-2 justify-between">
                    <Text
                      variant="standard"
                      className="text-lg leading-[27px]"
                      fontWeight="font-[400]"
                      textColor="text-text-primary-50"
                    >
                      {orderIdData?.itemName}
                    </Text>
                    <MrHeading
                      type="h4"
                      fontFamily="font-fira"
                      className="text-2xl text-text-primary-50 font-[600]"
                    >
                      {orderIdData?.price}
                    </MrHeading>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <Text
                    fontSize="standard"
                    variant="standard"
                    className="leading-[22px]"
                    fontWeight="font-[600]"
                    textColor="text-text-primary-50"
                  >
                    Type: {orderIdData?.type}
                  </Text>
                  <Text
                    variant="standard"
                    className="leading-[22px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    Qty: {orderIdData?.qty}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderId;
