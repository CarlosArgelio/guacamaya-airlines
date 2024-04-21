import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import EN from "./en.json";
import ES from "./es.json";


i18n.use(initReactI18next).init({
    resources: {
        en: { ...EN },
        es: { ...ES }
    }, // Where we're gonna put translations' files
    lng: "en",     // Set the initial language of the App
});