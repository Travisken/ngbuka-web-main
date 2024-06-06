"use client";
import { Button, InputBox, MrHeading, Text } from "@/components/Atoms";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import StoreSetup from "../../Onboarding/storeSetup/page";


const Storefront = () => {



    return (
        <>
            <section className="w-full flex flex-col gap-8">
                <StoreSetup />
            </section>
        </>
    );
};

export default Storefront;
