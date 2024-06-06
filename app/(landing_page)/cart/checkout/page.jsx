"use client";

import { Button, InputBox, Text } from "@/components/Atoms";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CheckoutTab from "@/components/Molecules/CheckoutTab";

const Checkout = () => {
  const router = useRouter();
  // const { id } = router.params;

  const [count, setCount] = useState(1);

  function currencyFormat(num) {
    return "₦" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const itemPrice = 45000;
  const currentPrice = count * itemPrice;
  console.log(currencyFormat(currentPrice));

  const handleCheckChange = () => {
    let num = 1;
    console.log(num++);
  };
  return (
    <div className="mt-12 px-5 lg:px-24 pb-12">
      <div className="lg:flex-row flex-col flex gap-5 w-full">
        <div className="w-full">
          <div className="bg-white p-5 rounded-2xl flex items-center">
            <Text
              fontSize="standard"
              variant="standard"
              className="text-4xl"
              fontWeight="font-[700]"
              textColor="text-text-primary-50"
            >
              Checkout
            </Text>
          </div>
          <div className="">
            <CheckoutTab />
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full md:max-w-[300px]">
          <div className="bg-white py-3 px-5 flex flex-col gap-3 rounded-2xl">
            <Text
              fontSize="standard"
              variant="standard"
              className="text-lg border-b pb-1"
              fontWeight="font-[600]"
              textColor="text-text-primary-100"
            >
              Summary
            </Text>
            <div className="flex items-center justify-between">
              <Text
                fontSize="standard"
                variant="standard"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                No. of items
              </Text>
              <span>3</span>
            </div>

            <div className="flex items-center justify-between">
              <Text
                fontSize="standard"
                variant="standard"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Shipping
              </Text>
              <span>---</span>
            </div>

            <div className="flex items-center justify-between">
              <Text
                fontSize="standard"
                variant="standard"
                fontWeight="font-[400]"
                textColor="text-text-primary-50"
              >
                Total
              </Text>
              <span>₦50,490</span>
            </div>

            <div className="flex items-center justify-between">
              <InputBox type='text' placeholder='Enter discount code here' className='w-full max-w-[185px] -py-2 text-sm'/>
              <span className="cursor-pointer text-lg text-primary-400">Apply</span>
            </div>
          </div>
          <Button className="bg-secondary-100">Pay now</Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
