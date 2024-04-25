import React from "react";
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
      {/* Aqui estaba el boton de DarkMode */}
      <select
        id="select"
        className="bg-white border border-gray-300 py-2 px-2 rounded-md focus:outline-none focus:border-yellow-500"
        onChange={handleChangeLanguage}
      >
        <option onSelect={() => i18n.changeLanguage("es")} value="es">
          {t("select.spanish")}
        </option>
        <option onSelect={() => i18n.changeLanguage("en")} value="en">
          {t("select.english")}
        </option>
      </select>
    </React.Fragment>
  );
};
