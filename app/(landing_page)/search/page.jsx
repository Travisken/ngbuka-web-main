"use client";

import { Button, MrHeading, Text } from "@/components/Atoms";
import CardItems from "@/components/Molecules/CardItems";
import Filter from "@/components/Molecules/Filter";
import Items from "@/components/Molecules/Items";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { searchData } from "@/libs/action";
import PagePagination from "@/components/Molecules/Pagination";

const Search = () => {
  const limit = 10;
  // search results
  const [product, setProduct] = useState({
    list: 1,
  });
  const [activeFilter, setActiveFilter] = useState('Best matches');
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  const searchParams = useSearchParams();

  // useEffect(() => {
  //   setActive(searchParams.get("filter"));
  // }, [searchParams]);

  const activeFilters = (value) => {
    setActiveFilter(value);
    window.history.pushState(null, " ", `?filter=${value}`);
  }
  
  useEffect(() => {
    setSearchValue(searchParams.get("searchQuery"));
    setPage(searchParams.get("page"));

    const fetchSearchData = async () => {
      try {
        const newData = await searchData({limit, page, query: searchValue});
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSearchData();
  }, [page, searchParams, searchValue]);
  
  console.log(data, 'search data');
  console.log(searchParams.get, 'search data');

 

  return (
    <>
      <section
        className={`flex items-start bg-[#FFFBF5] px-24 pt-32 pb-24 gap-5`}
      >
        <aside
          className={`sticky top-28 left-0 grid gap-10 mb-5 ${
            product.list === 0 ? "hidden" : "block"
          }`}
        >
          <div className="bg-white p-5 rounded-lg">
            <div className="flex items-center justify-between border-b pb-4 gap-2">
              <Image
                src="/icons/ListDashes_r.svg"
                width={14}
                height={14}
                alt="arrow up"
              />
              <MrHeading
                type="h3"
                fontFamily="font-fira"
                className="text-2xl text-text-primary-100 font-[600]"
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
        <main className=" flex-1 grid gap-10">
          <div className="bg-white p-4 rounded-lg flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <MrHeading
                type="h2"
                fontFamily="font-fira"
                className="text-xl text-text-primary-100 leading-[18px] font-[600]"
              >
                Search results
              </MrHeading>
              {!searchValue ? <span>
                (0 match found)
              </span> : <span>
                (300 matche(s) found for <b>‘{searchValue}’</b>)
              </span>}
            </div>
            <div className={`${searchValue === 'love' && 'hidden'} border rounded-full px-5 py-2 flex items-center`}>
              <span className="text-sm font-normal">Sort by:</span>
              <div className="font-semibold">
                <Select onValueChange={activeFilters} value={activeFilter} defaultValue="Best matches">
                  <SelectTrigger className="w-[auto] border-none px-1 py-0 h-auto">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent className="w-[180px] bg-white rounded-lg mt-8">
                    <SelectGroup>
                      <SelectItem value="Best matches">Best matches</SelectItem>
                      <SelectItem value="Recently added">Recently added</SelectItem>
                      <SelectItem value="Price - low to high">
                        Price - low to high
                      </SelectItem>
                      <SelectItem value="Price - high to low">
                        Price - high to low
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

{/*TODO check if the searched value it equal to the list of search datas */}
          {searchValue === 'love' ? (
            <div className="">
              <div className="flex h-auto w-full items-center justify-center mb-10">
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
                      You searched for - <b>‘{searchValue}’</b>
                    </Text>
                    <Text
                      variant="standard"
                      className="text-sm leading-[1.6rem] text-center"
                      fontWeight="font-[400]"
                      textColor="text-text-primary-50"
                    >
                      We couldn’t find a match for your search. Check your
                      spelling and try again, <br /> or try using different
                      words
                    </Text>
                  </div>
                  <Button className="w-full py-3">Back to Home</Button>
                </div>
              </div>
              {/* <Items text="Best Seller" url="/Categories" /> */}
            </div>
          ) : (
           <>
            <CardItems searchValue={searchValue} activeFilter={activeFilter}/>
            <PagePagination searchValue={searchValue} page={page}/>
           </>
          )}
        </main>
      </section>
    </>
  );
};

export default Search;
