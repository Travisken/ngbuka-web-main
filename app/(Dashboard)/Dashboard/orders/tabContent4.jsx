import Image from "next/image";
import Link from "next/link";
import { orderListData } from "@/libs/constants";
import { BestSellersList } from "@/libs/constants";
import { RunningOutList } from "@/libs/constants";

export default function TabContent5() {
    return (

        <>
            
            <div className="w-[70vw] flex gap-4 flex-col">

                

                {orderListData.length === 0 ? (
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
                    orderListData.slice(0, 5).map((item) => (
                        <div key={item.id} className="">

                            <div className="flex gap-4 p-3 min-h-[8rem] bg-white rounded-xl">

                                <Image className="rounded-xl" height={60} width={150} src={item.img}></Image>

                                <div className="flex flex-col flex-1">
                                    <div className="flex justify-between py-1 items-center w-full text-sm">
                                        <p className="flex relative">
                                            Order ID. {item.orderId}
                                            {/* <span onClick={() => copyToClipboard(item.orderId, item.id)}>
                                                <Image height={20} width={20} src="/icons/Copy.png"></Image>
                                            </span>

                                            {typeof copiedOrderId === 'string' ? (
                                                <span style={{ marginLeft: '5px', color: 'green', position: 'absolute', top: '-2rem', left: '10rem' }}>Copied!{item.id}</span>

                                            ) : null} */}

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

                                        <p className="text-[#2BAF29] uppercase flex flex-nowrap">
                                            new
                                            <span>
                                                <Image height={20} width={20} src="/icons/Sparkle-r.png"></Image>
                                            </span>
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