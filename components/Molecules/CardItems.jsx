"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "/images/mke_picture_ba_s5_a_13_cd2016_73807_3200x1800_res_1280x720-removebg-preview.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "/images/milan-csizmadia-d665gpJZ-cY-unsplash-removebg-preview-removebg-preview.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "/images/toyota-my-toyota-spark-plug-joe01951-removebg-preview (1).png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 4,
    name: "Machined Pencil",
    href: "#",
    price: "$35",
    imageSrc: "/images/image 3.png",
    imageAlt:
      "Hand holding black machined steel pencil with brass tip and top.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "/images/mke_picture_ba_s5_a_13_cd2016_73807_3200x1800_res_1280x720-removebg-preview.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "/images/milan-csizmadia-d665gpJZ-cY-unsplash-removebg-preview-removebg-preview.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "/images/toyota-my-toyota-spark-plug-joe01951-removebg-preview (1).png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 4,
    name: "Machined Pencil",
    href: "#",
    price: "$35",
    imageSrc: "/images/image 3.png",
    imageAlt:
      "Hand holding black machined steel pencil with brass tip and top.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "/images/mke_picture_ba_s5_a_13_cd2016_73807_3200x1800_res_1280x720-removebg-preview.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "/images/milan-csizmadia-d665gpJZ-cY-unsplash-removebg-preview-removebg-preview.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "/images/toyota-my-toyota-spark-plug-joe01951-removebg-preview (1).png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 4,
    name: "Machined Pencil",
    href: "#",
    price: "$35",
    imageSrc: "/images/image 3.png",
    imageAlt:
      "Hand holding black machined steel pencil with brass tip and top.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "/images/mke_picture_ba_s5_a_13_cd2016_73807_3200x1800_res_1280x720-removebg-preview.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "/images/milan-csizmadia-d665gpJZ-cY-unsplash-removebg-preview-removebg-preview.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "/images/toyota-my-toyota-spark-plug-joe01951-removebg-preview (1).png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 4,
    name: "Machined Pencil",
    href: "#",
    price: "$35",
    imageSrc: "/images/image 3.png",
    imageAlt:
      "Hand holding black machined steel pencil with brass tip and top.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "/images/mke_picture_ba_s5_a_13_cd2016_73807_3200x1800_res_1280x720-removebg-preview.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "/images/milan-csizmadia-d665gpJZ-cY-unsplash-removebg-preview-removebg-preview.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "/images/toyota-my-toyota-spark-plug-joe01951-removebg-preview (1).png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 4,
    name: "Machined Pencil",
    href: "#",
    price: "$35",
    imageSrc: "/images/image 3.png",
    imageAlt:
      "Hand holding black machined steel pencil with brass tip and top.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "/images/mke_picture_ba_s5_a_13_cd2016_73807_3200x1800_res_1280x720-removebg-preview.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "/images/milan-csizmadia-d665gpJZ-cY-unsplash-removebg-preview-removebg-preview.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "/images/toyota-my-toyota-spark-plug-joe01951-removebg-preview (1).png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 4,
    name: "Machined Pencil",
    href: "#",
    price: "$35",
    imageSrc: "/images/image 3.png",
    imageAlt:
      "Hand holding black machined steel pencil with brass tip and top.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "/images/mke_picture_ba_s5_a_13_cd2016_73807_3200x1800_res_1280x720-removebg-preview.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "/images/milan-csizmadia-d665gpJZ-cY-unsplash-removebg-preview-removebg-preview.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "/images/toyota-my-toyota-spark-plug-joe01951-removebg-preview (1).png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    reviews: "4.5 (17 reviews)",
  },
  {
    id: 4,
    name: "Machined Pencil",
    href: "#",
    price: "$35",
    imageSrc: "/images/image 3.png",
    imageAlt:
      "Hand holding black machined steel pencil with brass tip and top.",
    reviews: "4.5 (17 reviews)",
  },
];


const CardItems = ({searchValue, activeFilter}) => {
  // const [searchP, setSearchP] = useState({});
  const searchParams = useSearchParams();

  useEffect(() => {
    // setSearchP(products);
  }, []);

 let searchP = products

  const filteredTableData = searchP?.filter((data) => {
      // If there's a search value and a match on status, filter by name

      if (activeFilter === "Best matches") {
        const fullName = `${data.name}`
          .toLowerCase()
          .includes(searchValue?.toLowerCase());
        return fullName;
      }

      return false;
    });
    searchP = filteredTableData;
    if (!searchValue) {
      searchP = products
    }

  console.log(filteredTableData, 'filterd data');


  return (
    <section className="">
      {/* cards */}
      <div className="">
        <div className="mx-auto max-w-2xl pb-16 sm:pb-24 lg:max-w-7xl">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4">
            {searchP?.map((product, index) => (
              <div key={index}>
                <a
                  href={product.href}
                  className="bg-white w-auto h-full rounded-lg group"
                >
                  <div className=" w-full h-[65%] overflow-hidden rounded-tr-lg rounded-tl-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image
                      width={104}
                      height={104}
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full aspect-h-1 aspect-w-1 object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="px-3 grid gap-4">
                    <h3 className="mt-4 text-lg text-gray-700">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <p className="mt-1 text-lg font-medium text-gray-900">
                          {product.price}
                        </p>
                        <div className="flex items-center gap-1 text-xs">
                          <Image
                            width={20}
                            height={20}
                            src="/icons/Star-f.svg"
                            alt="ShoppingCart"
                            className=" object-cover object-center"
                          />
                          <p className="text-xs">{product.reviews}</p>
                        </div>
                      </div>
                      <div className="bg-[#FFF8EF] p-2 text-xs rounded-full">
                        <Image
                          width={20}
                          height={20}
                          src="/icons/ShoppingCart-r.svg"
                          alt="ShoppingCart"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardItems;
