import { useTranslation } from "react-i18next";
import { Avila } from "../assets";


function Banner() {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("global");

  return (

     <div className="relative bg-center h-48 md:h-96 mb-8">
      <img src={Avila} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-start items-start">
        <h1 className="text-white text-sm md:text-4xl font-bold text-center mt-4 md:mt-14 md:ml-16 ml-4">Te invitamos a descubrir la magia de Venezuela</h1>
        <p className="text-white text-xs md:text-xl font-semibold text-center md:ml-16 ml-4">Reserva tu próximo vuelo hoy mismo y vive una experiencia inolvidable...</p>    
      </div>
    </div>
  );
}

export default Banner;
