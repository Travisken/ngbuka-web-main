"use client";

import Image from "next/image";
import Link from "next/link";
import { orderListData } from "@/libs/constants";
import { BestSellersList } from "@/libs/constants";
import { RunningOutList } from "@/libs/constants";
import { useState, useEffect } from "react";

export default function TabContent3() {
    const [shippedOrders, setShippedOrders] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
          const filteredOrders = orderListData.filter(item => item.state === "shipped");
          setShippedOrders(filteredOrders);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
    }

    return (
        <>
            <div className="w-[70vw] flex gap-4 flex-col">
                {shippedOrders.length === 0 ? (
                    <div className="flex flex-col gap-6 items-center justify-center w-full min-h-[60vh] bg-white rounded-xl">
                        <Image height={120} width={120} src="/images/Frame.png" className="rounded-full"></Image>
                        <p className="md:max-w-[56%] text-center">
                            You have no orders yet. Add products to your store to get started
                        </p>
                        <button className="flex items-center  py-2 px-2 border-2 rounded-full border-secondary-400 text-secondary-400 w-[9rem] gap-2" >
                            Add product
                            <Image height={20} width={20} src="/images/Button icons.svg"></Image>
                        </button>
                    </div>
                ) : (
                    shippedOrders.slice(0, 5).map(item => (
                        <div key={item.id} className="">
                            <div className="flex gap-4 p-3 min-h-[8rem] bg-white rounded-xl">
                                <Image className="rounded-xl" height={60} width={150} src={item.img}></Image>
                                <div className="flex flex-col flex-1">
                                    <div className="flex justify-between py-1 items-center w-full text-sm">
                                        <p className="flex relative">
                                            Order ID. {item.orderId}
                                        </p>
                                        <p className="flex flex-row items-center">
                                            <span>
                                                <Image height={20} width={20} src="/icons/Clock-r.png"></Image>
                                            </span>
                                            {item.time}
                                        </p>
                                        <p className="flex">
                                            <span>
                                                <Image height={20} width={20} src="/icons/CalendarBlank-r.png"></Image>
                                            </span>
                                            {item.date}
                                        </p>
                                        <p key={item.orderId} className={`w-full order-container capitalize flex flex-nowrap ${item.state}`}>
                                            {item.state}
                                        </p>
                                    </div>
                                    <div className="border-t border-b w-full flex flex-col gap-2 py-2">
                                        <p className="w-full ">
                                            {item.message}
                                        </p>
                                        <div className="flex w-full justify-between">
                                            <div className="flex gap-4">
                                                <p className="uppercase font-semibold">
                                                    sw-30
                                                </p>
                                                <p>
                                                    Qty:
                                                    <span className=" ml-1  font-semibold">
                                                        {item.quantity}
                                                    </span>
                                                </p>
                                            </div>
                                            <p className="font-semibold">
                                                {item.price}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="flex gap-2 items-center">
                                            <Image height={20} width={20} src="/icons/Truck-r.svg"></Image>
                                            Delivery {"("}{item.delivery}{")"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}