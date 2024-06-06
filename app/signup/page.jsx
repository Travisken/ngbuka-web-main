"use client";
import { Button, InputBox, MrHeading, Text } from "@/components/Atoms";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { useRouter } from "next/navigation";
import axios from 'axios'; // Import axios
// react-hook-form & zod import
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const signupSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phoneNumber: z.string().min(10, "Phone number is required"),
  email: z.string().min(2, "Email is mandatory").email("Invalid email address"),
  password: z.string().min(6, "Password is mandatory"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const submitForm = async (data) => {
    const formattedData = {
      firstname: data.firstName,
      lastname: data.lastName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      password: data.password,
      role: "user",
    };
  
    try {
      const response = await axios.post('https://api-ngbuka.olotusquare.co/api/v1/auth/register', formattedData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Handle successful response
      console.log(response.data);
      router.push("/verify-email"); // Example: redirecting to a verification page
    } catch (error) {
      // Handle error
      if (error.response) {
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
        if (error.response.status === 400) {
          alert('Invalid token or data. Please check your input and try again.');
        }
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
      alert('Failed to sign up. Please try again.');
    }
  };
  

  return (
    <div>
      <div className="w-full h-full relative p-5">
        <Image
          src="/images/signup_image.png"
          width={400}
          height={140}
          alt="Photo by Minh Pham"
          className=" inset-0 h-auto w-full rounded-lg"
        />

        <section className="absolute bottom-0 py-10 flex items-end gap-5 justify-between h-full">
          <div className=" p-10 bg-[rgba(0, 0, 0, 0.25)] backdrop-blur-md left-5 h-fit relative bottom-10 text-white max-w-[580px] rounded-3xl">
            <MrHeading
              type="h1"
              fontWeight="font-[700]"
              className=" text-5xl leading-[100px]"
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

          <div className="rounded-2xl bg-white px-10 relative flex flex-col justify-between -right-10 pt-10 pb-5 h-full max-w-[550px]">
            <div className="grid gap-5">
              <div className="flex flex-col gap-5">
                <Image
                  src="/images/ngbuka_logo.png"
                  width={130}
                  height={27}
                  alt="Footer Logo"
                />
                <div className="">
                  <MrHeading
                    type="h3"
                    fontWeight="font-[400]"
                    className=" text-[2rem] ttext-text-primary-100 leading-[3rem]"
                  >
                    Create an account
                  </MrHeading>

                  <Text
                    fontSize="largeText"
                    variant="largeText"
                    className=" text-lg"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    Sign up to Ngbuka to enjoy our range of services
                  </Text>
                </div>
              </div>
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="flex flex-col">
                 <div className={!errors?.lastName?.message && `mb-0`}>
                 <InputBox
                    type="text"
                    placeholder="First name"
                    register={register}
                    dbname="firstName"
                    errorMessage={errors?.firstName?.message}
                    isError={!!errors?.firstName}
                  />
                 </div>
                  <div className={!errors?.firstName?.message && `pt-5`}>
                    <InputBox
                      type="text"
                      placeholder="Last name"
                      register={register}
                      dbname="lastName"
                      errorMessage={errors?.lastName?.message}
                      isError={!!errors?.lastName}
                    />
                  </div>
                  <div className={!errors?.lastName?.message && `pt-5`}>
                    <InputBox
                      type="text"
                      placeholder="email"
                      register={register}
                      dbname="email"
                      errorMessage={errors?.email?.message}
                      isError={!!errors?.email}
                    />
                  </div>
                  <div className={`${errors?.email?.message && `pb-0`} ${!errors?.email?.message && `pt-5`}`}>
                    <InputBox
                      type="number"
                      placeholder="+234 812 345 0789"
                      register={register}
                      dbname="phoneNumber"
                      errorMessage={errors?.phoneNumber?.message}
                      isError={!!errors?.phoneNumber}
                    />
                  </div>
                  <div className={`${!errors?.phoneNumber?.message && `pt-5`}`}>
                    <InputBox
                      type="password"
                      placeholder="password"
                      register={register}
                      dbname="password"
                      errorMessage={errors?.password?.message}
                      isError={!!errors?.password}
                    />
                  </div>

                  <Text
                    fontSize="largeText"
                    variant="largeText"
                    className=" text-lg pt-5"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    By creating an account, you agree with{" "}
                    <Link href="/" className="text-secondary-400 underline">
                      Ngbuka’s Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/" className="text-secondary-400 underline">
                      Privacy Policy
                    </Link>
                  </Text>
                </div>
                <Button
                  // onClick={() => router.push("/verify-email")}
                  type="submit"
                  className="w-full my-5 flex gap-3 items-center justify-center"
                >
                  Continue <GoArrowRight />
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

export default SignUp;

