import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

import {  GoMegaphone, GoMail, GoLocation } from "react-icons/go";
import { FaStore } from "react-icons/fa6";

export default function TabLocation({ onNext, onPrev }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [modalIsOpen1, setModalIsOpen1] = useState(false);


  

  const closeModal = (e) => {
    e.preventDefault();
    setModalIsOpen1(false);
    console.log("closing");
    console.log("modalIsOpen:", modalIsOpen1);
  };
  

  return (
    <div className="pt-4 flex flex-col w-[30rem]">
      <p>Enter your store information</p>
      <form className="flex flex-col gap-8 pt-8">
        <div className="gap-2 relative py-2 px-2 flex items-center border rounded-2xl">
          <FaStore />
          <input
            type="text"
            className="bg-none border-none outline-none flex flex-1"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Type in your store name"
          />
          <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
            Store name
          </label>
        </div>
        <div className="gap-2 relative items-center py-2 px-2 flex border rounded-2xl">
          <GoMegaphone />
          <input
            type="number"
            className="bg-none border-none outline-none flex flex-1"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Type in your store phone number"

          />
          <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
            Store number
          </label>
        </div>
        {/* GoLocation */}
        <div className="gap-2 items-center relative py-2 px-2 flex border rounded-2xl">
          <GoMail />
          <input
            type="email"
            className="bg-none border-none outline-none flex flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type in your store email"

          />
          <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
            Store email
          </label>
        </div>

        <div className="gap-2 items-center relative py-2 px-2 flex border rounded-2xl">
          <GoLocation />
          <input
            type="text"
            className="bg-none border-none outline-none flex flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type in your store location"

          />
          <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
            Store address
          </label>

          
        </div>
        <div className="text-secondary-400 ">
          Use present location

        </div>
        <div className="flex items-center gap-8 justify-center">

     
        <button onClick={closeModal} className="flex bg-secondary-600 text-center justify-center rounded-2xl mx-auto text-white font-semibold w-1/2 py-3 mt-4">Save and  continue</button>

        </div>
      </form>
    </div>
  );
}
