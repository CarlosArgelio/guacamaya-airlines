import { MoonIcon } from "@heroicons/react/24/solid";
// import { useState } from "react";
// import { useTranslation } from "react-i18next";


export const Translation = () => {
    // const { t, i18n: {changeLanguage, language} } = useTranslation();
    // const [currentLanguage, setCurrentLanguage] = useState(language)

    // const handleChangeLanguage = () => {
    //   const newLanguage = currentLanguage === "en" ? "pt" : "en";
    //   setCurrentLanguage(newLanguage);
    //   changeLanguage(newLanguage);
    // }

    return (
        <div className="flex items-center">
            <MoonIcon className="h-10 w-10 mx-4 hover:text-yellow-400 text-gray-700 md:block" />
            <select id="select" className="bg-white border border-gray-300 py-2 px-2 rounded-md focus:outline-none focus:border-yellow-500">
              <option value="">Español</option>
              <option value="english">English</option>
            </select>
          </div>
    )
}