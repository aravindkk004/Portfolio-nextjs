"use client"
import { projects } from "@/utils/projects";
import Project from "./Project";
import Gradient from "../Gradient";
import { useState } from "react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);
  return (
    <section
      id="projects"
      className="relative bg-secondary md:pt-[130px] md:pb-[140px] pt-[100px] pb-[50px] md:px-[40px] px-[20px]"
    >
      <Gradient />
      <div>
        <h2 className="text-white text-4xl font-bold text-center">Projects</h2>
        <div className="mt-20 flex flex-wrap gap-20 justify-center">
          {displayedProjects.map((project, index) => (
            <Project key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
        <div className="w-full flex justify-center my-10">
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="text-white border px-5 py-2 border-white rounded-md hover:bg-white hover:text-secondary transition duration-300"
            >
              View More Projects
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
