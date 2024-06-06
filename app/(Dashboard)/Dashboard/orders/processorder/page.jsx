"use client";
import Image from "next/image"
import Link from 'next/link'
import {useState} from 'react'
import {orderListData} from '@/libs/constants'

function ProcessOrder(
    {
        searchParams,
    }
){

    const items = orderListData.find((item)=> item.id == searchParams.id)

    const [selectedOption, setSelectedOption] = useState('');
      
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    return(
        <>
            <section className="w-full pb-10 flex flex-col gap-8">
                <div className="  text-black gap-[24px] flex flex-col h-fit w-fit">
                    <span className="w-[928px] h-fit p-[20px] bg-white rounded-[16px] text-[28px] font-[700]">
                        <h1>Process Order</h1>
                    </span>
                    <section>
                        <div className="w-[928px] text-[20px] text-[#ACACB2] flex items-center justify-between h-fit border-b-[1px] border-[#D4D4D4]">
                            <button className="text-white bg-[#1A1A7A] px-[20px] py-[12px]">Order confirmation</button>
                            <button>Summary</button>
                        </div>
                        <h1 className="text-[20px] py-[20px] font-[600] ">Items Ordered (4)</h1>
                        {/* items sect */}
                        <section className="flex gap-[20px] flex-wrap h-fit items-center justify-start">
                        <div className="w-[454px] text-[#262633] rounded-[16px] bg-[white] h-fit p-[20px] gap-[20px] flex flex-col items-center justify-between">
                            <div className="w-fit h-fit gap-[20px] flex items-center justify-center">
                            <Image src={items.img} width={160} height={120} className="rounded-[19.2px]" alt="" />
                            <ul className="flex flex-col gap-[6px]">
                            <li className="text-[14px]">{items.message}</li>
                            <li className="text-[14px] flex gap-[20px] items-center justify-center w-fit h-fit font-[600]"><p>SW-30</p><p>5 litres</p></li>
                            </ul>
                            </div>
                            <ul className="h-full border-t-[1px] pt-[4px] border-[#ECECEE] flex items-center w-full justify-between">
                            <li className="text-[14px] ">Qty ordered: {items.quantity}</li>
                            <li className="flex w-fit h-fit items-center justify-center gap-[4px] font-[600] text-green-700"><p className="text-[#262633] underline">No. in stock:</p> {items.quantity}</li>
                            </ul>
                    </div>
                </section>
                {/* bottom */}
                <div className="w-[928px] h-fit p-[20px] flex items-center justify-between pt-[20px]">
                    <span className="flex text-[#585865] font-[600] items-center gap-[20px] justify-center w-fit h-fit">
                        <input 
                            type="checkbox"
                            value="option"
                            checked={selectedOption === 'option'}
                            onChange={handleOptionChange} name="" id="" 
                        />
                        <p>Confirm items are available and packed</p>
                    </span>
                    <Link href={{
                            pathname: '/Dashboard/orders/processOrderCollection/',
                            query: {
                                id: items.id
                            }
                        }}><button disabled={selectedOption ? false : true} style={{ background: selectedOption ? '#AA5F03' : '#FFC682' }} className="w-[440px] h-[62px] shadow-lg rounded-[24px] text-[18px] text-[white] text-center">Proceed</button></Link>
                </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default ProcessOrder;