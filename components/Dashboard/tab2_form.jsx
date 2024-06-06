"use client"

import React, { useState } from "react";
import { GoMail, GoLocation } from "react-icons/go";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaStore } from "react-icons/fa6";

export default function Tab2({ onNext, onPrev }) {
  const [storeName, setStoreName] = useState("");
  const [storeNumber, setStoreNumber] = useState("");
  const [storeEmail, setStoreEmail] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!storeName) newErrors.storeName = "Store name is required";
    if (!storeNumber) newErrors.storeNumber = "Store number is required";
    if (!storeEmail) newErrors.storeEmail = "Store email is required";
    if (storeEmail && !/\S+@\S+\.\S+/.test(storeEmail)) newErrors.storeEmail = "Email is invalid";
    if (!storeAddress) newErrors.storeAddress = "Store address is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // All fields are valid, proceed to the next step
      onNext({ storeName, storeNumber, storeEmail, storeAddress });
    }
  };

  return (
    <div className="pt-4 flex flex-col w-[30rem]">
      <p>Enter your store information</p>
      <form className="flex flex-col gap-8 pt-8" onSubmit={handleSubmit}>
        <div className="gap-2 relative py-2 px-2 flex items-center border rounded-2xl">
          <FaStore />
          <input
            type="text"
            className="bg-none border-none outline-none flex flex-1"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            placeholder="Type in your store name"
          />
          <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
            Store name
          </label>
          {errors.storeName && <span className="text-red-500 text-sm absolute top-0 left-[0.4rem]">{errors.storeName}</span>}
        </div>
        <div className="gap-2 relative items-center py-2 px-2 flex border rounded-2xl">
          <MdOutlineLocalPhone />
          <input
            type="number"
            className="bg-none border-none outline-none flex flex-1"
            value={storeNumber}
            onChange={(e) => setStoreNumber(e.target.value)}
            placeholder="Type in your store phone number"
          />
          <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
            Store number
          </label>
          {errors.storeNumber && <span className="text-red-500 text-sm absolute top-0 left-[0.4rem]">{errors.storeNumber}</span>}
        </div>
        <div className="gap-2 items-center relative py-2 px-2 flex border rounded-2xl">
          <GoMail />
          <input
            type="email"
            className="bg-none border-none outline-none flex flex-1"
            value={storeEmail}
            onChange={(e) => setStoreEmail(e.target.value)}
            placeholder="Type in your store email"
          />
          <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
            Store email
          </label>
          {errors.storeEmail && <span className="text-red-500 text-sm absolute top-0 left-[0.4rem]">{errors.storeEmail}</span>}
        </div>
        <div className="gap-2 items-center relative py-2 px-2 flex border rounded-2xl">
          <GoLocation />
          <input
            type="text"
            className="bg-none border-none outline-none flex flex-1"
            value={storeAddress}
            onChange={(e) => setStoreAddress(e.target.value)}
            placeholder="Type in your store location"
          />
          <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
            Store address
          </label>
          {errors.storeAddress && <span className="text-red-500 text-sm absolute top-0 left-[0.4rem]">{errors.storeAddress}</span>}
        </div>

        <div className="text-secondary-400">Use present location</div>

        <div className="flex justify-between">
          <button type="button" onClick={onPrev} className="bg-gray-500 text-white py-2 px-4 rounded-2xl">
            Previous
          </button>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-2xl">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
