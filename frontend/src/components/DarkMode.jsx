import { MoonIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { GuacamayaContext } from "./../context";

export const DarkMode = () => {
  const context = useContext(GuacamayaContext);

  const toggleDarkMode = () => {
    context.setDarkMode(!context.darkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      <MoonIcon className={`h-10 w-10 mx-4 hover:text-yellow-400  ${context.darkMode ? 'text-yellow-400 hover:text-gray-700' : 'text-gray-700'} md:block`} />
    </button>
  );
};
