import React from "react";
import {
  FaGithubSquare,
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center p-10 md:p-16 text-sm md:text-lg mt-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-t-xl shadow-2xl border-t border-gray-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>

      <div className="text-center md:text-left space-y-4 relative z-10">
        <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-wide drop-shadow-lg">
          Syed Omer Ali
        </h3>
        <p className="text-gray-300 text-md md:text-lg max-w-[400px]">
          Passionate Full Stack Developer | Building stunning and scalable web
          applications
        </p>
        <div className="flex justify-center md:justify-start gap-6 text-gray-400 text-4xl mt-4">
          <a
            href="https://github.com/syedomer17"
            className="hover:text-purple-500 transition-transform duration-300 hover:scale-125 hover:rotate-6"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://www.instagram.com/syedomer934/profilecard/?igsh=bGxqaGcxOXZ1NXg2"
            className="hover:text-pink-500 transition-transform duration-300 hover:scale-125 hover:-rotate-6"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/yourprofile"
            className="hover:text-blue-500 transition-transform duration-300 hover:scale-125 hover:rotate-6"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            className="hover:text-blue-400 transition-transform duration-300 hover:scale-125 hover:-rotate-6"
          >
            <FaTwitterSquare />
          </a>
        </div>
      </div>

      <p className="text-gray-400 text-center md:text-right mt-6 md:mt-0 border-t border-gray-600 pt-4 md:pt-0 relative z-10">
        © 2024 Syed Omer Ali | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
