"use client";
import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import { Tabbutton } from "./Tabbutton";
import AOS from "aos";
import "aos/dist/aos.css";

const tab_Data = [
  {
    titlle: "skiils",
    id: "skills",
    content: (
      <ul className=" list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Figma</li>
      </ul>
    ),
  },
  {
    titlle: "Education",
    id: "Education",
    content: (
      <ul className=" list-disc pl-2">
        <li>Frontend Academy of Code</li>
        <li>Uivercity of Mohemmed Boudiaf, Msila</li>
      </ul>
    ),
  },
  {
    titlle: "Experionce",
    id: "Experionce",
    content: (
      <ul className=" list-disc pl-2">
        <li>Frontend Developer web3pros</li>
        <li>Freelancer Project</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  const [tab, setTap] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTapChange = (id) => {
    startTransition(() => {
      setTap(id);
    });
  };
  return (
    <section id="about" className=" text-white">
      <div className="lg:grid w-fit md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <div data-aos="zoom-in" data-aos-delay="200">
          <Image
            className="w-full lg:h-[550px] xl:h-auto"
            src="/about-image.webp"
            width={500}
            height={500}
          />
        </div>
        <div className=" mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className=" text-4xl md:mt-5 text-center lg:text-start font-bold text-white mb-4">
            About Me
          </h2>
          <p
            data-aos="flip-up"
            data-aos-delay="200"
            className=" text-base md:text-lg text-center lg:text-start "
          >
            I am a ui/ux designer and web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, Figma,
            HTML, CSS, and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>
          <div
            data-aos="flip-up"
            data-aos-delay="200"
            className=" flex flex-row mt-2 "
          >
            <Tabbutton
              selectTab={() => handleTapChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </Tabbutton>
            <Tabbutton
              selectTab={() => handleTapChange("Education")}
              active={tab === "Education"}
            >
              {" "}
              Education{" "}
            </Tabbutton>
            <Tabbutton
              selectTab={() => handleTapChange("Experionce")}
              active={tab === "Experionce"}
            >
              {" "}
              Experionce{" "}
            </Tabbutton>
          </div>
          <div className=" mt-8">
            {tab_Data.find((t) => t.id == tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
