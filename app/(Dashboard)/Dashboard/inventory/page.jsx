"use client"
import { OverviewData } from "@/libs/constants";

import TabContent1 from "./tabContent";
import TabContent2 from "./tabContent1";
import Image from "next/image"
import TabContent3 from "./tabContent2";
// import TabContent4 from "./tabContent3";

import Tabs from "@/components/ui/orderTabs";
import DashboardOverview from "@/components/Dashboard/DashboardOverview";



export default function inventory() {

    const tabContents = [
        { label: 'All items', component: <TabContent1 /> },
        { label: 'Running Out', component: <TabContent2 /> },
        { label: 'Out-of-stock', component: <TabContent3 /> },
    ];

    return (
        <>
            <section className="w-full flex flex-col gap-8">
                <div className="bg-white rounded-lg flex px-4 w-full py-4 text-xl font-semibold">
                    Inventory
                </div>

                <DashboardOverview/>

                <section className="flex w-full ">

                    <Tabs tabContents={tabContents} />

                </section>


            </section>
        </>
    )
}