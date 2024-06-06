"use client";
import {
  Button,
  Checkbox,
  InputBox,
  MrHeading,
  Text,
} from "@/components/Atoms";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { useRouter } from "next/navigation";

const ForgotPasswordPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="w-full h-full relative p-5">
        <Image
          src="/images/signin_image.png"
          width={400}
          height={140}
          alt="Photo by Minh Pham"
          className=" inset-0 h-auto w-full rounded-lg"
        />

        <section className="absolute bottom-0 py-10 flex items-end gap-5 justify-between h-full">
          <div className=" p-10 bg-[rgba(0, 0, 0, 0.2)] backdrop-blur-md left-5 h-fit relative bottom-10 text-white max-w-[580px] rounded-3xl">
            <MrHeading
              type="h1"
              fontWeight="font-[700]"
              className=" text-5xl leading-[100px]"
            >
              Welcome back
            </MrHeading>

            <Text
              fontSize="largeText"
              variant="largeText"
              className=" text-2xl"
              fontWeight="font-[600]"
              textColor="text-white"
            >
              Sign into your account to continue shopping for the best spare
              parts in Nigeria
            </Text>
          </div>

          <div className="rounded-2xl bg-white px-10 relative flex flex-col justify-between -right-14 pt-10 pb-5 h-full max-w-[550px]">
            <div>
              <div className="flex flex-col gap-5">
                <Image
                  src="/images/ngbuka_logo.png"
                  width={180}
                  height={60}
                  alt=" Logo"
                />
                <div className="">
                  <MrHeading
                    type="h3"
                    fontWeight="font-[400]"
                    className=" text-[2rem] ttext-text-primary-100 leading-[3rem]"
                  >
                    Forget password
                  </MrHeading>

                  <Text
                    fontSize="largeText"
                    variant="largeText"
                    className=" text-lg"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    Hey this doesn’t have to be a problem. Simply enter your
                    email to receive reset information
                  </Text>
                </div>
              </div>
              <div className="py-5">
                <InputBox type="email" placeholder="email" required={true} />
              </div>
              <Button
                onClick={() => router.push("/reset-password")}
                className="w-full my-5 flex gap-3 items-center justify-center"
              >
                Send password request
              </Button>
            </div>

            <div className="">
              <Text
                fontSize="largeText"
                variant="largeText"
                className=" text-lg"
                fontWeight="font-[400]"
                textColor="text-text-primary-50 text-center"
              >
                <Link
                  href="/signup"
                  className="text-secondary-400 underline font-semibold pr-2"
                >
                  Create a new account
                </Link>
                to get started
              </Text>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
