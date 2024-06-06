"use client";
import { Button, InputBox, MrHeading, Text } from "@/components/Atoms";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { useRouter } from "next/navigation";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const VerifyEmail = () => {
  let [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  let [borderColor, setBorderColor] = useState("border-gray-400");
  const router = useRouter();
  const otp = "123456";

  // 2. Define a submit handler.
  const handelSubmit = () => {
    if (value === otp) {
      setBorderColor("border-success text-success");
      router.push("/create-password");
    }
    if (value.length !== 6 || value !== otp) {
      setBorderColor("border-danger text-danger");
    }

    console.log(value);
  };

  return (
    <div>
      <div className="w-full h-full relative p-5">
        <Image
          src="/images/signup_image.png"
          width={400}
          height={140}
          alt="Photo by Minh Pham"
          className=" inset-0 h-full w-full rounded-lg"
        />

        <section className="absolute bottom-0 py-10 flex items-end gap-5 justify-between h-full">
          <div className=" p-10 bg-[rgba(0, 0, 0, 0.25)] backdrop-blur-md left-5 h-fit relative bottom-10 text-white max-w-[580px] rounded-3xl">
            <MrHeading
              type="h1"
              fontWeight="font-[700]"
              className=" text-5xl leading-[80px]"
            >
              Welcome to Ngbuka marketplace
            </MrHeading>

            <Text
              fontSize="largeText"
              variant="largeText"
              className=" text-xl"
              fontWeight="font-[600]"
              textColor="text-white"
            >
              Create an account to make shopping easier. Browse our catalogue of
              quality spare parts, check out verified vendors, and experience
              seamless payment and delivery
            </Text>
          </div>

          <div className="rounded-2xl flex flex-col justify-between bg-white px-10 relative -right-12 pt-10 pb-5 h-full max-w-[550px]">
            <div className="">
              <div className="flex flex-col gap-5">
                <Image
                  src="/images/ngbuka_logo.png"
                  width={180}
                  height={60}
                  alt=" Logo"
                />
                <div className="">
                  <MrHeading
                    type="h1"
                    fontWeight="font-[700]"
                    className=" text-4xl leading-[80px]"
                  >
                   Reset password
                  </MrHeading>

                  <Text
                    fontSize="largeText"
                    variant="largeText"
                    className=" text-lg"
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
                <InputOTPGroup className="flex gap-5 my-10">
                  <InputOTPSlot
                    className={`w-[60px] h-[60px] rounded border text-2xl outline-none focus:outline-none ${borderColor}`}
                    index={0}
                  />
                  <InputOTPSlot
                    className={`w-[60px] h-[60px] rounded border text-2xl outline-none focus:outline-none ${borderColor}`}
                    index={1}
                  />
                  <InputOTPSlot
                    className={`w-[60px] h-[60px] rounded border text-2xl outline-none focus:outline-none ${borderColor}`}
                    index={2}
                  />
                  <InputOTPSlot
                    className={`w-[60px] h-[60px] rounded border text-2xl outline-none focus:outline-none ${borderColor}`}
                    index={3}
                  />
                  <InputOTPSlot
                    className={`w-[60px] h-[60px] rounded border text-2xl outline-none focus:outline-none ${borderColor} `}
                    index={4}
                  />
                  <InputOTPSlot
                    className={`w-[60px] h-[60px] rounded border text-2xl outline-none focus:outline-none ${borderColor}`}
                    index={5}
                  />
                </InputOTPGroup>
              </InputOTP>
              <Button
                type="submit"
                onClick={handelSubmit}
                className={`w-full my-3 flex gap-3 items-center  justify-center ${
                  value === ""
                    ? "disabled:bg-secondary-100"
                    : "bg-secondary-500 cursor-pointer"
                }`}
                isDisabled={value === "" && true}
              >
                Confirm email
              </Button>

              <div className="flex items-center justify-between">
                <Text
                  fontSize="largeText"
                  variant="largeText"
                  className=" text-lg cursor-pointer mt-3"
                  fontWeight="font-[600]"
                  textColor="text-primary-400"
                >
                  Resend code in 27
                </Text>

                {borderColor === "border-danger text-danger" && (
                  <Text
                    fontSize="largeText"
                    variant="largeText"
                    className=" text-lg cursor-pointer mt-3"
                    fontWeight="font-[600]"
                    textColor="text-primary-400"
                  >
                    Try another email
                  </Text>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VerifyEmail;
