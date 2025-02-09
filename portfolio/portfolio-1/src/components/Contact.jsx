import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-12 place-items-center">
          <div className="text-gray-300">
            <div className="my-3">
              <h3 className="text-4xl font-semibold text-white mb-5">
                About <span className="text-purple-500">Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto text-lg text-gray-200">
                I’m a passionate full-stack developer with experience in
                creating dynamic and responsive web applications. I enjoy
                working on both frontend and backend technologies to build
                end-to-end solutions.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/60 p-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl font-semibold text-white">
                  11<span>+</span>
                </h3>
                <p className="text-xs md:text-base text-gray-400">Projects</p>
              </div>

              <div className="bg-gray-800/60 p-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl font-semibold text-white">
                  1.5<span>+</span>
                </h3>
                <p className="text-xs md:text-base text-gray-400">
                  Years of Experience
                </p>
              </div>

              <div className="bg-gray-800/60 p-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl font-semibold text-white">
                  10<span>+</span>
                </h3>
                <p className="text-xs md:text-base text-gray-400">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>

          <form
            action="https://getform.io/f/placeYourEndpointHere"
            method="POST"
            className="max-w-xl p-8 rounded-lg bg-purple-700/20 shadow-lg"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2 text-center">
              Let's Connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-4 w-full rounded-md text-white border-2 border-purple-600 p-3  focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-4 w-full rounded-md text-white border-2 border-purple-600 p-3  focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-4 w-full rounded-md text-white border-2 border-purple-600 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
