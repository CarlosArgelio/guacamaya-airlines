import { MoonIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      <MoonIcon className="h-10 w-10 mx-4 hover:text-yellow-400 text-gray-700 md:block" />
    </button>
  );
};
