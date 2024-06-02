import React from "react";

export const Tabbutton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#adb7be] ";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses} `}>
        {children}
      </p>
    </button>
  );
};
