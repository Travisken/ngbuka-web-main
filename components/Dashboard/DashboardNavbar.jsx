"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { Avatar, Logout, MrHeading } from "../Atoms";
import { useRouter } from "next/navigation";
import useAuthUser from "@/libs/useAuthUser";

const DashboardNavbar = () => {
  const [open, setOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [user, setUser] = useAuthUser(true);
  const [notificationCount, setNotificationCount] = useState(1);
  const [firstName, setFirstName] = useState(null);
  const router = useRouter();

  const fetchUserToken = async () => {
    try {
      const storedData = localStorage.getItem('userData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        const token = parsedData.entity?.token;
        const refreshToken = parsedData.entity?.refreshToken;
        console.log("Fetched token:", token);
        console.log("Fetched refresh token:", refreshToken);

        return { token, refreshToken };
      }
    } catch (error) {
      console.error('Error fetching user token:', error);
    }
  };

  const refreshToken = async (refreshToken) => {
    try {
      const response = await fetch('https://api-ngbuka.olotusquare.co/api/v1/auth/refresh-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ refreshToken })
      });

      if (!response.ok) {
        throw new Error('Failed to refresh token');
      }

      const data = await response.json();
      const newToken = data.token;
      const newRefreshToken = data.refreshToken;

      // Update local storage with new tokens
      const storedData = JSON.parse(localStorage.getItem('userData'));
      storedData.entity.token = newToken;
      storedData.entity.refreshToken = newRefreshToken;
      localStorage.setItem('userData', JSON.stringify(storedData));

      return { token: newToken, refreshToken: newRefreshToken };
    } catch (error) {
      console.error('Error refreshing token:', error);
      return null;
    }
  };

  const fetchUserDetails = async (token, refreshToken) => {
    try {
      const response = await fetch('https://api-ngbuka.olotusquare.co/api/v1/dealer/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 401) {
        // Token might be expired, try to refresh
        const newTokens = await refreshToken(refreshToken);
        if (newTokens) {
          return await fetchUserDetails(newTokens.token, newTokens.refreshToken);
        } else {
          // Handle logout or token refresh failure
          return null;
        }
      }

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user details:', error);
      return null;
    }
  };

  useEffect(() => {
    const initialize = async () => {
      const { token, refreshToken } = await fetchUserToken();
      if (token) {
        const userDetails = await fetchUserDetails(token, refreshToken);
        if (userDetails && userDetails.entity && userDetails.entity.firstname) {
          setFirstName(userDetails.entity.firstname);
        }
      }
    };
    initialize();
  }, []);

  const toggleClick = (e) => {
    e.stopPropagation();
    if (e.target.id === "modal") {
      setShowLogout(false);
    }
  };

  // Function to handle smooth scrolling
  const scrollToSection = (e, link) => {
    e.preventDefault();
    const targetId = link.substring(1); // Remove the '#' from the link
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 62;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth", // Add smooth scrolling behavior
      });
    }

    // Close the mobile menu if it's open
    setOpen(false);
  };

  const triggerNavScroll = () => {
    if (window.scrollY > 75) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", triggerNavScroll);
    return () => {
      window.removeEventListener("scroll", triggerNavScroll);
    };
  }, [scrollNav]);

  return (
    <>
      <div className="w-full fixed backdrop-blur-md top-0 left-0 z-30">
        <div
          className={`${scrollNav &&
            "fixed flex items-center justify-between bg-white lg:bg-white/90 opacity-100 z-30 top-0 right-0 left-0 shadow-md"
            } flex items-center justify-between bg-white py-4 lg:px-20 px-7 relative`}
        >
          {/* logo section */}
          <div className="font-bold text-2xl cursor-pointer flex items-center gap-1 ">
            <Link className="flex-none" href="/">
              <Image
                src="/images/ngbuka_logo.png"
                width={110}
                height={37}
                alt="Logo"
              />
            </Link>
          </div>
          <form
            className="relative py-2 h-[50px] bg-transparent lg:max-w-38 hidden sm:flex flex-initial  md:basis-[400px] cursor-pointer border border-[#ccccd8] rounded-lg lg:ml-3"
            onClick={() => router.push("/search")}
          >
            <input
              className="w-full h-full px-2 pl-11 outline-none bg-transparent"
              type="search"
              name="q"
              placeholder="Search"
              onClick={() => router.push("/search")}
            />

            <button
              type="submit"
              className="absolute top-1 left-2 translate-y-2/4 text-gray-400 text-xl"
            >
              <LuSearch />
            </button>
          </form>
          {/* Menu icon */}
          <div className="flex items-center gap-5">
            <div
              onClick={() => router.push("/search")}
              className="cursor-pointer lg:hidden"
            >
              <LuSearch className="cursor-pointer text-2xl" />
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer lg:hidden w-9 h-9"
            >
              {open ? (
                <Image
                  src="/images/close.png"
                  width={75}
                  height={75}
                  alt="Hamburger Bar"
                />
              ) : (
                <Image
                  src="/images/hamburger.png"
                  width={75}
                  height={75}
                  alt="Hamburger Bar"
                />
              )}
            </div>
          </div>
          {/* Links items */}

          {user ? (
            <div className="hidden lg:flex items-center justify-center gap-4 py-2 px-4">
              <div className="relative mt-2 inline-block">
                <span className="inline-block w-5 h-5 border-[#585865] rounded-[3px] border-2 text-center"></span>

                {notificationCount > 0 && (
                  <div className="absolute top-[-4px] right-[-4px] border-white border-2 h-3 w-3 bg-red-500 rounded-full" />
                )}
              </div>

              <div
                className="relative flex items-center gap-2 cursor-pointer ml-auto"
                onClick={() => setShowLogout(true)}
              >
                <Avatar
                  size="large"
                  className="mr-2"
                  imgSrc="/images/avatar.png"
                  firstLetter="U"
                />
                <div className="flex">
                  <MrHeading
                    type="h5"
                    fontFamily="font-fira"
                    className="!text-[14px] text-primary-dark leading-[18px] font-lato font-[500]"
                  >
                    Hi,
                  </MrHeading>
                  <MrHeading
                    type="h5"
                    fontFamily="font-fira"
                    className="!text-[14px] text-primary-dark leading-[18px] capitalize font-lato font-[500]"
                  >
                    {firstName}
                  </MrHeading>
                </div>
                <span
                  className={`flex items-center ml-2 transform duration-300 h-4 ${showLogout ? "rotate-180" : "rotate-0"
                    }`}
                >
                  <Image
                    src="/icons/angle-down.svg"
                    width={14}
                    height={14}
                    alt="arrow down"
                  />
                </span>
                {showLogout && (
                  <Logout
                    userName="Wendy"
                    firstLetter="U"
                    handleLogOut={() => { }}
                    toggleClick={toggleClick}
                    setAuthUser={setUser}
                  // basePath={basePath}
                  />
                )}
              </div>
            </div>
          ) : (
            <button className="btn text-secondary-25 lg:ml-8 font-semibold rounded-2xl duration-500 hidden lg:flex px-12 py-4 bg-[#D47604]">
              Get the app
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
