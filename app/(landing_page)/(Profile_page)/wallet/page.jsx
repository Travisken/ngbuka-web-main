"use client";
import Link from "next/link";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { CiMap } from "react-icons/ci";
import { FaRegMap } from "react-icons/fa";
import { BiStore } from "react-icons/bi";
import { Button, MrHeading, Text } from "@/components/Atoms";
import { LuTimer } from "react-icons/lu";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { depositHistory } from "@/libs/constants";
import { DataTable } from "@/components/Molecules/data-table";
import { columns } from "./Columns";
import { PiDownloadSimple, PiUploadSimple } from "react-icons/pi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { data } from "@/libs/action";
import { apiWithAuth, apiWithOutAuth } from "@/services/httpServices";
import { useSession } from "next-auth/react";

const Overview = [
  {
    id: 1,
    Header: "All deposits",
    nums: "₦580,000",
    icons: "/icons/deposits_Icon.svg",
  },
  {
    id: 2,
    Header: "Spent on orders",
    nums: "₦85,200",
    icons: "/icons/Orders_Icon.svg",
  },
  {
    id: 3,
    Header: "Spent on bookings",
    nums: "₦35,200",
    icons: "/icons/Booking_Icon.svg",
  },
  {
    id: 4,
    Header: "All withdrawals",
    nums: "₦5,200",
    icons: "/icons/Withdrawals_Icon.svg",
  },
];

export const payments = [
  // {
  //   id: 1,
  //   amount: "₦40,000",
  //   date: "15 Jun 2023",
  //   type: "Order",
  //   status: "pending",
  // },
  // {
  //   id: 2,
  //   amount: "₦100,000",
  //   date: "15 Jun 2023",
  //   type: "Booking",
  //   status: "successful",
  // },
  // {
  //   id: 3,
  //   amount: "₦65,000",
  //   date: "15 Jun 2023",
  //   type: "Order",
  //   status: "successful",
  // },
  // {
  //   id: 4,
  //   amount: "₦3,000",
  //   date: "15 Jun 2023",
  //   type: "Deposit",
  //   status: "successful",
  // },
  // {
  //   id: "728ed52f",
  //   amount: "₦23,000",
  //   date: "15 Jun 2023",
  //   type: "Order",
  //   status: "pending",
  // },
  // {
  //   id: "489e1d42",
  //   amount: "₦4,000",
  //   date: "15 Jun 2023",
  //   type: "Withdrawal",
  //   status: "refunded",
  // },
];

const Wallet = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [data, setData] = useState({});
  const [transData, setTransData] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(13);

  useEffect(() => {
    async function GetWalletData() {
      try {
        const res = await apiWithAuth.get(`/wallet`);
        const data = res.data;
        setData(data.entity?.wallet);
      } catch (error) {
        console.log(error);
      }
    }

    async function GetTransactions() {
      try {
        const res = await apiWithAuth.get(`/transactions/?page=1&limit=13`);
    const data = res.data;
    setTransData(data.entity);

        if (!res.ok) {
          console.log("Failed to fetch data");
          // throw new Error("Failed to fetch data")
          // You might want to throw an error here or handle it accordingly
        }
      } catch (error) {
        console.log(error);
      }
    }

    GetWalletData();
    GetTransactions();
  }, []);

  const { data: session, status, update } = useSession();

  return (
    <section className="grid gap-5">
      <div className="bg-white p-5 rounded-2xl">
        <Text
          fontSize="standard"
          variant="standard"
          className="text-2xl"
          fontWeight="font-[700]"
          textColor="text-text-primary-50"
        >
          {session ? "all session data" : "Wallet"}
        </Text>
      </div>
      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <Text
            fontSize="standard"
            variant="standard"
            className="text-2xl"
            fontWeight="font-[600]"
            textColor="text-text-primary-50"
          >
            Overview
          </Text>
          <Select defaultValue="Today">
            <SelectTrigger className="w-[auto] border-none px-1 py-0 h-auto">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent
              align="end"
              className="w-[180px] bg-white rounded-lg mt-8 pr-2"
            >
              <SelectGroup>
                <SelectItem value="Today">Today</SelectItem>
                <SelectItem value="This month">This month</SelectItem>
                <SelectItem value="Last month">Last month</SelectItem>
                <SelectItem value="This quarter">This quarter</SelectItem>
                <SelectItem value="Last quarter">Last quarter</SelectItem>
                <SelectItem value="This year">This year</SelectItem>
                <SelectItem value="All Time">All Time</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-items-center">
          <div className="flex gap-4 lg:flex-row flex-col items-center">
            {Overview.map((view) => (
              <section key={view.id}>
                <div className="bg-white py-5 px-4 flex flex-col gap-3 rounded-2xl lg:w-[200px]">
                  <Text
                    fontSize="standard"
                    variant="standard"
                    className="text-sm text-center"
                    fontWeight="font-[600]"
                    textColor="text-text-primary-50"
                  >
                    {view.Header}
                  </Text>
                  <div className="flex gap-3 items-center">
                    <Image
                      width={40}
                      height={40}
                      src={view.icons}
                      alt="overview icon"
                      className=" w-fit"
                    />
                    <Text
                      fontSize="standard"
                      variant="standard"
                      className="text-2xl"
                      fontWeight="font-[600]"
                      textColor="text-text-primary-50"
                    >
                      {Overview.length === 0 ? "₦0" : view.nums}
                    </Text>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between gap-3">
        <div>
          <div className="flex items-center justify-between py-3">
            <Text
              fontSize="standard"
              variant="standard"
              className="text-base"
              fontWeight="font-[600]"
              textColor="text-text-primary-100"
            >
              Transaction history
            </Text>
            <Link
              href="wallet/all-transactions?Tab=all"
              className={`text-secondary-600 text-sm ${transData?.count === 0 && 'hidden'}`}
            >
              See all
            </Link>
          </div>
          {transData?.count === 0 ? (
            <>
              <div className="flex flex-col gap-6 items-center justify-center w-full min-h-[60vh] bg-white rounded-xl">
                <Image
                  height={120}
                  width={120}
                  src="/images/Illustration.png"
                  className="rounded-full"
                  alt=""
                ></Image>

                <p className="md:max-w-[56%] text-center text-sm">
                  You have no transaction history. Deposit funds into your
                  wallet, shop spare parts or book a mechanic to see your
                  history
                </p>
                <div className="flex w-full gap-4 items-center justify-center px-10">
                  <button className="flex items-center flex-1 w-fit py-2 border-2 rounded-3xl border-secondary-500 text-secondary-500 justify-center gap-2">
                    Add product
                    <Image
                      height={20}
                      width={20}
                      src="/images/Button icons.svg"
                      alt=""
                    ></Image>
                  </button>
                  <button className="flex items-center flex-1 py-2 rounded-3xl w-fit bg-secondary-500 justify-center text-white gap-2">
                    Make a withdrawal
                    <Image
                      height={20}
                      width={20}
                      src="/icons/solar_download-bold.svg"
                      alt=""
                    ></Image>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white p-5 rounded-2xl">
              <DataTable data={payments} columns={columns} />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-10">
          <div className="bg-white p-5 grid gap-5 rounded-2xl">
            <div className="relative mb-5">
              <Image
                width={100}
                height={100}
                alt="wallet bg-image"
                className="rounded-xl w-full relative z-10"
                src="/images/Rectangle.png"
              />
              <div className="w-[80%] h-10 rounded-2xl bg-text-primary-25 absolute bottom-1 left-2/4 -translate-x-2/4 translate-y-4"></div>
              <div className=" absolute top-2/4 -translate-y-2/4 w-full flex flex-col items-center gap-3 z-20">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-sm"
                  fontWeight="font-[400]"
                  textColor="text-white"
                >
                  Total balance
                </Text>
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-3xl"
                  fontWeight="font-[600]"
                  textColor="text-white"
                >
                  {data.balance === 0 ? (
                    "₦.00"
                  ) : showBalance ? (
                    <span>₦{data?.balance}</span>
                  ) : (
                    "******"
                  )}
                </Text>
              </div>
              {/* show Balance */}
              <div
                className="absolute top-3 right-3 z-10 text-white"
                onClick={() => setShowBalance(!showBalance)}
              >
                {!showBalance ? <RiEyeOffLine /> : <RiEyeLine />}
              </div>
            </div>
            <Button
              variant="primary"
              className="flex items-center justify-center gap-2 text-white bg-secondary-600"
            >
              Fund wallet <PiUploadSimple className="text-2xl" />
            </Button>
            <Button
              variant="secondary"
              className="flex items-center justify-center gap-2 text-text-primary-50 border-secondary-600"
            >
              withdraw <PiDownloadSimple className="text-2xl" />
            </Button>
          </div>
          {/* Deposit history */}
          <div className="flex flex-col gap-5 w-full">
            <div className="bg-white py-5 px-5 flex flex-col gap-5 rounded-2xl lg:w-[320px] max-w-[320px]">
              <div className="flex items-center justify-between border-b pb-2">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-base"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-100"
                >
                  Deposit history
                </Text>
                <span className="text-secondary-400">see history</span>
              </div>
              <div className="grid gap-3">
                {depositHistory.length === 0 ? (
                  <>
                    <div className="flex items-center justify-center w-full h-20 bg-white rounded-xl">
                      <p className="w-full text-center text-sm">
                        You haven’t made any deposits
                      </p>
                    </div>
                  </>
                ) : (
                  depositHistory.map((history) => (
                    <div className="" key={history.id}>
                      <div className="py-2 border-b border-border-25 flex items-center justify-between">
                        <div className="" key={history.id}>
                          <Text
                            fontSize="standard"
                            variant="standard"
                            className="text-lg pb-1"
                            fontWeight="font-[600]"
                            textColor="text-text-primary-100"
                          >
                            {history.nums}
                          </Text>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <LuTimer />
                              <span className="text-xs text-text-primary-25">
                                {history.time}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <IoCalendarNumberOutline />
                              <span className="text-xs text-text-primary-25">
                                {history.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Text
                          variant="standard"
                          className="font-fira capitalize text-sm"
                          textColor={`${
                            history.status.toLowerCase() === "successful"
                              ? "bg-[#E6FFE6] border border-[#E6FFE6] text-success"
                              : "text-danger border border-danger" &&
                                history.status.toLowerCase() === "pending"
                              ? "border bg-[#FFFADF] border-[#FFFADF] text-secondary-500"
                              : "text-danger border border-danger" &&
                                history.status.toLowerCase() === "refunded"
                              ? "border bg-[#FFE7E7] border-[#FFE7E7] text-danger"
                              : "text-danger border border-danger"
                          } px-3 py-1 rounded-2xl`}
                        >
                          {history.status}
                        </Text>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wallet;
