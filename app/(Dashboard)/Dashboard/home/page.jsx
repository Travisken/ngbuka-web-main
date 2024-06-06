"use client";

import { Button, InputBox, MrHeading, Text } from "@/components/Atoms";
import Image from "next/image";
import Link from "next/link";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { GoArrowRight, GoPerson, GoMail } from "react-icons/go";
import { useRouter } from "next/navigation";
import { Dropdown } from "@/components/Atoms";
import Modal from "react-modal";
import SectionsNav2 from "@/components/ui/formTabs";
import "../../../../styles/globals.css";
import axios from 'axios';
import StoreSetup from "../../Onboarding/storeSetup/page"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { OverviewData } from "@/libs/constants";
import { BestSellersList } from "@/libs/constants";
import { RunningOutList } from "@/libs/constants";
import Tab1 from "@/components/Dashboard/tab1_form";

export const StepperContext = createContext();

const Home = ({ orderId, onNext, onPrev }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [businessData, setBusinessData] = useState({});
  const [accessToken, setAccessToken] = useState(null);
  const [orderListData, setOrderListData] = useState([]);
  const [copiedOrderId, setCopiedOrderId] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const fetchUserToken = async () => {
    try {
      const storedData = localStorage.getItem('userData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        const token = parsedData.entity?.token;
        console.log("Fetched token:", token);
        return token;
      }
    } catch (error) {
      console.error('Error fetching user token:', error);
    }
  };

  const fetchUserDetails = async (token) => {
    try {
      const response = await fetch('https://api-ngbuka.olotusquare.co/api/v1/dealer/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
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
      const token = await fetchUserToken();
      if (token) {
        const userDetails = await fetchUserDetails(token);
        if (userDetails && userDetails.entity && userDetails.entity.firstname) {
          setFirstName(userDetails.entity.firstname);
        }
        setToken(token);
      }
    };
    initialize();
  }, []);

  useEffect(() => {
    if (token) {
      const apiUrl = 'https://api-ngbuka.olotusquare.co/api/v1/dealer/orders?page=1&limit=10';
      fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setOrderListData(data.entity.rows);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  }, [token]);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedOrderId(id);
      setTimeout(() => setCopiedOrderId(null), 2000);
    });
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" }
  ];

  const dropdownProps = {
    options: options,
    name: "myDropdown",
    isDisabled: false,
    isClearable: true,
    defaultValue: null,
    className: "my-dropdown",
    isError: false,
    errorMessage: "",
    dbName: "myDropdownValue",
    register: null,
    setValue: () => { },
    outerClass: "",
    value: null,
    isMulti: false,
    label: "",
    id: "myDropdownId",
    onChange: (selectedValue) => {
      console.log("Selected value:", selectedValue);
    }
  };

  // const [isModalOpen, setIsModalOpen] = useState(true);
  // const [businessData, setBusinessData] = useState({});
  // const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const storedData = localStorage.getItem('userData');
              if (storedData) {
                  const parsedData = JSON.parse(storedData);
                  setAccessToken(parsedData.entity.token);

                  const res = await axios.get('https://api-ngbuka.olotusquare.co/api/v1/dealer/store-profile', {
                      headers: {
                          'Authorization': `Bearer ${token}`
                      }
                  });
                  setBusinessData(res.data);
              }
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

  const handleSubmit = async (formData) => {
      try {
          const res = await axios.put('https://api-ngbuka.olotusquare.co/api/v1/dealer/store-profile', formData, {
              headers: {
                  'Authorization': `Bearer ${accessToken}`
              }
          });
          console.log('Success:', res.data);
      } catch (error) {
          console.error('Error:', error);
      }
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);
  };

  return (
    <>
      <section className="w-full flex flex-col gap-8">
      {/* <div>
            {isModalOpen && <StoreSetup data={businessData} onSubmit={handleSubmit} onClose={handleCloseModal} />}
        </div> */}

        <div className="bg-white rounded-lg flex px-4 w-full py-4 text-xl font-semibold">
          Homepage
        </div>

        <section className="flex flex-col gap-4 w-full">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Overview</p>
            <div className="flex w-[14rem]">
              <Dropdown {...dropdownProps} />
            </div>
          </div>

          <div className="flex gap-8 w-full md:overflow-visible overflow-scroll">
            {OverviewData.map((item) => (
              <div key={item.id} className="bg-white flex flex-col gap-4 rounded-lg min-w-[12rem] flex-1 p-4">
                <p className="mx-auto capitalize font-medium">{item.title}</p>
                <div className="flex items-center justify-center gap-2">
                  <Image height={40} width={40} src={item.icon} alt="#"></Image>
                  <p className="text-xl font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4 w-full mt-4">
          <section className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="md:w-[80%] flex gap-4 flex-col">
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">Your orders</p>
                <Link className="text-secondary-400 font-medium text-xl" href={"/Dashboard/orders"}>
                  See all
                </Link>
              </div>

              <div>
                {orderListData.length === 0 ? (
                  <div className="flex flex-col gap-6 items-center justify-center w-full min-h-[60vh] bg-white rounded-xl">
                    <Image alt="" height={120} width={120} src="/images/Frame.png" className="rounded-full" />
                    <p className="md:max-w-[56%] text-center">
                      You have no orders yet. Add products to your store to get started
                    </p>
                    <button onClick={openModal} className="flex items-center py-2 px-2 border-2 rounded-full border-secondary-400 text-secondary-400 w-[9rem] gap-2">
                      Add product
                      <Image height={20} width={20} src="/images/Button icons.svg" alt="add product" />
                    </button>
                  </div>
                ) : (
                  orderListData.map((item) => (
                    <div key={item.id} className="flex gap-4 p-3 min-h-[8rem] bg-white rounded-xl">
                      <Image className="rounded-xl" height={60} width={150} src={item.img} alt="item" />
                      <div className="flex flex-col flex-1">
                        <div className="flex justify-between py-1 items-center w-full text-sm">
                          <p onClick={() => copyToClipboard(item.orderId, item.id)} className="flex relative cursor-pointer">
                            Order ID. {item.orderId}
                            <Image height={20} width={20} src="/icons/Copy.png" alt="copy" />
                            {copiedOrderId === item.id && (
                              <span style={{ marginLeft: '5px', color: 'green', position: 'absolute', top: '-2rem', left: '10rem' }}>
                                Copied!
                              </span>
                            )}
                          </p>
                          <p className="text-[#2BAF29] uppercase flex flex-nowrap">
                            new
                            <Image height={20} width={20} src="/icons/Sparkle-r.png" alt="new" />
                          </p>
                        </div>
                        <div className="border-t border-b w-full flex flex-col gap-2 py-2">
                          <p className="ellipse">{item.message}</p>
                          <div className="flex w-full justify-between">
                            <div className="flex gap-4">
                              <p className="uppercase font-semibold">sw-30</p>
                              <p>
                                Qty: <span className="ml-1 font-semibold">{item.quantity}</span>
                              </p>
                            </div>
                            <p className="font-semibold">{item.price}</p>
                          </div>
                        </div>
                        <div>
                          <p className="flex gap-2 items-center">
                            <Image height={20} width={20} src="/icons/Truck-r.svg" alt="delivery" />
                            Delivery ({item.delivery})
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="w-[26vw] scrollbar gap-4 flex flex-col">
              <div className="bg-white flex flex-col gap-4 rounded-lg min-h-[70vh] p-4">
                <div className="flex border-b border-zinc-400 font-semibold text-md">
                  Best Sellers
                </div>

                {BestSellersList.length === 0 ? (
                  <div className="flex flex-1 items-center justify-center">
                    <p>You have no orders yet</p>
                  </div>
                ) : (
                  BestSellersList.slice(0, 4).map((item) => (
                    <div key={item.message} className="flex text-sm gap-4 min-h-[5rem] pb-2 border-b">
                      <Image className="rounded-xl object-cover h-[80px] w-[100px]" height={40} width={90} src={item.img} alt="item" />
                      <div className="w-full flex flex-col justify-between">
                        <p className="w-full">{item.message}</p>
                        <div className="flex w-full justify-between">
                          <p className="font-semibold">{item.price}</p>
                          <p className="font-semibold">{item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="bg-white flex flex-col gap-4 rounded-lg min-h-[60vh] p-4">
                <div className="flex items-center justify-between border-b border-zinc-400 font-semibold text-md">
                  <p>You're running low</p>
                  <Link className="text-secondary-400 font-medium text-sm" href={""}>
                    See Inventory
                  </Link>
                </div>

                {RunningOutList.length === 0 ? (
                  <div className="flex flex-1 items-center justify-center">
                    <p>You have no orders yet</p>
                  </div>
                ) : (
                  RunningOutList.slice(0, 3).map((item) => (
                    <div key={item.message} className="flex text-sm gap-4 min-h-[5rem] pb-2 border-b">
                      <Image className="rounded-xl object-cover h-[80px] w-[100px]" height={40} width={90} src={item.img} alt="item" />
                      <div className="w-full flex flex-col justify-between">
                        <p className="w-full">{item.message}</p>
                        <div className="flex w-full justify-between">
                          <p className="font-semibold text-danger">{item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
