"use client";

import React, { useState } from "react";
import { MrHeading, Text } from "../Atoms";

const faqs = [
  {
    id: 1,
    title: "How does Ngbuka work?",
    content:
      "Ngbuka is a user-friendly app that connects users with mechanics and spare parts dealers in their locality.",
  },
  {
    id: 2,
    title: "How do i get started with Ngbuka",
    content:
      "Simply download the app, create an account, turn your location, start searching through a wide range of mechanics and spare part dealers in your area, you can request for a service, make your bookings and schedule appointments conveniently on the app.",
  },
  {
    id: 3,
    title: "How can i join Ngbuka as a vendor",
    content:
      "To join Ngbuka as a vendor, you need to go through a simple registration process. Click on the “Join as Vendor” button on our app and follow the instructions to create your vendor account. Once registered, our team will review your application, and upon approval, you can start offering your services and products to our users..",
  },
  {
    id: 4,
    title: "Is Ngbuka available in my area",
    content:
      "Yes, Ngbuka operates everywhere in Nigeria. We have Vendors all over the country.",
  },
  {
    id: 5,
    title: "How can I trust mechanics and spare part dealers on Ngbuka",
    content:
      "Ngbuka maintains a thorough screening process to ensure the quality and reliability of the professionals and businesses listed on our platform. Trust us to give you the best.",
  },
  {
    id: 6,
    title: "What if I face any issues with a mechanic or spare parts dealer",
    content:
      "Ngbuka values customer satisfaction and aim to resolve any issues promptly. If you encounter any problem with our Vendors, we encourage you to reach out to our support team and we will assist in resolving the matter and also ensure a satisfactory resolution.",
  },
];


const LandingFAQ = () => {
  const [open, setOpen] = useState(false);
  const [faqId, setFaqId] = useState(1);

  // let value = 1;

  return (
    <div className=" relative  bg-white">
      <div className=" w-[95vw] max-w-[85vw] mx-auto mb-20">
        <div className="text-left lg:text-center pt-[30px] lg:pt-[50px] mb-6">
          <MrHeading
            fontWeight=" font-[600] lg:font-[700] "
            className=" leading-[36px] lg:leading-[72px] text-text-primary-100 text-xl lg:text-5xl"
          >
            Frequently Asked Questions
          </MrHeading>
          <Text
            variant="standard"
            className="text-lg hidden lg:block leading-[27px] mt-[10px] mb-6"
            fontWeight="font-[400]"
            textColor="text-text-primary-50 "
          >
            Do you have questions about our service and want to reach out to us?{" "}
            <br />
            Here are some questions answered for you.
          </Text>
        </div>
        <div className="mt-0 lg:mt-[30px] pb-[30px] lg:pb-[60px]">
          {/* Accordion */}
          <div className="hs-accordion-group grid gap-[14px]">
            {faqs.map((faq) => {
              return (
                <div
                  className="hs-accordion border border-border-25 py-[4px] px-[14px]"
                  id="hs-basic-with-title-and-arrow-stretched-heading-one "
                  key={faq.id}
                >
                  <button
                    className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover: "
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                    onClick={() => {
                      faqs.find((Faq) => {
                        if (faq.id === Faq.id) {
                          setFaqId(Faq.id);
                          console.log(Faq);
                          setOpen(!open);
                         let value = Faq.id
                          console.log(value)
                        }
                      })
                    }}
                  >
                    {faq.title}
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                    className={`hs-accordion-content ${
                      faq.id === faqId && open ? "block" : "hidden"
                    }  w-full  overflow-hidden transition-[height] duration-300`}
                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                  >
                    <Text
                      variant="standard"
                      className="text-sm"
                      fontWeight="font-[500]"
                      textColor="text-text-primary-100 "
                    >
                      {faq.content}
                    </Text>
                  </div>
                </div>
              );
            })}
          </div>
          {/* End of Accordion */}
        </div>
      </div>
    </div>
  );
};

export default LandingFAQ;
