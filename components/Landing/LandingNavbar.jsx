"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { Avatar, Logout, MrHeading, Text } from "../Atoms";
import { useRouter } from "next/navigation";
import useAuthUser from "@/libs/useAuthUser";
import { useDebounce } from "use-debounce";
import { useRef } from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoHelpCircleOutline } from "react-icons/io5";

const links = [
  { name: "Earn money", link: "#earn", img: "/images/dollar.png" },
  { name: "About Us", link: "#about", img: "/images/information-line.png" },
  { name: "Cart", link: "/cart", img: "/images/customer-service.png", icon: <PiShoppingCartLight /> },
  { name: "Help", link: "#help", img: "/images/hand-heart-line.png", icon: <IoHelpCircleOutline /> },
];

const LandingNavbar = () => {
  const [open, setOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [text, setText] = useState('');
  const [user, setUser] = useAuthUser(true);
  const [query] = useDebounce(text, 500);


// hide Help link base on unauth user
  function getLinks(userPresent) {
    if (userPresent) {
      return links;
    } else {
      return links.filter(link => link.name !== "Help");
    }
  }

  const userPresent = true; // or false
const result = getLinks(userPresent);

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

  const initialRender = useRef();

  const router = useRouter();

  useEffect(() => {
    if(initialRender.current) {
      initialRender.current = false
      return
    }
    // router.push(`/search?&limit=10&page=1&searchQuery=${query}`);
  }, [query, router]);

    
  
  return (
    <>
      <div className=" w-full fixed top-0 left-0 z-30">
        <div
          className={`${
            scrollNav &&
            "fixed flex items-center justify-between bg-white lg:bg-white/100 opacity-100 z-30 top-0 right-0 left-0 shadow-md"
          } flex items-center justify-between bg-white py-4 lg:px-20 px-7 relative`}
        >
          {/* logo section */}
          <div className="font-bold text-2xl cursor-pointer flex items-center gap-1 ">
            <Link className="flex-none " href="/">
              <Image
                src="/images/ngbuka_logo.png"
                width={110}
                height={37}
                alt="Logo"
              />
            </Link>
          </div>
          <form
            className="relative py-2 h-[50px] bg-transparent lg:flex-1 hidden sm:flex flex-initial  md:basis-[400px] cursor-pointer border border-[#ccccd8] rounded-lg lg:ml-3"
            // onClick={() => router.push("/search")}
          >
            <input
              className="w-full h-full px-2 pl-11 outline-none bg-transparent"
              type="search"
              name="q"
              placeholder="Search"
              onChange={(e) => setText(e.target.value)}
            />

            <button
              type="submit"
              className="absolute top-1 left-2 translate-y-2/4 text-gray-400 text-xl"
              onClick={() => router.push("/search")}
            >
              <LuSearch />
            </button>
          </form>
          {/* Menu icon */}
          <div className="flex items-center gap-5">
            <div
              onClick={() => router.push("/search")}
              className="cursor-pointer md:hidden"
            >
              {" "}
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
          <ul
            className={`lg:flex lg:items-center lg:pb-0 pb-12 bg-white lg:bg-transparent absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 px-7 lg:px-0  lg:rounded-none transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            } ${scrollNav && "shadow-lg lg:shadow-none"} `}
          >
            {result.map((link, index) => (
              <li
                className="lg:ml-8 lg:my-0 my-7 font-semibold bg-[#F1F5FA] py-2 px-4 lg:py-0 lg:px-0 lg:bg-transparent flex gap-[14px] rounded-3xl"
                key={index}
              >
                <div className=" flex items-center lg:hidden">
                  <Image
                    src={link.img}
                    width={16}
                    height={16}
                    alt={link.name}
                  />
                </div>
                <div className="flex items-center gap-2">
                <span className="text-xl">{link?.icon}</span>
                <Link
                  href={link.link}
                  className="text-text-primary-100 text-lg font-normal"
                  onClick={(e) => scrollToSection(e, link.link)}
                >
                  {link.name}
                </Link>
                </div>
              </li>
            ))}
            <div className=" flex items-center justify-center">
              <button
                className="btn text-secondary-25 lg:ml-8 font-semibold  rounded-2xl duration-500 flex lg:hidden bg-[#D47604] py-2 px-7 self-center"
                onClick={() => setUser(true)}
              >
                Get the app
              </button>
            </div>
          </ul>

          {user ? (
              <>
              <div className=" lg:hidden bg-slate-500">
              <Avatar
                  size="large"
                  className="mr-2"
                  imgSrc="/images/avatar.png"
                  firstLetter="U"
                />
              </div>
            <div className="hidden lg:flex items-center justify-start gap-4 py-2 px-4 ">
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
                    className="!text-[14px] text-primary-dark leading-[18px]  font-lato font-[500]"
                  >
                    Wendy
                  </MrHeading>
                </div>
                <span
                  className={`flex items-center ml-2 transform duration-300 h-4 ${
                    showLogout ? "rotate-180" : "rotate-0"
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
                    handleLogOut={() => {}}
                    toggleClick={toggleClick}
                    setAuthUser={setUser}
                    // basePath={basePath}
                  />
                )}
              </div>
            </div>
              </>
          ) : (
            <button onClick={() => router.push('/signin')} className="btn text-secondary-25 lg:ml-8 font-semibold rounded-2xl duration-500 hidden lg:flex px-12 py-4 bg-[#D47604]">
               Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default LandingNavbar;
