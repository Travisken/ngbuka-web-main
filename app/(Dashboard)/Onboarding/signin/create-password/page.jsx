/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button, InputBox, MrHeading, Text } from "@/components/Atoms";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "../../../../../public/images/ngbuka_logo.png";

const CreatePassword = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate passwords
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }

    const payload = {
      newPassword,
      confirmPassword,
    };

    try {
      const response = await fetch(
        `https://api-ngbuka.olotusquare.co/api/v1/auth/password/reset`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        setErrorMessage("Failed to reset password. Please try again.");
        throw new Error("Failed to reset password. Status: " + response.status);
      }

      const data = await response.json();
      console.log("Response Data:", data);

      router.push("/Onboarding/signin");
    } catch (error) {
      console.error("Error:", error.message);
      setErrorMessage("Failed to reset password. Please try again.");
    }
  };

  return (
    <Fragment>
      <section className="flex flex-col px-8 py-10 gap-6 flex-1">
        <div className="">
          <Image height={100} width={100} src={Logo} alt="Logo" />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <MrHeading type={"h4"} fontWeight="font-[700]">
              Reset password
            </MrHeading>
            <p className="text-[#585865]">
              Create a new password for your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <InputBox
              className=""
              type={"password"}
              placeholder={"New Password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <InputBox
              className=""
              type={"password"}
              placeholder={"Confirm Password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errorMessage && (
              <p className="text-red-500">{errorMessage}</p>
            )}
            <Button
              type="submit"
              className={`flex flex-1 bg-secondary-500 text-white rounded-3xl align-center justify-center py-4 gap-2 ${newPassword === "" || confirmPassword === ""
                ? "disabled:bg-secondary-100"
                : "bg-secondary-500 cursor-pointer"
              }`}
              disabled={newPassword === "" || confirmPassword === ""}
            >
              Create new password
            </Button>
          </form>

          <div className="flex justify-center mt-[30vh]">
            <Link className="text-secondary-400 mr-1" href="/Onboarding/signin">
              Sign up
            </Link>
            if you don't have an account
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CreatePassword;
