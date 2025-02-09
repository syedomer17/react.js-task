import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Code For India Foundation",
    period: "2024 - present",
    description: "Full stack Web Developer.",
  },
  {
    company: "The Hacking School",
    period: "2024 - Present",
    description: "Web Developer.",
  },
  {
    company: "Third Company",
    period: "2020 - Present",
    description: "Description of your experience in this company.",
  },
  {
    company: "Fourth Company",
    period: "2020 - Present",
    description: "Description of your experience in this company.",
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[800px] mx-auto">
      <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg mb-12">
        Experience
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(128, 90, 213, 0.4)",
                boxShadow: "0px 6px 20px rgba(128, 90, 213, 0.6)",
              }}
              className="border border-purple-500 p-8 rounded-xl shadow-lg transition-all duration-300 bg-gray-900/60 cursor-pointer backdrop-blur-lg hover:scale-105"
            >
              <h2 className="text-gray-100 text-3xl font-bold">
                {experience.company}
              </h2>
              <p className="text-gray-400 text-lg italic">
                {experience.period}
              </p>
              <p className="text-gray-300 mt-4 leading-relaxed">
                {experience.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
