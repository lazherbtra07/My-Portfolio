import React from "react";

export const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white bg-purple-500"
    : "text-[#adb7be] border-slate-600 hover:border-white";
  return (
    <div>
      <button
        className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  );
};
