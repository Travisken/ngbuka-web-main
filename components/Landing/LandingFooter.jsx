"use client";

import Image from "next/image";
import React from "react";
import { Text } from "../Atoms";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LandingFooter = () => {
  const getFullYear = new Date().getFullYear();

  const aboutLinks = [
    {
      text: "Our services",
    },
    {
      text: "Return policy",
    },
    {
      text: "Privacy policy",
    },
    {
      text: "Terms and condition",
    },
    {
      text: "Contact us",
    },
    {
      text: "Help & support",
    },
  ];

  const earnLinks = [
    {
      text: "Sell your products",
    },
    {
      text: "Register as a mechanic",
    },
    {
      text: "Partnerships",
    },
  ];

  const router = useRouter();

  return (
    <>
      <div className=" relative bg-primary-25 py-[30px] lg:py-[40px]">
        <div className=" w-[95vw] max-w-[85vw] mx-auto">
          <div className=" grid gap-7">
            <div className=" grid lg:grid-cols-4 items-start lg:space-x-32">
              <div className=" lg:w-[22vw]">
                <Image
                  src="/images/footer_logo.png"
                  width={90}
                  height={27}
                  alt="Footer Logo"
                />
                <Text
                  variant="standard"
                  className="text-sm  leading-[19px] mt-[10px] mb-6 "
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50 "
                >
                  We are a leading platform that bridges the gap between users
                  and the automotive world, connecting vehicle owners,
                  professional auto mechanics and trusted spare part dealers
                  together. With our user-friendly interface and extensive
                  network, we strive to make your automotive journey pleasant
                  and stress free.
                </Text>

                <Link
                  href="/"
                  className="text-primary-400 font-normal text-lg pt-10"
                >
                  learn more
                </Link>
              </div>
              <div className=" ml-0">
                <Text
                  variant="standard"
                  className="text-sm leading-[19px] mt-[10px] "
                  fontWeight="font-[600]"
                  textColor="text-text-primary-100 "
                >
                  About Us
                </Text>

                {aboutLinks.map((ALink, index) => {
                  return (
                    <div key={index}>
                      <Text
                        variant="standard"
                        className="text-sm  leading-[19px] mt-[10px] cursor-pointer "
                        fontWeight="font-[400]"
                        textColor="text-text-primary-50 "
                      >
                        {ALink.text}
                      </Text>
                    </div>
                  );
                })}
              </div>
              <div className=" ml-0">
                <Text
                  variant="standard"
                  className="text-sm leading-[19px] mt-[10px] "
                  fontWeight="font-[600]"
                  textColor="text-text-primary-100 "
                >
                  Earn with ngbuka
                </Text>
                {earnLinks.map((ELink, index) => {
                  return (
                    <div key={index}>
                      <Text
                        variant="standard"
                        className="text-sm  leading-[19px] mt-[10px]  cursor-pointer"
                        fontWeight="font-[400]"
                        textColor="text-text-primary-50 "
                      >
                        {ELink.text}
                      </Text>
                    </div>
                  );
                })}
              </div>
              <div>
                <Text
                  variant="standard"
                  className="text-sm  leading-[19px] mt-[10px] "
                  fontWeight="font-[600]"
                  textColor="text-text-primary-100 "
                >
                  Contact
                </Text>
                <Text
                  variant="standard"
                  className="text-sm  leading-[19px] mt-[10px] "
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50 "
                >
                  Plot 192 Trans Amadi Industrial Layout, Port Harcourt.
                </Text>
                <Text
                  variant="standard"
                  className="text-sm  leading-[19px] mt-[10px] flex items-center"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50 "
                >
                  +234 902 7473 477 +234 904 9573 375
                </Text>
                <Text
                  variant="standard"
                  className="text-sm  leading-[19px] mt-[10px] "
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50 "
                >
                  info@ngbuka.com
                </Text>
              </div>
            </div>
            {/* socials */}
            <div className=" flex flex-row-reverse gap-5 items-end justify-between">
              <div className="flex gap-2 flex-col items-start">
                <Text
                  variant="standard"
                  className="text-sm leading-[19px] mt-[10px] text-center"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50 "
                >
                  FOLLOW US
                </Text>
                <div className=" flex items-center justify-center gap-10 pt-5">
                  <div className=" flex items-center cusor-pointer">
                    <Image
                      src="/images/FaceBook.png"
                      width={50}
                      height={50}
                      alt="Facebook Social"
                      className="cursor-pointer"
                      onClick={() => router.push(`https://web.facebook.com/people/Ngbuka-Ng/pfbid0LZiqdQW3ngx2V6wLf9nZrD5vqU2xvbPoU57QurEVMqCBaDRP2tqoPD7CRRKGzok3l/?mibextid=ZbWKwL`)}
                    />
                  </div>
                  <div className=" flex items-center cusor-pointer">
                    <Image
                      src="/images/LinkedIn.png"
                      width={50}
                      height={50}
                      alt="LinkedIn Social"
                      className="cursor-pointer"
                      onClick={() => router.push(`https://www.tiktok.com/@ngbuka_ng?_r=1&_d=e0kfd6gm6mh57k&sec_uid=MS4wLjABAAAAPPuUNkMGuU1UkPbmtcBFXcF3ydNn3TyQ3Zt2EVXcu2dJRiQ5xwtuZpPNmWuWmy9W&share_author_id=7364371111645381638&sharer_language=en&source=h5_m&u_code=ee12c07di0eam7&timestamp=1715266862&user_id=7364371111645381638&sec_user_id=MS4wLjABAAAAPPuUNkMGuU1UkPbmtcBFXcF3ydNn3TyQ3Zt2EVXcu2dJRiQ5xwtuZpPNmWuWmy9W&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7315087809714145029&share_link_id=7b20b4b6-4f86-4a9d-ba3f-cab88ef40c4a&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5&enable_checksum=1`)}
                    />
                  </div>{" "}
                  <div className=" flex items-center cusor-pointer">
                    <Image
                      src="/images/instagram.png"
                      width={50}
                      height={50}
                      alt="Instagram Social"
                      className="cursor-pointer"
                      onClick={() => router.push(`https://www.instagram.com/ngbuka_ng?utm_source=qr&r=nametag`)}
                    />
                  </div>{" "}
                  <div className=" flex items-center">
                    <Image
                      src="/images/Twitter.png"
                      width={50}
                      height={50}
                      alt="Twitter Social"
                      className="cursor-pointer"
                      onClick={() => router.push(`https://twitter.com/Ngbuka_ng`)}
                    />
                  </div>
                </div>
              </div>
              <Text
                variant="standard"
                className="text-sm leading-[19px] mt-[10px] text-center"
                fontWeight="font-[400]"
                textColor="text-text-primary-50 "
              >
                (C) {getFullYear} Ngbuka
              </Text>

              <div className="flex flex-col gap-5 items-start">
                <Text
                  variant="standard"
                  className="text-sm leading-[19px] mt-[10px] text-center"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50 "
                >
                  GET THE APP
                </Text>
                <div className="flex items-end gap-5 w-fit">
                 <div className="h-[3.2rem]">
                 <Image
                    src="/images/Vector_1.png"
                    width={180}
                    height={62}
                    alt="googlem image"
                    className=" "
                  />
                 </div>
                  <Image
                    src="/images/Vector.png"
                    width={180}
                    height={62}
                    alt="app store image"
                    className=" "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingFooter;
