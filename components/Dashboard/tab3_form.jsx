import React, { useState } from "react";
import { GoPerson, GoMail } from "react-icons/go";

export default function Tab3({ onPrev }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState();



  const handlePrev = (e) => {
    e.preventDefault();
      setModalIsOpen(false);
      alert("closing")
    
  };

  return (
    <div>
      <p>Enter you business information for your store</p>
      <form className="flex flex-col gap-8 pt-8">
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
        </div>
       
      </form>
    </div>
  );
}
