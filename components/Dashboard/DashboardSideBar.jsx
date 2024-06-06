"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { GrTrash, GrSettingsOption } from "react-icons/gr";
import useAuthUser from "@/libs/useAuthUser";
import { DashboardMenuList } from "@/libs/constants";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [user] = useAuthUser(true);
  const [isBusinessNameExist, setIsBusinessNameExist] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchUserToken = async () => {
      try {
        const storedData = localStorage.getItem("userData");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          const token = parsedData.entity?.token;
          const refreshToken = parsedData.entity?.refreshToken;
          console.log("Fetched token:", token);
          console.log("Fetched refresh token from sideBar:", refreshToken);

          return { token, refreshToken };
        }
      } catch (error) {
        console.error("Error fetching user token:", error);
      }
    };
    
    const fetchBusinessName = async () => {
      const { token } = await fetchUserToken();
    
      if (!token) return;
    
      try {
        const response = await fetch(
          "https://api-ngbuka.olotusquare.co/api/v1/dealer/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        console.log(data.entity.businessName);
        if (data.entity.businessName) {
          setIsBusinessNameExist(true);
        }
      } catch (error) {
        console.error("Error fetching business name:", error);
      }
    };
    
    fetchBusinessName();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    router.push("/Onboarding/signin");
  };

  return (
    <div className="w-[250px] rounded-xl p-2 flex flex-col z-[100] bg-white">
      <ul className="navbar">
        {DashboardMenuList?.map((item, index) => (
          <li key={item.id}>
            <Link
              className={`cursor-pointer flex items-center px-[18px] rounded-xl py-3 my-1 ${
                pathname.includes(item.url)
                  ? "hover:bg-secondary-500 bg-secondary-500 text-white font-semibold"
                  : "text-black hover:bg-secondary-25"
              } ${
                !isBusinessNameExist && index !== 1
                  ? "pointer-events-none opacity-50"
                  : ""
              }${
isBusinessNameExist && index == 1 ? "pointer-events-none opacity-50":""
              }`}
              href={isBusinessNameExist || index === 1 ? item.url : "#"}
            >
              <span className="mr-2">{item.icon}</span>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="border-t list-none">
        <li>
          <Link
            className={`cursor-pointer flex items-center px-[18px] rounded-xl py-3 my-1 ${
              pathname.includes("settings")
                ? "bg-secondary-500 text-white font-semibold"
                : "text-black"
            }`}
            href="/Dashboard/settings"
          >
            <GrSettingsOption />
            <span className="ml-2">Settings</span>
          </Link>
        </li>
        <li onClick={handleLogout} className="text-danger cursor-pointer flex items-center px-[18px] py-3 my-1">
          <GrTrash />
          <span className="ml-2">Log Out</span>
        </li>
      </div>
    </div>
  );
}
