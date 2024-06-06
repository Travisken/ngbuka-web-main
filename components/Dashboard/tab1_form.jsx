"use client"

import React, { useState } from "react";
import { GoPerson, GoMail } from "react-icons/go";

export default function Tab1({ onNext }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!number) newErrors.number = "Number is required";
    if (!email) newErrors.email = "Email is required";
    if (email && !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // All fields are valid, proceed to the next step
      onNext({ firstName, lastName, number, email });
    }
  };

  return (
    <div className="pt-4">
      <p className="pl-1">Confirm your profile information and enter your phone number</p>
      <form className="flex flex-col gap-8 pt-8" onSubmit={handleSubmit}>
        <div className="gap-2 relative py-2 px-2 flex items-center border rounded-2xl">
          <GoPerson />
          <input
            type="text"
            className="bg-none border-none outline-none flex flex-1"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
            First name
          </label>
          {errors.firstName && <span className="text-red-500 text-sm absolute top-0 left-[0.4rem]">{errors.firstName}</span>}
        </div>
        <div className="gap-2 relative items-center py-2 px-2 flex border rounded-2xl">
          <GoPerson />
          <input
            type="text"
            className="bg-none border-none outline-none flex flex-1"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
            Last name
          </label>
          {errors.lastName && <span className="text-red-500 text-sm absolute top-0 left-[0.4rem]">{errors.lastName}</span>}
        </div>
        <div className="gap-2 relative py-2 px-2 flex border rounded-2xl">
          <input
            type="number"
            className="bg-none border-none outline-none flex flex-1"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
            Number
          </label>
          {errors.number && <span className="text-red-500 text-sm absolute top-0 left-[0.4rem]">{errors.number}</span>}
        </div>
        <div className="gap-2 items-center relative py-2 px-2 flex border rounded-2xl">
          <GoMail />
          <input
            type="email"
            className="bg-none border-none outline-none flex flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
            Personal email
          </label>
          {errors.email && <span className="text-red-500 text-sm absolute top-0 left-[0.4rem]">{errors.email}</span>}
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-2xl">
          Next
        </button>
      </form>
    </div>
  );
}
