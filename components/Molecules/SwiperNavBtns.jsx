import Image from 'next/image';
import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SlideNavBttons() {
  const swiper = useSwiper();

  return (
    <div className="flex gap-8 items-center">
    <button onClick={() => swiper.slidePrev()} className="bg-secondary-400 py-4 px-7 rounded-full">
      <Image
        width={20}
        height={20}
        src="/icons/Button icons-l.svg"
        alt="Illustration"
        className="object-cover object-center"
      />
    </button>
    <button onClick={() => swiper.slideNext()} className="bg-secondary-400 py-4 px-7 rounded-full">
      <Image
        width={20}
        height={20}
        src="/icons/Button icons-r.svg"
        alt="Illustration"
        className="object-cover object-center"
      />
    </button>
  </div>
  );
}