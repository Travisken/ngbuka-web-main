"use client";

import Image from "next/image";
import Link from "next/link";
import { orderListData } from "@/libs/constants";
import { BestSellersList } from "@/libs/constants";
import { RunningOutList } from "@/libs/constants";
import { useState, useEffect } from "react";

export default function TabContent2() {

    const [runningOutList, setRunningOutList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const filteredOrders = RunningOutList.filter(item => item.quantity <= 4);
            setRunningOutList(filteredOrders);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    return (

        <>
            <div className="w-[70vw] flex gap-8 mx-auto flex-wrap">



                {runningOutList.length === 0 ? (
                    <>
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
                    </>
                ) : (
                    runningOutList.map((item) => (

                        <div key={item.id} className="">

                            <div className="flex w-[12rem] text-sm flex-col gap-4 p-3 min-h-[8rem] bg-white rounded-xl">

                                <Image className="rounded-xl w-full" height={60} width={150} src={item.img}></Image>

                                <div className="flex flex-col flex-1">

                                    <div className="border-t ellipse-container w-full flex flex-col gap-2 py-2">

                                        <p className="w-full ellipse">
                                            {item.message}
                                        </p>

                                        <div className="flex w-full justify-between text-[12px]">

                                            <div className="flex gap-4">

                                                <p>
                                                    Type:

                                                    <span className="uppercase font-semibold">
                                                        sw-30
                                                    </span>

                                                </p>


                                            </div>


                                            <p>
                                                Stock ID:
                                                <span className="font-semibold">
                                                    {item.stockId}
                                                </span>

                                            </p>
                                        </div>


                                        <div className="flex w-full justify-between text-[12px]">

                                            <p className=" font-semibold">
                                                {item.price}
                                            </p>

                                            <p>
                                                <span className={`${item.quantity <= 4 ? "text-danger font-semibold" : "text-green-400 font-semibold"}`}>
                                                    {item.quantity}
                                                </span>
                                                in stock
                                            </p>
                                        </div>

                                    </div>
                                    <div>


                                        <Link href={`/Dashboard/inventory/cardDetails?id=${item.id}`} className="flex rounded-full py-2 items-center justify-center bg-secondary-500 text-white">
                                            View details
                                        </Link>
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