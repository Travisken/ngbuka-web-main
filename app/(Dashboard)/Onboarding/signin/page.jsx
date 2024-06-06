/* eslint-disable react/no-unescaped-entities */
"use client";
import axios from 'axios';
import { Button, InputBox, MrHeading, Text } from "@/components/Atoms";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { useRouter } from "next/navigation";
import Logo from "../../../../public/images/ngbuka_logo.png";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage("Both email and password are required.");
      return;
    }

    const payLoad = {
      email: email,
      password: password,
      isEmailLogin: 'true'
    };

    try {
      const response = await axios.post(
        `https://api-ngbuka.olotusquare.co/api/v1/auth/login`,
        payLoad,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      const data = response.data;
      console.log("Response Data:", data);
      router.push('/Dashboard/home'); 
      localStorage.setItem('userData', JSON.stringify(data));
      const userDataString = localStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        // console.log("User Data:", userData);
      }
      
    } catch (error) {
      // if(response.data != 200){
      //   setErrorMessage("Failed to sign in. Please try again.");
      // }
      console.error("Error:", error);
      if (error.response && error.response.status === 404) {
        setErrorMessage("User not found. Please check your email and password.");
      } else {
        setErrorMessage("Failed to sign in. Please try again.");
      }
    }
  };

  return (
    <Fragment>
      <section className="flex flex-col px-8 py-10 gap-6 flex-1">
        <div className="">
          <Image height={100} width={100} src={Logo} alt="Ngbuka Logo" />
        </div>

        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col gap-2">
            <MrHeading type={"h4"} fontWeight="font-[700]">
              Sign in
            </MrHeading>
            <p className="text-[#585865]">
              Log back in to continue managing your orders
            </p>
          </div>

          <form onSubmit={handleSignIn} className="w-full flex flex-col gap-4">
            <InputBox
              className=""
              type={"email"}
              placeholder={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputBox
              className=""
              type={"password"}
              placeholder={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <input className="h-5 w-5 rounded-lg" type={"checkbox"} />
                <p>Keep me signed in</p>
              </div>

              <Link href={"/Onboarding/signin/forgot-password"}>Forgot password?</Link>
            </div>

            {errorMessage && (
              <Text
                fontSize="largeText"
                variant="largeText"
                className="text-lg"
                fontWeight="font-[400]"
                textColor="text-red-500"
              >
                {errorMessage}
              </Text>
            )}

            <button
              type="submit"
              className={`flex flex-1 bg-secondary-500 text-white rounded-3xl align-center justify-center py-4 gap-2 ${!email || !password
                ? "disabled:bg-secondary-100"
                : "bg-secondary-500 cursor-pointer"
                }`}
              disabled={!email || !password}
            >
              Sign in
              <GoArrowRight className="mt-1"></GoArrowRight>
            </button>
          </form>

          <div className="flex justify-center">
            <Link className="text-secondary-400 mr-1" href="/Onboarding/signup">
              Sign up
            </Link>
            if you don't have account
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SignIn;
