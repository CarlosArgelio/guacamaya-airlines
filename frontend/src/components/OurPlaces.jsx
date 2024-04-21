import { GlobeAmericasIcon } from "@heroicons/react/24/outline";

import { Roraima } from "../assets";
import { Mochima } from "../assets";
import { Merida } from "../assets";
import { Morrocoy } from "../assets";

import { LosRoques } from "../assets";
import { Margarita } from "../assets";
import { Medanos } from "../assets";
import { Puerto } from "../assets";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
function Card({ imageSrc, title, description }) {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-10 flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
      <div className="relative shadow-2xl  rounded-3xl">
        <img src={imageSrc} alt={title} className="w-full h-auto rounded-3xl" />
        <div className="absolute inset-0 bg-black rounded-3xl opacity-0 hover:opacity-75 transition duration-300 flex justify-center items-center">
          <div className="text-center">
            <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-200 px-5 text-justify">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OurPlaces() {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("global");

  return (

    <div id="ourPlaces" className="container max-w-6xl mx-auto py-8  ">
        <div className="flex">

      <h1 className="text-3xl font-semibold mb-8 ml-4">{t("ourPlaces.weDestination")}</h1>
      <GlobeAmericasIcon className="w-10 h-10"></GlobeAmericasIcon>
        </div>
      <div className="flex flex-wrap mx-4 justify-center">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={t(`ourPlaces.destination${i}`)}
            description={t(`ourPlaces.description${i}`)}
            imageSrc={image}
          />
        ))}
      </div>
    </div>
  );
}

const images = [
  Roraima,
  Mochima,
  Merida,
  Morrocoy,
  Margarita,
  Puerto,
  Medanos,
  LosRoques,
];

export default OurPlaces;
