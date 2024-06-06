import React from "react";
import { MrHeading, Text } from "../Atoms";
import Image from "next/image";

const DeliveryOptions = () => {
  return (
    <div className="bg-white p-3 rounded-2xl flex flex-col gap-3 max-w-[300px]">
      <MrHeading
        type="h5"
        fontWeight=" font-[600]"
        className=" text-text-primary-100  text-lg mb-3 border-b"
      >
        Delivery options
      </MrHeading>
      <div className="flex items-start gap-1 pb-3 border-b">
        <Image
          width={50}
          height={50}
          src="/icons/Truck-r.svg"
          alt="Truck img"
          className="w-fit"
        />
        <div className="flex flex-col gap-[6px]">
          <MrHeading
            type="h5"
            fontWeight=" font-[600] text-xl"
            className=" text-text-primary-100"
          >
            Delivery
          </MrHeading>
          <Text
            variant="standard"
            className="text-sm leading-[22.4px]"
            fontWeight="font-[400]"
            textColor="text-text-primary-50"
          >
            Have your order shipped to your location in state or Out-of-state
          </Text>
          <Text
            variant="standard"
            className="text-sm leading-[22.4px]"
            fontWeight="font-[400]"
            textColor="text-text-primary-50"
          >
            Delivery:<b>2 - 5 working days</b>
          </Text>
        </div>
      </div>
      <div className="flex items-start gap-1">
        <Image
          width={50}
          height={50}
          src="/icons/PersonSimpleWalk-r.svg"
          alt="PersonsimpleWalk"
          className="w-fit"
        />
        <div className="flex flex-col gap-1">
          <MrHeading
            type="h5"
            fontWeight=" font-[600] text-xl "
            className=" text-text-primary-100"
          >
            Self pick-up
          </MrHeading>
          <Text
            variant="standard"
            className="text-sm leading-[22.4px]"
            fontWeight="font-[400]"
            textColor="text-text-primary-50"
          >
            Pick-up your order in person from the store you purchased it from
          </Text>
          <Text
            variant="standard"
            className="text-sm leading-[22.4px]"
            fontWeight="font-[400]"
            textColor="text-text-primary-50"
          >
            Delivery:<b>At your convenience</b>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOptions;
