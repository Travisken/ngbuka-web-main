"use client";
import React from "react";
import { Button, Text } from "../Atoms";
import Image from "next/image";
import Link from "next/link";

const TransactionDetails = ({ payment }) => {
  return (
    <>
      <div className="flex flex-col text-center justify-center gap-1 w-full px-5 pb-10">
        <div className="flex flex-col gap-8">
          <div className="grid gap-2">
            <div className="pb-3 grid place-content-center ">
              {payment.status.toLowerCase() === "successful" ? (
                <Image
                  src="/images/success-img.png"
                  width={500}
                  height={500}
                  alt="staus of transaction image"
                  className="w-[120px]"
                />
              ) : "image not displaying" && payment.status.toLowerCase() === "pending" ? (
                <Image
                  src="/images/pending-img.png"
                  width={500}
                  height={500}
                  alt="staus of transaction image"
                  className="w-[120px]"
                />
              ) : "image not displaying" && payment.status.toLowerCase() === "refunded" ? (
                <Image
                  src="/images/failed-img.png"
                  width={500}
                  height={500}
                  alt="staus of transaction image"
                  className="w-[120px]"
                />
              ) : (
                "image not displaying"
              )}
            </div>
            <span
              className={`${
                payment.status.toLowerCase() === "successful"
                  ? " text-success"
                  : "text-danger" && payment.status.toLowerCase() === "pending"
                  ? " text-secondary-400"
                  : "text-danger" && payment.status.toLowerCase() === "refunded"
                  ? " text-danger"
                  : "text-danger"
              } font-semibold text-2xl`}
            >
              {payment.amount}
            </span>
            <Text
              fontSize="standard"
              variant="standard"
              className="text-lg"
              fontWeight="font-[400]"
              textColor="text-text-primary-50"
            >
              {payment.status}
            </Text>
          </div>
          <div className="grid gap-3">
            <div className="border-b border-border-25 pb-2">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-base text-start"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                Transaction details
              </Text>
            </div>
            <div className="flex flex-col gap-2"></div>
            <div className="flex items-center justify-between">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Transaction ID
              </Text>
              <div className=" flex items-center gap-2">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-sm"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  #{payment.id}
                </Text>
                <Image
                  width={20}
                  height={20}
                  src="/icons/Copy.svg"
                  alt="Copy image"
                  className=" cursor-pointer"
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Date
              </Text>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                {payment.date}
              </Text>
            </div>
            <div className="flex items-center justify-between">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Time
              </Text>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                {payment.time}
              </Text>
            </div>
            <div className="flex items-center justify-between">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Amount
              </Text>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                {payment.amount}
              </Text>
            </div>
            <div className="flex items-center justify-between">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Type
              </Text>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                {payment.type}
              </Text>
            </div>
            <div className="flex items-center justify-between">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Items
              </Text>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                Debit
              </Text>
            </div>
            <div className="flex items-center justify-between">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Status
              </Text>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-sm"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                {payment.status}
              </Text>
            </div>
          </div>
        </div>
        {/* <Button className="bg-secondary-600 py-5">Go to order page</Button> */}
        <div className="flex justify-center pt-2">
          <Link
            href="/orders?tab=all"
            className="bg-secondary-600 py-[10px] w-[250px] text-center text-white rounded-full"
          >
            Go to order page
          </Link>
        </div>
      </div>
    </>
  );
};

export default TransactionDetails;
