"use client";

import { Text } from "@/components/Atoms";
import { DataTable } from "@/components/Molecules/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import { TransColumns } from "../Columns";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";

export const transactions = [
  {
    id: 1,
    amount: "₦40,000",
    time: "12:20pm",
    date: "15 Jun 2023",
    type: "Order",
    status: "pending",
  },
  {
    id: 2,
    amount: "₦100,000",
    time: "12:20pm",
    date: "15 Jun 2023",
    type: "Booking",
    status: "successful",
  },
  {
    id: 3,
    amount: "₦65,000",
    time: "12:20pm",
    date: "16 Jun 2023",
    type: "Order",
    status: "successful",
  },
  {
    id: 4,
    amount: "₦3,000",
    time: "12:20pm",
    date: "14 Jun 2023",
    type: "Deposit",
    status: "successful",
  },
  {
    id: "728ed52f",
    amount: "₦23,000",
    time: "12:20pm",
    date: "17 Jun 2023",
    type: "Order",
    status: "pending",
  },
  {
    id: "489e1d42",
    amount: "₦4,000",
    time: "12:20pm",
    date: "18 Jun 2023",
    type: "Withdrawal",
    status: "refunded",
  },
];

const AllTransactions = () => {
  // const confirmWithPassword = searchParams.enterpassword;
  const [transInfos, setTransInfos] = useState(transactions);
  const [activeFilter, setActiveFilter] = useState("all");
  const [sort, setSort] = useState("Newest");
  const [filters, setFilters] = useState("all");
  const searchParams = useSearchParams();

  useEffect(() => {
     const tab = searchParams.get("tab") || "all";
     setActiveFilter(tab);
  }, [searchParams]);

  // console.log(activeFilter, 'active')

  useEffect(() => {
    // const filteredTransInfos = transactions.filter((TransInfo) => {
    //   if (activeFilter === "all" && filters === "all") {
    //     return true; // Include all transactions
    //   } else if (activeFilter === "all") {
    //     return TransInfo.status.toLowerCase() === filters.toLowerCase(); // Filter by filters status
    //   } else if (filters === "all") {
    //     return TransInfo.type.toLowerCase() === activeFilter.toLowerCase(); // Filter by activeFilter status
    //   } else {
    //     // Filter by both activeFilter and filters status
    //     return (
    //       TransInfo.type.toLowerCase() === activeFilter.toLowerCase() ||
    //       TransInfo.status.toLowerCase() === filters.toLowerCase()
    //     );
    //   }
    // });

   

     let filteredTransInfos = transactions.filter((transInfo) => {
       const matchesActiveFilter =
         activeFilter === "all" ||
         transInfo.type.toLowerCase() === activeFilter.toLowerCase();
       const matchesFilters =
         filters === "all" ||
         transInfo.status.toLowerCase() === filters.toLowerCase();
       return matchesActiveFilter && matchesFilters;
     });
const sortedTransInfos = [...filteredTransInfos];
     switch (sort) {
       case "Highest":
         sortedTransInfos.sort(
           (a, b) => parseAmount(b.amount) - parseAmount(a.amount)
         );
         break;
       case "Lowest":
         sortedTransInfos.sort(
           (a, b) => parseAmount(a.amount) - parseAmount(b.amount)
         );
         break;
       case "Newest":
         sortedTransInfos.sort((a, b) => new Date(b.date) - new Date(a.date));
         break;
       case "Oldest":
         sortedTransInfos.sort((a, b) => new Date(a.date) - new Date(b.date));
         break;
       default:
         break;
     }
       console.log("Sorted transactions:", sortedTransInfos);
      setTransInfos(sortedTransInfos);
  }, [activeFilter, filters, sort,]);

   const parseAmount = (amount) => {
     return parseInt(amount.replace(/[^0-9.-]+/g, ""), 10);
   };

  const handleFilter = (value) => {
      setFilters(value);
  };

  const handleSortChange = (value) => {
    console.log(value);
    setSort(value);
  };

  const handleSelectedTab = (value) => {
    // const filterd = transInfos.filter((TransInfo) => {
    //   if (value.toLowerCase() === TransInfo.type.toLowerCase()) {
    //     return `${TransInfo.type} ${TransInfo.status}`;
    //   } else if (value === "all") {
    //     return transInfos;
    //   }
    //   console.log(TransInfo, 'type');
    // });
    // setTransInfos(filterd);
    setActiveFilter(value);
    window.history.pushState(null, " ", `?tab=${value}`);
  };

  return (
    <section>
      <div className="bg-white p-5 rounded-2xl flex items-center justify-between mb-5">
        <Text
          fontSize="standard"
          variant="standard"
          className="text-2xl"
          fontWeight="font-[700]"
          textColor="text-text-primary-50"
        >
          Transaction history
        </Text>

        <div className="flex items-center gap-2">
          <div className={`border rounded-full px-5 py-2 flex items-center`}>
            <span className="text-sm font-normal">Sort by:</span>
            <div className="font-semibold">
              <Select
                defaultValue="Newest"
                value={sort}
                onValueChange={handleSortChange}
              >
                <SelectTrigger className="w-[auto] border-none px-1 py-0 h-auto">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent
                  align="end"
                  className="w-[180px] bg-white rounded-lg mt-8"
                >
                  <SelectGroup className="cursor-pointer">
                    <SelectItem value="Newest">Newest first</SelectItem>
                    <SelectItem value="Oldest">Oldest first</SelectItem>
                    <SelectItem value="Lowest">Least amount</SelectItem>
                    <SelectItem value="Highest">Highest amount</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className={`border rounded-full px-5 py-2 flex items-center`}>
            <span className="text-sm font-normal">Filter by:</span>
            <div className="font-semibold">
              <Select
                defaultValue="all"
                value={filters}
                onValueChange={handleFilter}
              >
                <SelectTrigger className="w-[auto] border-none px-1 py-0 h-auto">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent
                  align="end"
                  className="w-[180px] bg-white rounded-lg mt-8"
                >
                  <SelectGroup>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="Successful">Successful</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Refunded">Refunded</SelectItem>
                    <SelectItem value="Failed">Failed</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Tabs
          defaultValue="all"
          className="w-full pt-10 data-[state=active]:bg-transparent"
          value={activeFilter}
          onValueChange={handleSelectedTab}
        >
          <TabsList className="flex w-full items-center justify-between border-b pb-1 lg:w  rounded-none">
            <TabsTrigger value="all" className="w-fit px-12">
              All transitions({"data" ? "9" : 0})
            </TabsTrigger>
            <TabsTrigger value="order" className="w-fit px-12">
              Orders({"data" ? "8" : 0})
            </TabsTrigger>
            <TabsTrigger value="booking" className="w-fit px-12">
              Booking({"data" ? "3" : 0})
            </TabsTrigger>
            <TabsTrigger value="deposit" className="w-fit px-12">
              Deposit({"data" ? "7" : 0})
            </TabsTrigger>
            <TabsTrigger value="withdrawal" className="w-fit px-12">
              Withdrawals({"data" ? "7" : 0})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="w-full pt-5">
            <div className="pb-3">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-2xl"
                fontWeight="font-[600]"
                textColor="text-text-primary-100"
              >
                Transaction history
              </Text>
            </div>
            <div className="bg-white p-5 rounded-2xl">
              <DataTable data={transInfos} columns={TransColumns} />
            </div>
          </TabsContent>
          <TabsContent value="order" className="w-full pt-5">
            <div className="pb-3">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-2xl"
                fontWeight="font-[600]"
                textColor="text-text-primary-100"
              >
                Transaction history
              </Text>
            </div>
            <div className="bg-white p-5 rounded-2xl">
              <DataTable data={transInfos} columns={TransColumns} />
            </div>
          </TabsContent>
          <TabsContent value="booking" className="w-full pt-5">
            <div className="pb-3">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-2xl"
                fontWeight="font-[600]"
                textColor="text-text-primary-100"
              >
                Transaction history
              </Text>
            </div>
            <div className="bg-white p-5 rounded-2xl">
              <DataTable data={transInfos} columns={TransColumns} />
            </div>
          </TabsContent>
          <TabsContent value="deposit" className="w-full pt-5">
            <div className="pb-3">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-2xl"
                fontWeight="font-[600]"
                textColor="text-text-primary-100"
              >
                Transaction history
              </Text>
            </div>
            <div className="bg-white p-5 rounded-2xl">
              <DataTable data={transInfos} columns={TransColumns} />
            </div>
          </TabsContent>
          <TabsContent value="withdrawal" className="w-full pt-5">
            <div className="pb-3">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-2xl"
                fontWeight="font-[600]"
                textColor="text-text-primary-100"
              >
                Transaction history
              </Text>
            </div>
            <div className="bg-white p-5 rounded-2xl">
              <DataTable data={transInfos} columns={TransColumns} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AllTransactions;
