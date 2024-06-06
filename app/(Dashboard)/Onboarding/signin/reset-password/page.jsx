"use client";
import { Button, InputBox, MrHeading, Text } from "@/components/Atoms";
import Image from "next/image";
import Link from "next/link";
import React, { useState , useEffect} from "react";
import { GoArrowRight } from "react-icons/go";
import { useRouter } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const VerifyEmail = ({ email }) => {
  const [value, setValue] = useState("");
  const [borderColor, setBorderColor] = useState("border-gray-400");
  const [errorMessage, setErrorMessage] = useState("");
  const [resendActive, setResendActive] = useState(false); // State to manage resend link visibility
  const [resendTimer, setResendTimer] = useState(30); // Initial value of resend timer

  useEffect(() => {
  const interval = setInterval(() => {
    if (resendTimer > 0) {
      setResendTimer((prevTimer) => prevTimer - 1);
    } else {
      clearInterval(interval);
      setResendActive(true); // Activate resend link after timer expires
    }
  }, 1000);

  // Clear timer interval when component unmounts
  return () => clearInterval(interval);
}, [resendTimer]); // Re-run effect when resendTimer changes

const handleResendClick = () => {
  // Handle resend click event
  setResendActive(false); // Disable resend link
  setResendTimer(30); // Reset timer
  // Call your OTP resend logic here
};



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (value.length !== 6) {
      setBorderColor("border-danger text-danger");
      setErrorMessage("Invalid OTP. Please enter the 6-digit code.");
      return;
    }

    const payload = {
      email: email,
      otp: value,
    };

    try {
      const response = await fetch(
        `https://api-ngbuka.olotusquare.co/api/v1/auth/reset-password/verify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        setBorderColor("border-danger text-danger");
        setErrorMessage("Failed to verify OTP. Please try again.");
        throw new Error("Failed to verify OTP. Status: " + response.status);
      }

      const data = await response.json();
      console.log("Response Data:", data);

      // OTP verified successfully
      setBorderColor("border-success text-success");
      router.push("/Onboarding/signin/create-password");
    } catch (error) {
      console.error("Error:", error.message);
      setErrorMessage("Failed to verify OTP. Please try again.");
    }
  };

  return (
    <div className="flex-1 flex">
      <div className="flex flex-col px-8 py-10 gap-6 flex-1">
        <section className="flex items-start gap-5 w-full h-full">
          <div className="rounded-2xl flex flex-col justify-between relative flex-1 pt-10 pb-5 h-full">
            <div className="flex-1 w-full">
              <div className="flex flex-col gap-5">
                <Image
                  src="/images/ngbuka_logo.png"
                  width={130}
                  height={27}
                  alt="Footer Logo"
                />
                <div>
                  <MrHeading
                    type="h3"
                    fontWeight="font-[700]"
                    className="text-3xl"
                  >
                    Reset Password
                  </MrHeading>

                  <Text
                    fontSize="largeText"
                    variant="largeText"
                    className="text-xl"
                    fontWeight="font-[600]"
                    textColor="text-text-primary-50"
                  >
                    Enter the security code sent to your email address
                  </Text>
                </div>
              </div>
              <InputOTP
                maxLength={6}
                value={value}
                onChange={(value) => {
                  setValue(value);
                }}
              >
                <InputOTPGroup className="flex mx-auto gap-5 my-10">
                  <InputOTPSlot
                    className={`w-[40px] h-[40px] rounded border text-2xl outline-none focus:outline-none ${borderColor}`}
                    index={0}
                  />
                  <InputOTPSlot
                    className={`w-[40px] h-[40px] rounded border text-2xl outline-none focus:outline-none ${borderColor}`}
                    index={1}
                  />
                  <InputOTPSlot
                    className={`w-[40px] h-[40px] rounded border text-2xl outline-none focus:outline-none ${borderColor}`}
                    index={2}
                  />
                  <InputOTPSlot
                    className={`w-[40px] h-[40px] rounded border text-2xl outline-none focus:outline-none ${borderColor}`}
                    index={3}
                  />
                  <InputOTPSlot
                    className={`w-[40px] h-[40px] rounded border text-2xl outline-none focus:outline-none ${borderColor}`}
                    index={4}
                  />
                  <InputOTPSlot
                    className={`w-[40px] h-[40px] rounded border text-2xl outline-none focus:outline-none ${borderColor}`}
                    index={5}
                  />
                </InputOTPGroup>
              </InputOTP>
              {errorMessage && (
                <Text
                  fontSize="largeText"
                  variant="largeText"
                  className="text-lg text-danger mt-2"
                  fontWeight="font-[400]"
                >
                  {errorMessage}
                </Text>
              )}
              <Button
                type="submit"
                onClick={handleSubmit}
                className={`w-full my-3 flex gap-3 items-center justify-center ${value === ""
                  ? "disabled:bg-secondary-100"
                  : "bg-secondary-500 cursor-pointer"
                }`}
                disabled={value === ""}
              >
                Confirm Email
              </Button>

              <div className="flex items-center justify-between">
          {/* Resend link with timer */}
          <Text
            fontSize="largeText"
            variant="largeText"
            className={`text-lg cursor-pointer mt-3 ${resendActive ? "text-primary-400" : "text-gray-400"}`}
            fontWeight="font-[600]"
            textColor={resendActive ? "text-primary-400" : "text-gray-400"}
            onClick={resendActive ? handleResendClick : null}
          >
            {resendActive ? "Resend code" : `Resend code in ${resendTimer}`}
          </Text>
        </div>
            </div>

            <div className="flex flex-col justify-between">
              <Text
                fontSize="largeText"
                variant="largeText"
                className="text-lg"
                fontWeight="font-[400]"
                textColor="text-text-primary-50 text-center"
              >
                <Link
                  href="/signin"
                  className="text-secondary-400 underline font-semibold pr-2"
                >
                  Sign in
                </Link>
                if you have an account
              </Text>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VerifyEmail;
