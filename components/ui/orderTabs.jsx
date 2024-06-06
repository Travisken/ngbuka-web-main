// components/Tabs.js
"use client";

import { useState } from 'react';

const Tabs = ({ tabContents }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col w-full">
      <ul className="tabs border-b border-zinc-200 flex justify-between">
        {tabContents.map((content, index) => (
          <li
            key={index}
            className={`tab ${activeTab === index ? 'bg-[#1a1a7a] text-white font-semibold py-3 px-8 cursor-pointer' : 'py-3 px-8 cursor-pointer'}`}
            onClick={() => handleTabClick(index)}
          >
            {content.label}
          </li>
        ))}
      </ul>
      <div className="tab-content w-full flex flex-1 pt-4">
        {tabContents[activeTab].component}
      </div>
    </div>
  );
};

export default Tabs;
