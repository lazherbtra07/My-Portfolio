"use client";
import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";
import AOS from "aos";
import "aos/dist/aos.css";

const projectData = [
  {
    id: 1,
    title: "React Website Bank-CDLB",
    description: "Project 1 Description",
    image: "/B2BC1520-E6B3-452E-BA10-BF615D28E707_1_201_a.jpeg",
    tag: ["All", "Web"],
    getUrl: "https://github.com/lazherbtra07/CDLB.Bank?tab=readme-ov-file",
    previewUrl: "https://cdlb-bank.netlify.app/",
  },
  {
    id: 2,
    title: "SmartFox Website",
    description: "Project 2 Description",
    image: "/F4175988-96E8-4BD7-AE2F-3B067A39877A.png",
    tag: ["All", "web", "Design"],
    getUrl:
      "https://github.com/lazherbtra07/SamrtFox-website?tab=readme-ov-file",
    previewUrl: "https://smart-fox-website.netlify.app/ ",
  },
  {
    id: 3,
    title: "ProApp Application",
    description: "Project 3 Description",
    image: "/5A21C7C9-60A0-4435-93AF-BF0CAC3B71FA_1_201_a.jpeg",
    tag: ["All", "web", "Design"],
    getUrl: "https://github.com/lazherbtra07/ProSite-NextJs",
    previewUrl: "https://prosite-nextjs.netlify.app",
  },
  {
    id: 4,
    title: "Bread Ordering Application",
    description: "Project 4 Description",
    image: "/6E3FD05E-961E-4367-8631-2A80EB108933_1_201_a.jpeg",
    tag: ["All", "web", "Design"],
    getUrl: "https://github.com/lazherbtra07/Bread-nextJs",
    previewUrl: "https://bread-nextjs-project.netlify.app",
  },
  {
    id: 5,
    title: "Restaurant project",
    description: "Project 5 Description",
    image: "/B1F74189-5D9F-445B-A0C3-454D8718A681_1_201_a.jpeg",
    tag: ["All", "Web"],
    getUrl:
      "https://github.com/lazherbtra07/Restaurant-project?tab=readme-ov-file",
    previewUrl: "https://restrent-project.netlify.app/",
  },
  {
    id: 6,
    title: "XYZ React Project",
    description: "Project 6 Description",
    image: "/56F6D553-FBC1-43FF-91CD-382609EA4A1B.png",
    tag: ["All", "Web"],
    getUrl:
      "https://github.com/lazherbtra07/XYZ-dubai-project?tab=readme-ov-file",
    previewUrl: "https://extra-xyz.netlify.app/",
  },
];

export const Project = () => {
  const [tag, setTag] = useState("All");

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  const handeltagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProject = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <div id="project">
      <h2 className=" text-center text-4xl font-bold text-white mt-4 mb-8">
        My Project
      </h2>
      <div className=" text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handeltagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handeltagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handeltagChange}
          name="Design"
          isSelected={tag === "Design"}
        />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProject.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            getUrl={project.getUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};
