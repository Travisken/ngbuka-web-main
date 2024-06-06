"use client";

import React from "react";
import { Checkbox, InputBox, MrHeading, Text } from "../Atoms";

const Filter = () => {
  return (
    <>
      <section className="bg-white p-5 rounded-lg border h-fit box-border">
        <MrHeading
          type="h1"
          fontFamily="font-fira"
          className="text-2xl text-primary-dark pb-4 mb-8  border-b leading-[18px] font-lato font-semibold"
        >
          Filters
        </MrHeading>
        <section>
          <div className="px-3 grid gap-3">
            <Text
              variant="standard"
              className="text-xl border-b"
              fontWeight="font-[400]"
              textColor="text-text-primary-50"
            >
              STATE
            </Text>
            <Text
              variant="standard"
              className="text-xl"
              fontWeight="font-[400]"
              textColor="text-text-primary-50"
            >
             CITY
            </Text>
          </div>
        </section>
      </section>
    </>
  );
};

export default Filter;
