"use client";

import { MrHeading, Text } from "@/components/Atoms";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { GrTrash } from "react-icons/gr";
import Link from "next/link";
import useAuthUser from "@/libs/useAuthUser";
import { LuLogOut } from "react-icons/lu";

const Sidebar = ({ menulist }) => {
  const [setUser] = useAuthUser(true);
  const pathname = usePathname();
  console.log("Menulist:" + menulist);
  const router = useRouter();

  return (
    <aside className="bg-white w-[250px] rounded-xl px-3 flex flex-col">
      <div className="pb-[0.68rem] pt-4 border-b">
        <MrHeading
          type="h4"
          fontWeight="font-extrabold"
          className="text-base text-primary-dark-50"
        >
          My Account
        </MrHeading>
      </div>
      <div className="">
        <ul className="navbar">
          {menulist?.map((item) => (
            // <li
            //   key={item.title}
            //   className={`py-2.5 px-2 my-2 flex flex-nowrap hover:bg-gray-200 rounded-md justify-start items-center cursor-pointer
            //     ${
            //       pathname.includes(item.url)
            //         ? "  bg-secondary-500 w-full rounded-md hover:bg-secondary-500"
            //         : " "
            //     }`}
            // >
            //   <div
            //     className={`ml-2 ${
            //       item.title === activeMenuId ? "text-white" : "text-black"
            //     }`}
            //   >
            //     {item.icon}
            //   </div>
            //   <Text
            //     variant="standard"
            //     className={`ml-2 flex-none !text-white font-fira`}
            //   >
            //     {item.title}
            //   </Text>
            // </li>
            <li key={item.id}>
              <Link
                className={`cursor-pointer flex items-center hover:bg-gray-200 rounded-md py-2.5 px-2 my-2 ${
                  pathname.includes(item.url) ?? pathname.includes("orders")
                    ? "bg-secondary-500 text-white font-semibold hover:bg-secondary-500"
                    : "text-black"
                }`}
                href={item.url}
              >
                <span className="mr-2 text-lg">{item.icon}</span>
                {item.title}
              </Link>
            </li>
          ))}
          <hr />
          <li>
            <Link
              href="#"
              onClick={() => setUser(false)}
              className="text-danger cursor-pointer flex items-center px-[18px] hover:bg-[#FFE6E6] rounded-md py-3 mb-3 my-1"
            >
              <LuLogOut />
              <Text
                variant="standard"
                textColor="text-danger"
                className={`ml-2 flex-none`}
              >
                Log Out
              </Text>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
