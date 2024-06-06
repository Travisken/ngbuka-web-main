/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button, InputBox, MrHeading, Text } from "@/components/Atoms";
import Image from "next/image";
import Link from "next/link";
import React, { createContext, useContext, useState, useRef } from 'react';
import { GoArrowRight, GoPerson, GoMail } from "react-icons/go";
import { useRouter } from "next/navigation";
import { Dropdown } from "@/components/Atoms";
import Modal from "react-modal";
import SectionsNav2 from "@/components/ui/formTabs";
// import "../../../../styles/globals.css";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

import { OverviewData } from "@/libs/constants";
import { WithdrawalHistoryData } from "@/libs/constants";
import { TransactionHistoryData } from "@/libs/constants";
import { BestSellersList } from "@/libs/constants";
import { RunningOutList } from "@/libs/constants";
import Tab1 from "@/components/Dashboard/tab1_form";

export const StepperContext = createContext();

const Wallet = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const modalRef = useRef(null);

    const handleCardClick = (itemId) => {
        const clickedItem = TransactionHistoryData.find(item => item.id === itemId);
        setSelectedItem(clickedItem);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" }
        // Add more options as needed
    ];



    // You can also define other props you want to pass to the Dropdown component
    const dropdownProps = {
        options: options, // Pass the options array
        name: "myDropdown", // Example of other props you might pass
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
        // Add other props as needed
    };

    const [copiedOrderId, setCopiedOrderId] = useState(null); // State to track copied Order ID

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text); // Use browser's clipboard API to copy text
        setCopiedOrderId(text); // Update state with the copied Order ID
        setTimeout(() => setCopiedOrderId(null), 2000); // Reset copied Order ID after 2 seconds
    };


    const [currentStep, setCurrentStep] = useState(1);

    // Event handler for "Next" button
    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    // Event handler for "Back" button
    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };



    return (
        <>
            <section className="w-full flex flex-col gap-8">

                <div className="bg-white rounded-lg flex px-4 w-full py-4 text-xl font-semibold">
                    Homepage
                </div>


                <section className=" flex flex-col gap-4 w-full">

                    <div className="flex justify-between items-center">
                        <p className="text-xl font-semibold">
                            Overview
                        </p>

                        <div className="flex w-[14rem]">

                            <Dropdown {...dropdownProps} />
                        </div>
                    </div>


                    <div className="flex gap-8 w-full md:overflow-visible overflow-scroll">
                        {OverviewData.map((item) => (
                            <div key={item.id} className="bg-white flex flex-col gap-4 rounded-lg min-w-[12rem] flex-1 p-4">

                                <p className="mx-auto capitalize font-medium">{item.title}</p>


                                <div className="flex items-center justify-center gap-2">
                                    <Image height={40} width={40} src={item.icon}></Image>
                                    <p className="text-xl font-semibold">
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>




                <section className=" flex flex-col gap-4 w-full  mt-4">


                    <section className="flex flex-wrap md:flex-nowrap gap-4">

                        <div className="md:w-full flex gap-4 flex-col">

                            <div className="flex justify-between items-center">
                                <p className="text-xl font-semibold">
                                    Your orders
                                </p>


                            </div>
                            <section className="flex flex-col gap-2 p-3 min-h-[8rem] bg-white rounded-xl">

                                <div className="flex justify-between items-center border w-full p-2">
                                    <span className="uppercase flex flex-1 justify-center">id</span>
                                    <span className="capitalize flex flex-1 justify-center">date</span>
                                    <span className="capitalize flex flex-1 justify-center">amount</span>
                                    <span className="capitalize flex flex-1 justify-center">items</span>
                                    <span className="capitalize flex flex-1 justify-center">status</span>
                                </div>

                                {TransactionHistoryData.length === 0 ? (
                                    <>
                                        <div className="flex flex-col gap-6 items-center justify-center w-full min-h-[60vh] bg-white rounded-xl">

                                            <Image height={120} width={120} src="/images/Frame.png" className="rounded-full"></Image>

                                            <p className="md:max-w-[56%] text-center">
                                                You have no orders yet. Add products to your store to get started
                                            </p>

                                            <button onClick={openModal} className="flex items-center  py-2 px-2 border-2 rounded-full border-secondary-400 text-secondary-400 w-[9rem] gap-2" >
                                                Add product
                                                <Image height={20} width={20} src="/images/Button icons.svg"></Image>
                                            </button>


                                        </div>
                                    </>
                                ) : (
                                    TransactionHistoryData.slice(0, 5).map((item) => (
                                        <div key={item.id} className="">

                                            <div onClick={() => handleCardClick(item.id)} className="flex justify-between items-start border-b w-full p-2 text-sm cursor-pointer">
                                                <span className="uppercase flex flex-1 justify-center">{item.stockId}</span>
                                                <span className="capitalize flex flex-1 justify-center">{item.date}</span>
                                                <span className="capitalize flex flex-1 justify-center">{item.amount}</span>
                                                <span className="capitalize flex flex-1 justify-center">{item.quantity}</span>
                                                <span className={`capitalize flex flex-1 justify-center ${item.status}`}>{item.status}</span>


                                            </div>
                                        </div>
                                    ))
                                )}
                            </section>


                        </div>

                        {selectedItem && (
                            // <div className="">
                            <div className="fixed top-0 right-0 h-full w-full z-[100] flex justify-end" onClick={handleOutsideClick}>
                                <div ref={modalRef} className="h-full w-2/6 bg-white flex flex-col gap-4 items-center justify-center p-4">
                                    <button onClick={closeModal}>Close</button>
                                    {/* <p>Item ID: {selectedItem.id}</p>
                                    <p>Amount: {selectedItem.amount}</p>
                                    <p>Time: {selectedItem.time}</p>
                                    <p>Date: {selectedItem.date}</p>
                                    <p>Status:
                                        <span className={`capitalize flex flex-1 ${selectedItem.status}`}>
                                            {selectedItem.status}
                                        </span>
                                    </p> */}

                                    <Image
                                        src={
                                            selectedItem.status === "successful"
                                                ? "/images/Illustration1.png"
                                                : selectedItem.status === "Pending" // Note: "Pending" should be "pending"
                                                    ? "/images/Illustration2.png"
                                                    : "/images/Illustration3.png"
                                        }
                                        height={100}
                                        width={100}
                                    />
                                    <section className="flex flex-col w-full gap-4">
                                        <div className="w-full flex justify-between items-center">
                                            <span>Transaction ID: </span>
                                            <p>{selectedItem.stockId}
                                                <span></span></p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Date</span>
                                            <p>{selectedItem.date}
                                                <span></span></p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Time</span>
                                            <p>{selectedItem.time}
                                                <span></span></p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Amount</span>
                                            <p>{selectedItem.amount}
                                                <span></span></p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Type</span>
                                            <p>{selectedItem.type}
                                                <span></span></p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Items</span>
                                            <p>{selectedItem.quantity}
                                                <span></span></p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Status</span>
                                            <p>{selectedItem.status}
                                                <span></span></p>
                                        </div>

                                        <button className="flex flex-1 border-none rounded-2xl bg-secondary-500 items-center justify-center py-3">
                                            Go to order page
                                        </button>
                                    </section>


                                </div>
                            </div>
                            // </div>
                        )}
                    </section>


                </section >

            </section >
        </>
    );
};

export default Wallet;
