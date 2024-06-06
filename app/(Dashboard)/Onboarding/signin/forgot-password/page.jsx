/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button, InputBox, MrHeading, Text } from "@/components/Atoms";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { useRouter } from "next/navigation";
import Logo from "../../../../../public/images/ngbuka_logo.png";
// import VerifyEmail from "../"; // Import the new component
import VerifyEmail from "../reset-password/page.jsx"

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // Add state to track submission

  const handleForgotPassword = async (event) => {
    event.preventDefault();

    if (!email) {
      setErrorMessage("Email is required.");
      return;
    }

    const payLoad = { email };

    console.log("Payload:", payLoad);

    try {
      const response = await fetch(
        `https://api-ngbuka.olotusquare.co/api/v1/auth/forgot-password`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payLoad),
        }
      );

      if (!response.ok) {
        if (response.status === 404) {
          setErrorMessage("User not found. Please check your email.");
        } else {
          setErrorMessage("Failed to send password reset request. Please try again.");
        }
        throw new Error("Failed to send password reset request. Status: " + response.status);
      }

      const data = await response.json();
      console.log("Response Data:", data);
      setSuccessMessage("Password reset link has been sent to your email.");
      setIsSubmitted(true); // Set the submitted state to true
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <Fragment>
      <section className="flex flex-col px-8 py-10 gap-6 flex-1">
        <div>
          <Image height={100} width={100} src={Logo} alt="Ngbuka Logo" />
        </div>

        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col gap-2">
            <MrHeading type={"h4"} fontWeight="font-[700]">
              Forgot Password
            </MrHeading>
            <p className="text-[#585865]">
              Enter your email to reset your password
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleForgotPassword} className="w-full flex flex-col gap-4">
              <InputBox
                className=""
                type={"email"}
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

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

              {successMessage && (
                <Text
                  fontSize="largeText"
                  variant="largeText"
                  className="text-lg"
                  fontWeight="font-[400]"
                  textColor="text-green-500"
                >
                  {successMessage}
                </Text>
              )}

              <button
                type="submit"
                className={`flex flex-1 bg-secondary-500 text-white rounded-3xl align-center justify-center py-4 gap-2 ${!email
                  ? "disabled:bg-secondary-100"
                  : "bg-secondary-500 cursor-pointer"
                  }`}
                disabled={!email}
              >
                Send password reset request
                <GoArrowRight className="mt-1"></GoArrowRight>
              </button>
            </form>
          ) : (
            <VerifyEmail email={email} /> 
          )}

          <div className="flex justify-center mt-[30vh]">
            <Link className="text-secondary-400 mr-1" href="/Onboarding/signin">
              Sign in
            </Link>
            if you already have an account
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ForgotPassword;
