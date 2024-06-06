"use client";
import { Button, InputBox, MrHeading, Text } from "@/components/Atoms";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { RiEditLine } from "react-icons/ri";
import Link from "next/link";
import { apiWithOutAuth } from "@/services/httpServices";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PasswordModal from "@/components/Molecules/PasswordModal";

const myaccount = [
  {
    id: 1,
    Header: "My orders",
    nums: "15",
    icons: "/icons/Aorder_Icon.svg",
  },
  {
    id: 2,
    Header: "My booking",
    nums: "7",
    icons: "/icons/Abooking_Icon.svg",
  },
  {
    id: 3,
    Header: "Total spent",
    nums: "305,200",
    icons: "/icons/AtotalSpent_Icon.svg",
  },
];

// async function walletData() {
//   try {
//     const agent = new https.Agent({ rejectUnauthorized: false });
//     const res = await fetch(`https://74.48.46.59/api/v1/server-health`, {
//       agent,
//     });

//     return res.json();
//   } catch (error) {
//     console.error("Failed to fetch data:", error);
//   }
// }

const MyAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [profile, setProfile] = useState({});

  const formSchema = z.object({
    firstName: z.string().min(2, "first name is required"),
    lastName: z.string().min(2, "last name is required"),
    phoneNumber: z.string().min(2, "phone number is required"),
    email: z
      .string()
      .min(2, "email is required")
      .email("invalid email address"),
    // password: z.string().min(6, "password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "Kelechi",
      lastName: "Olusola",
      phoneNumber: "+234 812 345 0789",
      email: "kelsboy@gmail.com",
    },
  });

  const fetchProfileData = async () => {
    try {
      setIsLoadingData(true);
      const res = await apiWithOutAuth.get("/server-health");
      if (res) {
        setIsLoadingData(false);
        setProfile(res.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoadingData(false);
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  console.log(profile);

  const submitForm = async (data) => {
    const profileData = data;
    console.log(profileData, "profile Data");
    try {
      setIsLoading(true);
      const response = await apiWithOutAuth.put("users/7", profileData);

      if (!response.ok) {
        setIsLoading(false);
        throw new Error("Failed to updata profile: " + response.status);
      }

      const data = await response.data;
      console.log(data);
      fetchProfileData();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error:", error.message);
    }
  };

  if (isLoadingData) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
        <span className="loading"></span>
      </div>
    );
  }

  return (
    <section className="grid gap-5">
      <div className="bg-white p-5 rounded-2xl">
        <Text
          fontSize="standard"
          variant="standard"
          className="text-2xl"
          fontWeight="font-[700]"
          textColor="text-text-primary-50"
        >
          My account
        </Text>
      </div>

      <div className="flex gap-5 lg:flex-row flex-col items-center">
        {myaccount.map((acct) => (
          <>
            <div className="bg-white p-5 flex gap-3 rounded-2xl lg:w-[280px]">
              <Image
                width={34}
                height={34}
                src={acct.icons}
                alt="Copy imgage"
                className=" w-fit"
              />
              <div className="">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-sm"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  {acct.Header}
                </Text>
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-2xl"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  {acct.nums}
                </Text>
              </div>
            </div>
          </>
        ))}
      </div>

      {/* details section */}
      <div className="grid gap-10">
        <div className="">
          <MrHeading
            type="h4"
            fontWeight="font-semibold"
            className="text-2xl text-text-primary-50 pb-3"
          >
            My profile
          </MrHeading>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="bg-white rounded-2xl grid gap-5 p-5 w-full">
              <div className="border border-border-25 p-3 rounded-2xl h-[73px]">
                <InputBox
                  type="text"
                  label="First name"
                  className="py-[5px] px-[10px] h-5 border-none "
                  placeholder={profile.name?.firstname || "Kelechi"}
                  register={register}
                  dbname="firstName"
                  errorMessage={errors?.firstName?.message}
                  isError={!!errors?.firstName}
                />
              </div>
              <div className="border border-border-25 p-3 rounded-2xl h-[73px]">
                <InputBox
                  type="text"
                  label="Last name"
                  className="py-[5px] px-[10px] h-5 border-none "
                  placeholder={profile.name?.lastname || "Olusola"}
                  register={register}
                  dbname="lastName"
                  errorMessage={errors?.lastName?.message}
                  isError={!!errors?.lastName}
                />
              </div>
              <div className="border border-border-25 p-3 rounded-2xl h-[73px]">
                <InputBox
                  type="number"
                  label="Phone number"
                  className="py-[5px] px-[10px] h-5 border-none "
                  placeholder={profile.phone || "+234 812 345 0789"}
                  register={register}
                  dbname="phoneNumber"
                  errorMessage={errors?.phoneNumber?.message}
                  isError={!!errors?.phoneNumber}
                />
              </div>
              <div className="border border-border-25 p-3 rounded-2xl h-[73px]">
                <InputBox
                  type="email"
                  label="Email"
                  className="py-[5px] px-[10px] h-5 border-none "
                  placeholder={profile.email || "kelsboy@gmail.com"}
                  register={register}
                  dbname="email"
                  errorMessage={errors?.email?.message}
                  isError={!!errors?.email}
                />
              </div>
              <div className="flex items-center justify-center">
                <Button
                  variant="primary"
                  className="lg:w-[350px] disabled:bg-secondary-100 disabled:cursor-not-allowed"
                  isDisabled={isLoading}
                  type="submit"
                >
                  {isLoading ? "Updating Profile" : "Save changes"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* password section */}
      <div className="grid gap-10">
        <div className="">
          <MrHeading
            type="h4"
            fontWeight="font-semibold"
            className="text-2xl text-text-primary-50 pb-3"
          >
            My password
          </MrHeading>
          <div className="bg-white rounded-2xl gap-5 flex items-center p-5 w-full">
            <div className="border border-border-25 p-3 rounded-2xl h-[73px] flex w-full justify-between items-end">
              <InputBox
                type="password"
                label="Password"
                className="py-[5px] px-[10px] h-5 border-none "
                placeholder={profile.password || "*********"}
                dbname="password"
                errorMessage={errors?.password?.message}
                isError={!!errors?.password}
                required={true}
              />

              <Dialog className="p-0 bg-red-600 border-none">
                <DialogTrigger>
                  <div className="text-secondary-400 flex cursor-pointer items-center gap-2">
                    <span>Edit</span>
                    <RiEditLine />
                  </div>
                </DialogTrigger>
                 <PasswordModal />
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery section */}
      <div className="grid gap-10">
        <div className="">
          <div className="flex items-center justify-between pb-5">
            <MrHeading
              type="h4"
              fontWeight="font-semibold"
              className="text-2xl text-text-primary-50 pb-3"
            >
              Delivery address
            </MrHeading>
            <Button className="flex items-center gap-2">
              Create new address{" "}
              <span>
                <FaPlus />
              </span>
            </Button>
          </div>
          <div className="p-5 bg-white w-full rounded-2xl border border-border-25">
            <div className="flex items-center justify-between">
              <Text
                variant="standard"
                className="text-2xl"
                fontWeight="font-[600]"
                textColor="text-text-primary-100"
              >
                Home
              </Text>

              <div className="text-secondary-400 flex cursor-pointer items-center gap-2">
                <span>Edit</span>
                <RiEditLine />
              </div>
            </div>
            <div className="flex gap-3 pb-2">
              <Image
                width={24}
                height={24}
                src="/icons/MapPin-r.svg"
                alt="outline map pin img"
                className="w-fit h-fit"
              />
              <Text
                variant="standard"
                className="text-"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                66 Forces Avenue, Old GRA <br /> Port Harcourt, Rivers state{" "}
                <br /> 500272 <br />
                Rivers State
              </Text>
            </div>
            <div className="flex gap-2 pt-2">
              <Image
                width={24}
                height={24}
                src="/icons/Phone-r.svg"
                alt="phone img"
                className="object-cover object-center"
              />
              <Text
                variant="standard"
                className="text-"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                0802 403 1100; 0817 345 6789
              </Text>
            </div>
          </div>
          <div className="p-5 bg-white w-full rounded-2xl border border-border-25 mt-3">
            <div className="flex items-center justify-between">
              <Text
                variant="standard"
                className="text-2xl"
                fontWeight="font-[600]"
                textColor="text-text-primary-100"
              >
                Work
              </Text>

              <div className="text-secondary-400 flex cursor-pointer items-center gap-2">
                <span>Edit</span>
                <RiEditLine />
              </div>
            </div>
            <div className="flex gap-3 pb-2">
              <Image
                width={24}
                height={24}
                src="/icons/MapPin-r.svg"
                alt="outline map pin img"
                className="w-fit h-fit"
              />
              <Text
                variant="standard"
                className="text-"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                31 Isiokpo Street, D-Line <br /> Port Harcourt, Rivers state{" "}
                <br /> 500272 <br />
                Rivers State
              </Text>
            </div>
            <div className="flex gap-2 pt-2">
              <Image
                width={24}
                height={24}
                src="/icons/Phone-r.svg"
                alt="phone img"
                className="object-cover object-center"
              />
              <Text
                variant="standard"
                className="text-"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                0802 403 1100; 0817 345 6789
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Link
          href="/myaccount/deleteaccount"
          className="bg-danger py-[10px] w-[350px] text-center text-white rounded-full"
        >
          Delete my acount
        </Link>
      </div>
    </section>
  );
};

export default MyAccount;
