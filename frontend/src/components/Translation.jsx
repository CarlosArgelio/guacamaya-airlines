import { useState } from 'react';
import { MoonIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";


export const Translation = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  // eslint-disable-next-line no-unused-vars
    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (event) => {
        const newLang = event.target.value;
        i18n.changeLanguage(newLang)
      };

    return (
        <div className="flex items-center">
          <button onClick={toggleDarkMode}>

            <MoonIcon className="h-10 w-10 mx-4 hover:text-yellow-400 text-gray-700 md:block" />
          </button>
            <select id="select" className="bg-white border border-gray-300 py-2 px-2 rounded-md focus:outline-none focus:border-yellow-500" onChange={handleChangeLanguage}>
              <option onSelect={() => i18n.changeLanguage("es")} value="es">{t('select.spanish')}</option>
              <option onSelect={() => i18n.changeLanguage("en")} value="en">{t('select.english')}</option>    
            </select>
          </div>
    )
}