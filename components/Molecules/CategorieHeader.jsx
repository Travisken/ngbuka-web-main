"use client";

import Image from "next/image";
import { MrHeading, Text } from "../Atoms";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CategorieHeader = ({ headText, data, available }) => {
  return (
    <section className="relative h-[200px] rounded-[20px]">
      <Image
        src="/images/products-range1-15592927300420001.png"
        width={800}
        height={600}
        alt="about us image"
        className="w-full rounded-2xl relative h-full object-fit "
      />
      <div className="absolute top-2/4 -translate-y-2/4 px-5">
        <div className="flex items-center gap-4">
          <MrHeading
            type="h2"
            fontFamily="font-fira"
            className="text-3xl text-white leading-[18px] font-[700]"
          >
            {headText}
          </MrHeading>
          <Text
            variant="standard"
            className="text-lg leading-[27px]"
            fontWeight="font-[400]"
            textColor="text-background-white "
          >
            ({available} products)
          </Text>
        </div>
      </div>

      <div className="absolute right-0 top-2/3 translate-y-2/5 px-5">
        <div className="border w-full max-w-[400px] rounded-full px-5 py-2 flex items-center gap-px bg-white">
          Sort by:
          <Select>
            <SelectTrigger className="w-auto max-w-[400px] border-none px-1 py-0 h-auto">
              <SelectValue placeholder="Select price" />
            </SelectTrigger>
            <SelectContent align='end' className="w-[180px] bg-white font-semiboold rounded-lg mt-5">
              <SelectGroup>
                <SelectItem value="Recently added">Recently added</SelectItem>
                <SelectItem value="Price - low to high">Price - low to high</SelectItem>
                <SelectItem value="Price - high to low">Price - high to low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default CategorieHeader;
