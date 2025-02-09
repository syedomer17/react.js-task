import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-3 rounded-full bg-gray-800 text-white shadow-lg hover:scale-110 transition"
    >
      {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
    </button>
  );
};

export default DarkModeToggle;
