import React from "react";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center p-6 md:p-16 text-sm md:text-lg mt-12 bg-gray-900/50 rounded-t-lg shadow-lg">
      <div className="text-center md:text-left space-y-4">
        <h3 className="text-3xl text-white font-semibold tracking-wide">
          Syed Omer Ali
        </h3>
        <div className="flex justify-center md:justify-start gap-6 text-gray-400 text-4xl">
          <a
            href="https://github.com/syedomer17"
            className="hover:text-purple-500 transition-transform duration-300 hover:scale-110"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://www.instagram.com/syedomer934/profilecard/?igsh=bGxqaGcxOXZ1NXg2"
            className="hover:text-pink-500 transition-transform duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <p className="text-gray-400 text-center md:text-right mt-4 md:mt-0">
        © 2024 Syed Omer Ali
      </p>
    </footer>
  );
};

export default Footer;
