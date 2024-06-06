import React from 'react'
import { Text } from '../Atoms'
import Image from 'next/image'

const WalletCard = () => {
  return (
    <div className="bg-white p-5 rounded-2xl flex flex-col  gap-5 w-full border  border-border-25 ">
              <div className="flex items-center gap-3">
                {/* <div className="w-10 h-10 bg-secondary-400"> */}
                <Image
                  width={34}
                  height={34}
                  src="/icons/Wallet-f.svg"
                  alt="Truck img"
                  className="object-cover object-center"
                />
                {/* </div> */}
                <div className="">
                  <Text
                    fontSize="standard"
                    variant="standard"
                    className="text-lg"
                    fontWeight="font-[600]"
                    textColor="text-text-primary-50"
                  >
                    Your wallet
                  </Text>
                  <Text
                    fontSize="standard"
                    variant="standard"
                    className="text-sm"
                    fontWeight="font-[400]"
                    textColor="text-text-primary-50"
                  >
                    Pay directly from your Ngbuka wallet
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-between rounded bg-secondary-25 p-2">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-base flex flex-col md:flex-row"
                  fontWeight="font-[400]"
                  textColor="text-text-primary-50"
                >
                  Avalaible balance:{" "}
                  <span className="font-semibold">₦50,000</span>
                </Text>

                <div className="flex items-center md:text-lg font-normal text-primary-400 gap-1">
                  <p>Top-up wallet</p>
                  <span className="text-lg">+</span>
                </div>
              </div>
            </div>
  )
}

export default WalletCard