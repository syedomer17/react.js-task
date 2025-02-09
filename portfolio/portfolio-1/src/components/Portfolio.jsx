import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "UI for frontend development using React.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description: "A fullstack application built with Node.js and MongoDB.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project4,
    title: "Project #3",
    description: "An e-commerce platform with various features.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project5,
    title: "Project #4",
    description: "A mobile-friendly application using React Native.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project6,
    title: "Project #5",
    description:
      "A data visualization project using D3.js and other libraries.",
    links: {
      site: "#",
      github: "#",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-4xl font-bold text-gray-200 mb-8 text-center">
        Portfolio
      </h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            
            <div className="w-full md:w-1/2 p-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white text-xl font-bold">View Project</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-3xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6">{project.description}</p>

              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  className="px-6 py-3 text-white font-semibold bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 hover:scale-105 transition-all duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                >
                  <AiOutlineGithub className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
