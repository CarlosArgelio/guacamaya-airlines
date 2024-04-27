import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

export const Translation = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (event) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);
  };

  return (
    <React.Fragment>
   <div className="flex bg-white rounded-lg">

      <select
        id="select"
        className="appearance-none py-2 px-2 rounded-md focus:outline-none "
        onChange={handleChangeLanguage}
      >
        <option onSelect={() => i18n.changeLanguage("es")} value="es">
          {t("select.spanish")}
        </option>
        <option onSelect={() => i18n.changeLanguage("en")} value="en">
          {t("select.english")}
        </option>
      </select>
      <ChevronDownIcon className="w-4 h-4 mt-3 mr-1"></ChevronDownIcon>
   </div>
    </React.Fragment>
  );
};
