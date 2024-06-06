"use client";
import { LuClipboardList } from "react-icons/lu";
import { PiTruck } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";
import { PiCoinsBold } from "react-icons/pi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GoCopy } from "react-icons/go";
import Link from "next/link";
import { OverviewData, orderListData } from "@/libs/constants";
import Image from "next/image"
import Tabs from "@/components/ui/orderTabs";





export default function Orders({
  searchParams,
}) {


  const items = orderListData.find((item)=> item.id == searchParams.id)


  return (
    <>
      <section className="w-full pb-10 flex flex-col gap-8">
      <div className="  text-black gap-[24px] flex flex-col h-fit w-fit">
        <span className="bg-white items-center justify-start text-[28px] font-[700] rounded-[16px] p-[20px] h-[88px] w-[928px]">
            <h1>Orders Details</h1>
        </span>
        <div className="w-[928px] text-[#585865] text-[14px] bg-[white] font-[400] rounded-[16px] p-[20px] items-start justify-center gap-[12px]">
            <span className="flex items-center justify-center w-fit h-fit gap-[8px]">
            <LuClipboardList />
                <p>Order ID: {items.orderId}</p>
                <GoCopy className="text-[#AA5F03]"/>
            </span>
            <span className="flex items-center justify-center w-fit h-fit gap-[8px]">
            <PiTruck />
                <p>Order date: {items.date}</p>
            </span>
            <span className="flex items-center justify-center w-fit h-fit gap-[8px]">
            <IoCalendarNumberOutline />
                <p>Delivery Method: {items.delivery}</p>
            </span>
        </div>
        <div className="gap-[20px] flex items-start justify-end w-[928px] h-fit">
          <button className="bg-[transparent] border-[#AA5F03] border-[1px] text-[#AA5F03] rounded-[24px] w-[200px] h-[62px] text-[16px] font-[400]">Decline Order</button>
          <Link href={{
                            pathname: '/Dashboard/orders/processorder/',
                            query: {
                                id: items.id
                            }
                        }}><button className="bg-[#AA5F03] text-white rounded-[24px] w-[200px] h-[62px] text-[16px] font-[400]">Confirm & Accept</button></Link>
        </div>
        <section className="text-[#585865] flex flex-col w-[928px] h-fit items-start justify-center">
          <h1 className="text-[24px] font-[600] ">Order Info</h1>
          <br />
          <div className="flex gap-[12px]">
            {/* card sect */}
           <div className="bg-[white] flex flex-col gap-[12px] border-[#ECECEE] border-[1px] p-[20px] w-[454px] h-[234px] rounded-[16px] ">
           <ul>
            <span className="flex text-[16px] font-[600] items-center justify-center gap-[12px] w-fit h-fit">
            <RxPerson className="w-[40px] p-[7px] h-[40px] rounded-full bg-[#FFE8CD]"/>
              <p>Customer Info</p>
            </span>
           </ul>
              <ul className="pl-[11%] flex flex-col gap-[6px] w-fit h-fit items-start justify-center">
                <li className="text-[14px] font-[600] ">Name</li>
                <li className="text-[14px] font-[400] capitalize">Kenneth Olusola</li>
              </ul>
              <ul className="pl-[11%] flex flex-col gap-[6px] w-fit h-fit items-start justify-center">
              <li className="text-[14px] font-[600] ">Address</li>
                <li className="text-[14px] font-[400] capitalize">Port Harcourt, Rivers State</li>
              </ul>
           </div>
           {/* card2 */}
           <div className="bg-[white] flex flex-col gap-[12px] border-[#ECECEE] border-[1px] p-[20px] w-[454px] h-[234px] rounded-[16px] ">
           <ul>
            <span className="flex text-[16px] font-[600] items-center justify-center gap-[12px] w-fit h-fit">
            <PiCoinsBold className="w-[40px] p-[7px] h-[40px] rounded-full bg-[#FFE8CD]"/>
              <p>Payment Info</p>
            </span>
           </ul>
              <ul className="pl-[11%] flex flex-col gap-[4px] h-[142px] ">
                <li className="text-[14px] flex w-full justify-between items-start font-[600] capitalize">order summary</li>
                <li className="text-[14px] flex w-full justify-between items-start font-[400] capitalize"><p>Subtotal:</p>
                <p>₦ {items.price}</p></li>
                <li className="text-[14px] flex w-full justify-between items-start font-[400] capitalize"><p>Discount:</p>
                <p>{items.discount < 1 ? '---' : `₦ ${items.discount}`}</p></li>
                <li className="text-[14px] flex w-full justify-between items-start font-[400] capitalize"><p>Delivery:</p>
                <p>₦ {items.deliveryfee}</p></li>
                <hr />
                <li className="text-[12px] flex w-full justify-between items-start font-[400] capitalize"><p>Total:</p>
                <p>₦ {items.price * items.quantity + items.deliveryfee - items.discount}</p></li>
              </ul>
           </div>
          </div>
           {/* card sect end */}
           {/* items sect begins */}
           <section>
            <br />
                <h1 className="capitalize font-[600] text-[20px]">items(2)</h1>
                <br />
                {/* card sect */}
                <section>
                  <div className="w-[928px] rounded-[16px] bg-[white] h-fit p-[20px] gap-[20px] flex items-center justify-between">
                    <div className="w-fit h-fit gap-[20px] flex items-center justify-center">
                    <Image src={items.img} width={200} height={144} className="rounded-[19.2px]" alt="" />
                    <ul className="flex flex-col gap-[12px]">
                      <li className="text-[14px]">Star auto-shop</li>
                      <li className="text-[16px]">{items.message}</li>
                      <li className="text-[14px] ">Type: SW-30</li>
                      <li className="text-[14px] ">Qty: {items.quantity}</li>
                    </ul>
                    </div>
                    <ul className="h-fit flex flex-col items-center gap-[80px] w-fit justify-between">
                      <h1>₦{items.price}</h1>
                      <li>No. in stock: {items.quantity}</li>
                    </ul>
                  </div>
                </section>
           </section>
        </section>
    </div>

      </section>
    </>
  )
}