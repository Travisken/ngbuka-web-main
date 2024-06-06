import { OverviewData } from "@/libs/constants";

import TabContent1 from "./tabContent";
import TabContent2 from "./tabContent1";
import Image from "next/image"
import TabContent3 from "./tabContent2";
import TabContent4 from "./tabContent3";

import Tabs from "@/components/ui/orderTabs";



export default function Orders() {

  const tabContents = [
    { label: 'All orders', component: <TabContent1 /> },
    { label: 'Pending', component: <TabContent2 /> },
    { label: 'Shipped', component: <TabContent3 /> },
    { label: 'Completed', component: <TabContent4 /> },


    // Add other tab content components as needed...
  ];

  return (
    <>
      <section className="w-full flex flex-col gap-8">
        <div className="bg-white rounded-lg flex px-4 w-full py-4 text-xl font-semibold">
          Orders
        </div>

        <section className=" flex flex-col gap-4 w-full">

          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">
              Overview
            </p>

            {/* <p className="flex">Last Month
      <Image height={10} width={10} src="/icons/angle-down.svg"></Image>
    </p> */}

            {/* <div className="flex w-[14rem]">

    <Dropdown {...dropdownProps} />
  </div> */}
          </div>

          <div className="flex gap-8 w-full md:overflow-visible overflow-scroll">
          {OverviewData.map((item) => (
              <div key={item.id} className="bg-white flex flex-col gap-4 rounded-lg min-w-[12rem] flex-1 p-4">

                <p className="mx-auto capitalize font-medium">{item.title}</p>


                <div className="flex items-center justify-center gap-2">
                  <Image height={40} width={40} src={item.icon} alt="item"></Image>
                  <p className="text-xl font-semibold">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </section>

        <section className="flex w-full ">

          <Tabs tabContents={tabContents} />

        </section>


      </section>
    </>
  )
}