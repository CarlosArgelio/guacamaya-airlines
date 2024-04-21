import { useTranslation } from "react-i18next";
import { Avila } from "../assets";


function Banner() {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("global");

  return (
    <div className="relative  bg-center h-48 md:h-96">
      <img src={Avila} alt="" className="relative  bg-center w-full h-48 md:h-96" />
      <div className="absolute left-0 top-0  flex justify-start items-center">

        <h1 className="text-white text-3xl md:text-5xl font-bold text-center m-16">{t('banner.text')}</h1>

      </div>
    </div>
  );
}

export default Banner;
