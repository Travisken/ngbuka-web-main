"use client";

import {Fragment} from "react";
import Image from "next/image";
import { Avatar, Text } from ".";
import {useRouter} from "next/navigation";
import { HandleLogout} from "@/libs/logout";
import { RxPerson } from "react-icons/rx";
import { PiWallet } from "react-icons/pi";
import { LiaClipboardListSolid } from "react-icons/lia";
import { LuLogOut } from "react-icons/lu";
import Link from "next/link";


const Logout = ({
    firstLetter,
    userName = "",
    handleLogOut = () => { },
    toggleClick = () => { },
    width = "min-w-[200px]",
    position = "top-[50px] right-0",
    setAuthUser
    // basePath = process.env.NEXT_PUBLIC_BASE_PATH
}) => {

 const router = useRouter();


    return (
      <Fragment>
        <div className={`absolute z-10 rounded-xl ${width} ${position}`}>
          <div
            id="modal"
            className="fixed rounded-lg inset-0 bg-transparent bg-opacity-5 transition-opacity h-full w-full"
            onClick={toggleClick}
          />
          <div className={`relative z-10  bg-white rounded-lg shadow-lg`}>
            <div
              className="flex items-center px-4 py-3 gap-2 rounded-t-md hover:bg-gray-100 cursor-pointer "
              onClick={() => router.push("/myaccount")}
            >
              <RxPerson />
              <Text className="font-medium leading-7 text-text-primary-50 truncate">
                My account
              </Text>
            </div>
            <div
              className="flex items-center px-4 py-3 gap-2 hover:bg-gray-100 cursor-pointer "
              onClick={() => router.push("/orders")}
            >
              <LiaClipboardListSolid />
              <Text className="font-medium leading-7 text-text-primary-50 truncate">
                My orders
              </Text>
            </div>
            <div
              className="flex items-center px-4 py-3 gap-2 border-b hover:bg-gray-100 cursor-pointer "
              onClick={() => router.push("/wallet")}
            >
              <PiWallet />
              <Text className="font-medium leading-7 text-text-primary-50 truncate">
                My wallet
              </Text>
            </div>
            <Link
              href="#"
              onClick={() => setUser(false)}
              className="text-danger cursor-pointer flex items-center px-[18px] hover:bg-[#FFE6E6] py-2 rounded-b-md"
            >
              <div className="w-6">
                <LuLogOut />
              </div>

              <Text
                variant="standard"
                textColor="text-danger"
                className="font-normal leading-7"
                onClick={() => {
                  HandleLogout();
                  setAuthUser(false);
                }}
              >
                Logout
              </Text>
            </Link>
          </div>
        </div>
      </Fragment>
    );

}


export default Logout;