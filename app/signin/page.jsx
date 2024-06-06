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
import { redirect } from "next/navigation";
import { signIn } from "@/libs/action";
import { signInForm } from "../(landing_page)/_actions/actions";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
// react-hook-form & zod import
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { setToken } from "@/services/helperServices";

const signinSchema = z.object({
  email: z.string().min(2, "Email is mandatory").email("invalid email address"),
  password: z.string().min(6, "Password is mandatory"),
});

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

    const signIn = async (formData) => {
      const payLoad = {
        email: formData.email,
        password: formData.password,
        isEmailLogin: true,
      };
      console.log(payLoad);
     try {
      const response = await fetch(
        `https://api-ngbuka.olotusquare.co/api/v1/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payLoad),
        }
      );
      
      if (!response.ok) {
        throw new Error("Failed to sign in. Status: " + response.status);
      }
  
      const data = await response.json();
      setToken(data.entity);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

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

          <div className="rounded-2xl bg-white px-10 relative flex flex-col justify-between lg:-right-32 pt-10 pb-5 h-full max-w-[550px]">
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
                    Sign in
                  </MrHeading>

                  <Text
                    fontSize="largeText"
                    variant="largeText"
                    className=" text-lg"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    Log into the marketplace to continue shopping
                  </Text>
                </div>
              </div>
              <form onSubmit={handleSubmit(signIn)}>
                <div className="flex flex-col pt-8">
                  <InputBox
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email"
                    register={register}
                    dbname="email"
                    errorMessage={errors?.email?.message}
                    isError={!!errors?.email}
                  />
                  <div className="pt-5">
                    <InputBox
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                      register={register}
                      dbname="password"
                      errorMessage={errors?.password?.message}
                      isError={!!errors?.password}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center">
                    <Checkbox
                      handleChange={() => {}}
                      checkBoxLabel="Keep me signed in"
                    />
                  </div>

                  <Link
                    href="/forgot-password"
                    className="text-secondary-500 font-semibold"
                  >
                    forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full my-5 flex gap-3 items-center justify-center"
                >
                  Sign in
                </Button>
              </form>
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

export default SignIn;
