import { createContext, useState } from "react";

export const GuacamayaContext = createContext({});

// eslint-disable-next-line react/prop-types
export const GuacamayaProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeClass = darkMode ? "dark" : "";

  return (
    <GuacamayaContext.Provider
      value={{
        darkMode,
        setDarkMode,
        darkModeClass,
      }}
    >
      {children}
    </GuacamayaContext.Provider>
  );
};
