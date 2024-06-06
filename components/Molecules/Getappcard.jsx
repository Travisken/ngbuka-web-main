"use client";
import { MrHeading } from '../Atoms'
import Image from 'next/image'

export const Getappcard = () => {
  return (
    <section className="bg-white lg:w-[250px] rounded-xl px-3 flex flex-col max-w-[300px]">
          <div className="pb-2 pt-4 border-b">
            <MrHeading
              type="h4"
              fontWeight="font-extrabold"
              className="text-base text-primary-dark-50"
            >
              Get the app
            </MrHeading>
          </div>
          <div className="py-5 flex flex-col items-center">
            <Image
              src="/images/Vector_1.png"
              width={206}
              height={62}
              alt="googlem image"
            />
            <Image
              src="/images/vector.png"
              width={190}
              height={62}
              alt="app store image"
              className=""
            />
          </div>
        </section>
  )
}
