"use client";

import React, { useState, useContext } from 'react';
import Tab1 from '../Dashboard/tab1_form';
import Tab2 from '../Dashboard/tab2_form';
import Tab3 from '../Dashboard/tab3_form';
import Image from "next/image";
import { StepperContext } from '@/app/(Dashboard)/Dashboard/home/page';

const SectionsNav2 = ({ 
  }) => { // Receive onNext and onPrev as props
  // const [step, setStep] = useState(1);
  let { step } = useContext(StepperContext);

  const handleNext = () => {
    setStep(step + 1);
    onNext(); // Call onNext callback
  };

  const handlePrev = () => {
    setStep(step - 1);
    onPrev(); // Call onPrev callback
  };

  return (
    <div>
      <div className="flex justify-between border-b">
        <span className={`text-sm ${step >= 1 ? "text-black px-2 py-3 border-b-4 border-b-primary-400  font-semibold" : "text-gray-400  px-2 py-3 "} ${step > 1 ? "completed  px-2 py-3 " : " px-2 py-3 "}`}>Profile { step > 1 ? ( <> <Image height={20} width={20} src="/icons/CheckCircle-r.svg"></Image> </> ) : (<> </>)}</span>
        <span className={`text-sm ${step >= 2 ? "text-black px-2 py-3 border-b-4 border-b-primary-400 font-semibold" : (step === 2 ? "text-gray-400 px-2 py-3 " : "text-gray-200 px-2 py-3 ")} ${step > 2 ? "completed px-2 py-3 " : " px-2 py-3 "}`}>Payment{ step > 2 ? ( <> <Image height={20} width={20} src="/icons/CheckCircle-r.svg"></Image> </> ) : (<> </>)}</span>
        <span className={`text-sm ${step === 3 ? "text-black px-2 py-3 border-b-4 border-b-primary-400 font-semibold" : "text-gray-200  px-2 py-3 "} ${step === 3 ? "active  px-2 py-3 " : " px-2 py-3 "}`}>Confirmation </span>
      </div>
      {step === 1 && <Tab1 onNext={handleNext} />}
      {step === 2 && <Tab2 onNext={handleNext} onPrev={handlePrev} />}
      {step === 3 && <Tab3 />}
      <style jsx>{`
        .completed {
          color: #2BAF29; /* Change color for completed steps */
          border: none;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .active {
          /* Add different styling for active step */
        }
      `}</style>
    </div>
  );
};

export default SectionsNav2;
