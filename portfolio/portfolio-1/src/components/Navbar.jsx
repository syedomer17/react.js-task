import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] bg-opacity-90 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center px-12 h-20 text-white">
          <a
            href="#"
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-400 transition-all duration-500 drop-shadow-lg"
          >
            Syed Omer Ali
          </a>

          <ul className="hidden md:flex gap-12 text-lg font-semibold">
            {["About", "Portfolio", "Contact"].map((item, index) => (
              <li key={index} className="relative group cursor-pointer">
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-white transition-all duration-300 group-hover:text-blue-400 hover:underline"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleNav}
            aria-label="Toggle Navigation"
            className="md:hidden z-50 text-white transition-all duration-300 hover:scale-110 hover:text-blue-400"
          >
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>

          {nav && (
            <motion.div
              initial="closed"
              animate={nav ? "open" : "closed"}
              variants={menuVariants}
              className="fixed left-0 top-0 w-full min-h-screen bg-[#0a0f1d] bg-opacity-95 flex items-center justify-center z-40"
              onClick={closeNav}
            >
              <ul className="font-semibold text-4xl space-y-8 text-center text-white">
                {["About", "Portfolio", "Contact"].map((item, index) => (
                  <li key={index} className="relative group cursor-pointer">
                    <Link
                      to={item.toLowerCase()}
                      onClick={closeNav}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="transition-all duration-300 group-hover:text-blue-400 hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
