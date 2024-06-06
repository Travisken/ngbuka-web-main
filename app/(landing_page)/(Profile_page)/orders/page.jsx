"use client";
import { MrHeading, Text } from "@/components/Atoms";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { orders } from "@/libs/constants";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const OrdersPage = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const searchParams = useSearchParams();

  
  useEffect(() => {
    setActiveFilter(searchParams.get("tab"));
    const filterd = orders.filter((order) => {
      if (activeFilter === order.status) {
        return `${order.itemName} ${order.status}`;
      } else if (activeFilter === "all") {
        return order;
      }
    });
    setData(filterd);
  }, [activeFilter, searchParams]);

  const pendingOrders = [];
  const shippedOrders = [];
  const completedOrders = [];

  orders.forEach((order) => {
    switch (order.status) {
      case "pending":
        pendingOrders.push(order);
        break;
      case "shipped":
        shippedOrders.push(order);
        break;
      case "completed":
        completedOrders.push(order);
        break;
      default:
        break;
    }
  });

  const pendingItemsCount = pendingOrders.length;
  const shippedItemsCount = shippedOrders.length;
  const completedItemsCount = completedOrders.length;

  useEffect(() => {
    setData(orders);
  }, []);

 
// hangle change tab
  const handleSelect = (value) => {
    const filterd = orders.filter((order) => {
      if (value === order.status) {
        return `${order.itemName} ${order.status}`;
      } else if (value === "all") {
        return order;
      }
    });

    window.history.pushState(null, " ", `?tab=${value}`);
    setData(filterd);
    console.log(value);
  };

  return (
    <div>
      {/* <Suspense fallback={'loading...'}> */}
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

      <Tabs
        defaultValue="all"
        className="w-full pt-10 data-[state=active]:bg-transparent"
        value={activeFilter}
        onValueChange={handleSelect}
      >
        <TabsList className="flex w-full items-center justify-between border-b pb-1 lg:w  rounded-none">
          <TabsTrigger value="all" className="w-fit px-12">
            All orders({data ? '9' : 0})
          </TabsTrigger>
          <TabsTrigger value="pending" className="w-fit px-12">
            Pending({data ? pendingItemsCount : 0})
          </TabsTrigger>
          <TabsTrigger value="shipped" className="w-fit px-12">
            Shipped({data ? shippedItemsCount : 0})
          </TabsTrigger>
          <TabsTrigger value="completed" className="w-fit px-12">
            Completed({data ? completedItemsCount : 0})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="w-full pt-5">
          <div className="flex flex-col gap-5">
            {!data && <p>Loading...</p>}
            {data?.length === 0 && (
              <div className=""></div>
            )}
            {data?.map((data) => (
              <div key={data.id} className="bg-white p-5 rounded-2xl">
                <div className="flex items-center gap-5">
                  <div className="relative lg:h-[144px] lg:w-[220px]">
                    <Image
                      src={data.imgSrc}
                      width={400}
                      height={140}
                      alt="Photo by Minh Pham"
                      className="h-full w-full rounded-[19px]"
                    />
                  </div>

                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-3">
                        <Text
                          variant="standard"
                          className="text-sm"
                          fontWeight="font-[400]"
                          textColor="text-text-primary-50"
                        >
                          Order ID. {data.orderId}
                        </Text>
                        <Image
                          width={24}
                          height={24}
                          src="/icons/Copy.svg"
                          alt="Copy imgage"
                          className=" fill-secondary-900 stroke-black cursor-pointer"
                          onClick={() => navigator.clipboard.writeText(data.orderId)}
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <Text
                          variant="standard"
                          className="text-sm"
                          fontWeight="font-[400]"
                          textColor="text-text-primary-50"
                        >
                          Order date: {data.orderData}
                        </Text>
                        <div className="flex items-center h-full">
                          <Text
                            variant="standard"
                            className="font-fira capitalize text-xs"
                            textColor={`${
                              data.status.toLowerCase() === "completed"
                                ? "bg-success border border-success"
                                : "text-danger border border-danger" &&
                                  data.status.toLowerCase() === "pending"
                                ? "border bg-primary-400 border-primary-400"
                                : "text-danger border border-danger" &&
                                  data.status.toLowerCase() === "shipped"
                                ? "border bg-[#FAA627] border-[#FAA627]"
                                : "text-danger border border-danger"
                            } px-2 py-1 text-white rounded-lg`}
                          >
                            {data.status}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Text
                        fontSize="standard"
                        variant="standard"
                        className="text-sm"
                        fontWeight="font-[400]"
                        textColor="text-text-primary-50"
                      >
                        {data.shop}
                      </Text>
                      <div className="flex items-center gap-2 justify-between">
                        <Text
                          variant="standard"
                          className="text-lg leading-[27px]"
                          fontWeight="font-[400]"
                          textColor="text-text-primary-50"
                        >
                          {data.itemName}
                        </Text>
                        <MrHeading
                          type="h4"
                          fontFamily="font-fira"
                          className="text-2xl text-text-primary-50 font-[600]"
                        >
                          {data.price}
                        </MrHeading>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Text
                        fontSize="standard"
                        variant="standard"
                        className="leading-[22px]"
                        fontWeight="font-[600]"
                        textColor="text-text-primary-50"
                      >
                        {data.type}
                      </Text>
                      <Text
                        variant="standard"
                        className="leading-[22px]"
                        fontWeight="font-[400]"
                        textColor="text-text-primary-50"
                      >
                        Qty: {data.qty}
                      </Text>
                      <Link
                        href={`/orders/${data.id}?orderId=${data.itemName.replace(/\s+/g, '-')}`}
                        className=" flex cursor-pointer text-primary-400 items-center font-normal gap-1"
                      >
                        <span>Order Details</span>
                        <GoArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="pending" className="w-full pt-5">
          <div className="flex flex-col gap-5">
            {!data && <p>Loading...</p>}
            {data?.map((data) => (
              <div key={data.id} className="bg-white p-5 rounded-2xl">
                <div className="flex items-center gap-5">
                  <div className="relative lg:h-[144px] lg:w-[220px]">
                    <Image
                      src={data.imgSrc}
                      width={400}
                      height={140}
                      alt="Photo by Minh Pham"
                      className="h-full w-full rounded-[19px]"
                    />
                  </div>

                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-3">
                        <Text
                          variant="standard"
                          className="text-sm"
                          fontWeight="font-[400]"
                          textColor="text-text-primary-50"
                        >
                          Order ID. {data.orderId}
                        </Text>
                        <Image
                          width={24}
                          height={24}
                          src="/icons/Copy.svg"
                          alt="Copy imgage"
                          className=" fill-secondary-900 stroke-black"
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <Text
                          variant="standard"
                          className="text-sm"
                          fontWeight="font-[400]"
                          textColor="text-text-primary-50"
                        >
                          Order date: {data.orderData}
                        </Text>
                        <div className="flex items-center h-full">
                          <Text
                            variant="standard"
                            className="font-fira capitalize text-xs"
                            textColor={`${
                              data.status.toLowerCase() === "completed"
                                ? "bg-success border border-success"
                                : "text-danger border border-danger" &&
                                  data.status.toLowerCase() === "pending"
                                ? "border bg-primary-400 border-primary-400"
                                : "text-danger border border-danger" &&
                                  data.status.toLowerCase() === "shipped"
                                ? "border bg-[#FAA627] border-[#FAA627]"
                                : "text-danger border border-danger"
                            } px-2 py-1 text-white rounded-lg`}
                          >
                            {data.status}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Text
                        fontSize="standard"
                        variant="standard"
                        className="text-sm"
                        fontWeight="font-[400]"
                        textColor="text-text-primary-50"
                      >
                        {data.shop}
                      </Text>
                      <div className="flex items-center gap-2 justify-between">
                        <Text
                          variant="standard"
                          className="text-lg leading-[27px]"
                          fontWeight="font-[400]"
                          textColor="text-text-primary-50"
                        >
                          {data.itemName}
                        </Text>
                        <MrHeading
                          type="h4"
                          fontFamily="font-fira"
                          className="text-2xl text-text-primary-50 font-[600]"
                        >
                          {data.price}
                        </MrHeading>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Text
                        fontSize="standard"
                        variant="standard"
                        className="leading-[22px]"
                        fontWeight="font-[600]"
                        textColor="text-text-primary-50"
                      >
                        {data.type}
                      </Text>
                      <Text
                        variant="standard"
                        className="leading-[22px]"
                        fontWeight="font-[400]"
                        textColor="text-text-primary-50"
                      >
                        Qty: {data.qty}
                      </Text>
                      <Link
                         href={`/orders/${data.id}?orderId=${data.itemName.replace(/\s+/g, '-')}`}
                        className=" flex cursor-pointer text-primary-400 items-center font-normal gap-1"
                      >
                        Order Details
                        <GoArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="shipped" className="w-full pt-5">
          <div className="flex flex-col gap-5">
            {!data && <p>Loading...</p>}
            {data?.map((data) => (
              <div key={data.id} className="bg-white p-5 rounded-2xl">
                <div className="flex items-center gap-5">
                  <div className="relative lg:h-[144px] lg:w-[220px]">
                    <Image
                      src={data.imgSrc}
                      width={400}
                      height={140}
                      alt="Photo by Minh Pham"
                      className="h-full w-full rounded-[19px]"
                    />
                  </div>

                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-3">
                        <Text
                          variant="standard"
                          className="text-sm"
                          fontWeight="font-[400]"
                          textColor="text-text-primary-50"
                        >
                          Order ID. {data.orderId}
                        </Text>
                        <Image
                          width={24}
                          height={24}
                          src="/icons/Copy.svg"
                          alt="Copy imgage"
                          className=" fill-secondary-900 stroke-black"
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <Text
                          variant="standard"
                          className="text-sm"
                          fontWeight="font-[400]"
                          textColor="text-text-primary-50"
                        >
                          Order date: {data.orderData}
                        </Text>
                        <div className="flex items-center h-full">
                          <Text
                            variant="standard"
                            className="font-fira capitalize text-xs"
                            textColor={`${
                              data.status.toLowerCase() === "completed"
                                ? "bg-success border border-success"
                                : "text-danger border border-danger" &&
                                  data.status.toLowerCase() === "pending"
                                ? "border bg-primary-400 border-primary-400"
                                : "text-danger border border-danger" &&
                                  data.status.toLowerCase() === "shipped"
                                ? "border bg-[#FAA627] border-[#FAA627]"
                                : "text-danger border border-danger"
                            } px-2 py-1 text-white rounded-lg`}
                          >
                            {data.status}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Text
                        fontSize="standard"
                        variant="standard"
                        className="text-sm"
                        fontWeight="font-[400]"
                        textColor="text-text-primary-50"
                      >
                        {data.shop}
                      </Text>
                      <div className="flex items-center gap-2 justify-between">
                        <Text
                          variant="standard"
                          className="text-lg leading-[27px]"
                          fontWeight="font-[400]"
                          textColor="text-text-primary-50"
                        >
                          {data.itemName}
                        </Text>
                        <MrHeading
                          type="h4"
                          fontFamily="font-fira"
                          className="text-2xl text-text-primary-50 font-[600]"
                        >
                          {data.price}
                        </MrHeading>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Text
                        fontSize="standard"
                        variant="standard"
                        className="leading-[22px]"
                        fontWeight="font-[600]"
                        textColor="text-text-primary-50"
                      >
                        {data.type}
                      </Text>
                      <Text
                        variant="standard"
                        className="leading-[22px]"
                        fontWeight="font-[400]"
                        textColor="text-text-primary-50"
                      >
                        Qty: {data.qty}
                      </Text>
                      <Link
                         href={`/orders/${data.id}?orderId=${data.itemName.replace(/\s+/g, '-')}`}
                        className=" flex cursor-pointer text-primary-400 items-center font-normal gap-1"
                      >
                        Order Details
                        <GoArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="w-full pt-5">
          <div className="flex flex-col gap-5">
            {!data && <p>Loading...</p>}
            {data?.map((data) => (
              <div key={data.id} className="bg-white p-5 rounded-2xl">
                <div className="flex items-center gap-5">
                  <div className="relative lg:h-[144px] lg:w-[220px]">
                    <Image
                      src={data.imgSrc}
                      width={400}
                      height={140}
                      alt="Photo by Minh Pham"
                      className="h-full w-full rounded-[19px]"
                    />
                  </div>

                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-3">
                        <Text
                          variant="standard"
                          className="text-sm"
                          fontWeight="font-[400]"
                          textColor="text-text-primary-50"
                        >
                          Order ID. {data.orderId}
                        </Text>
                        <Image
                          width={24}
                          height={24}
                          src="/icons/Copy.svg"
                          alt="Copy imgage"
                          className=" fill-secondary-900 stroke-black"
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <Text
                          variant="standard"
                          className="text-sm"
                          fontWeight="font-[400]"
                          textColor="text-text-primary-50"
                        >
                          Order date: {data.orderData}
                        </Text>
                        <div className="flex items-center h-full">
                          <Text
                            variant="standard"
                            className="font-fira capitalize text-xs"
                            textColor={`${
                              data.status.toLowerCase() === "completed"
                                ? "bg-success border border-success"
                                : "text-danger border border-danger" &&
                                  data.status.toLowerCase() === "pending"
                                ? "border bg-primary-400 border-primary-400"
                                : "text-danger border border-danger" &&
                                  data.status.toLowerCase() === "shipped"
                                ? "border bg-[#FAA627] border-[#FAA627]"
                                : "text-danger border border-danger"
                            } px-2 py-1 text-white rounded-lg`}
                          >
                            {data.status}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Text
                        fontSize="standard"
                        variant="standard"
                        className="text-sm"
                        fontWeight="font-[400]"
                        textColor="text-text-primary-50"
                      >
                        {data.shop}
                      </Text>
                      <div className="flex items-center gap-2 justify-between">
                        <Text
                          variant="standard"
                          className="text-lg leading-[27px]"
                          fontWeight="font-[400]"
                          textColor="text-text-primary-50"
                        >
                          {data.itemName}
                        </Text>
                        <MrHeading
                          type="h4"
                          fontFamily="font-fira"
                          className="text-2xl text-text-primary-50 font-[600]"
                        >
                          {data.price}
                        </MrHeading>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Text
                        fontSize="standard"
                        variant="standard"
                        className="leading-[22px]"
                        fontWeight="font-[600]"
                        textColor="text-text-primary-50"
                      >
                        {data.type}
                      </Text>
                      <Text
                        variant="standard"
                        className="leading-[22px]"
                        fontWeight="font-[400]"
                        textColor="text-text-primary-50"
                      >
                        Qty: {data.qty}
                      </Text>
                      <Link
                         href={`/orders/${data.id}?orderId=${data.itemName.replace(/\s+/g, '-')}`}
                        className=" flex cursor-pointer text-primary-400 items-center font-normal gap-1"
                      >
                        Order Details
                        <GoArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    {/* </Suspense> */}

    </div>
  );
};

export default OrdersPage;
