"use client";

import { Button, InputBox, MrHeading, Text } from "@/components/Atoms";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { useRouter } from "next/navigation";
import Logo from "../../../../public/images/ngbuka_logo.png";

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role: "dealer"
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First name is required";
    if (!formData.lastName) tempErrors.lastName = "Last name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    if (!formData.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      // Modify phone number if it starts with zero
      let phoneNumber = formData.phone;
      if (phoneNumber.startsWith('0')) {
        phoneNumber = '+234' + phoneNumber.slice(1);
      }

      try {
        const res = await fetch('https://api-ngbuka.olotusquare.co/api/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstname: formData.firstName,
            lastname: formData.lastName,
            phoneNumber: phoneNumber,
            email: formData.email,
            password: formData.password,
            role: "dealer"
          })
        });
        if (!res.ok) {
          const errorData = await res.json();
          console.error('Error during registration:', errorData);
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        router.push("/Onboarding/signup/verify-email");
      } catch (error) {
        console.error('Error during registration:', error.message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <section className="flex flex-col px-8 py-10 gap-6 flex-1">
        <div>
          <Image height={100} width={100} src={Logo} alt="Ngbuka Logo" />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <MrHeading type={"h4"} fontWeight="font-[700]">
              Create an account
            </MrHeading>
            <p className="text-[#585865]">
              Get started and set up a store on Ngbuka
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <InputBox
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName && "border-red-500"}
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}

            <InputBox
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName && "border-red-500"}
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}

            <InputBox
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email && "border-red-500"}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <InputBox
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone && "border-red-500"}
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}

            <InputBox
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password && "border-red-500"}
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}

            <button
              type="submit"
              className={`flex flex-1 bg-secondary-500 text-white rounded-3xl align-center justify-center py-4 gap-2 ${isSubmitting && "disabled:bg-secondary-100"}`}
              disabled={isSubmitting}
            >
              Continue
              <GoArrowRight className="mt-1" />
            </button>
          </form>

          <div className="text-[#585865]">
            By creating an account, you agree with Ngbuka’s <a className="text-secondary-400 underline" href="http://" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> and <a className="text-secondary-400 underline" href="http://" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </div>

          <div className="flex justify-center">
            <Link className="text-secondary-400 mr-1" href="/Onboarding/signin">Sign In</Link>
            if you have an account
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
