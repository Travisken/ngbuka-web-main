"use client";

import { Button, Dropdown, MrHeading, Text } from "@/components/Atoms";
import CardItems from "@/components/Molecules/CardItems";
import CategorieHeader from "@/components/Molecules/CategorieHeader";
import Filter from "@/components/Molecules/Filter";
import Image from "next/image";
import { useState } from "react";

const Categories = () => {
  // search results
  const [product, setProduct] = useState({
    list: 2,
  });
  return (
    <>
      <section className={`flex items-start bg-[#FFFBF5] px-10 mt-12 gap-5`}>
        <aside
          className={`sticky top-28 left-0 grid gap-10 mb-5 ${
            product.list === 0 ? "hidden" : "block"
          }`}
        >
          <div className="bg-white p-5 rounded-lg">
            <div className="flex items-center justify-between border-b pb-4">
              <Image
                src="/icons/ListDashes_r.svg"
                width={14}
                height={14}
                alt="arrow up"
              />
              <MrHeading
                type="h2"
                fontFamily="font-fira"
                className="text-2xl text-text-primary-100 leading-[18px] font-[600]"
              >
                All Categories
              </MrHeading>
              <Image
                src="/icons/angle-up-b.svg"
                width={14}
                height={14}
                alt="arrow up"
              />
            </div>
          </div>
          <Filter />
        </aside>
        <main className=" flex-1 grid gap-8">
          <CategorieHeader available="500" headText="oil and lubricants" />

          {product.list === 0 ? (
            <div className="flex h-auto w-full items-center justify-center">
              <div className="flex items-center justify-center flex-col gap-5">
                <div className="bg-white py-7 px-5 rounded-full">
                  <Image
                    width={50}
                    height={50}
                    src="/icons/Illustration.svg"
                    alt="Illustration"
                    className="object-cover object-center"
                  />
                </div>
                <div className="text-center">
                  <Text
                    variant="standard"
                    className="text-sm leading-[27px]"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    You searched for - <b>‘tyres44’</b>
                  </Text>
                  <Text
                    variant="standard"
                    className="text-sm leading-[1.6rem] text-center"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    We couldn’t find a match for your search. Check your
                    spelling and try again, <br /> or try using different words
                  </Text>
                </div>
                <Button className="w-full py-3">Back to Home</Button>
              </div>
            </div>
          ) : (
            <CardItems />
          )}
        </main>
      </section>
    </>
  );
};

export default Categories;
