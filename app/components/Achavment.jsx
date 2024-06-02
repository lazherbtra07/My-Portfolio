"use client";
import dynamic from "next/dynamic";
import React from "react";
import AnimatedNumber from "react-animated-numbers";

const animatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchavmentList = [
  {
    metric: "Projects",
    value: "50",
    postfix: "",
  },
  {
    prefix: "",
    metric: "Users",
    value: "25",
  },
  {
    metric: "Awards",
    value: "10",
  },
  {
    metric: "Years",
    value: "5",
  },
];

export const Achavment = () => {
  return (
    <div className=" py-8 px-4 hidden md:block xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353f] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
        {AchavmentList.map((achavment, index) => {
          return (
            <div
              key={index}
              className=" flex flex-col items-center justify-center mx-4"
            >
              <h2 className=" flex items-center justify-center text-white text-4xl font-bold">
                {achavment.prefix}
                <AnimatedNumber
                  includeComma
                  animateToNumber={achavment.value}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tinsion: 140 * (index + 1),
                    };
                  }}
                />
                {achavment.postfix} +
              </h2>
              <p className=" text-[#adb7be] text-base">{achavment.metric} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
