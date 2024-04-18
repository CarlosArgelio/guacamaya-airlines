import { Roraima } from "../assets";
import { Mochima } from "../assets";
import { Merida } from "../assets";
import { Morrocoy } from "../assets";

import { LosRoques } from "../assets";
import { Margarita } from "../assets";
import { Medanos } from "../assets";
import { Puerto } from "../assets";

// eslint-disable-next-line react/prop-types
function Card({ imageSrc, title, description }) {
  return (
    <div className="w-full md:w-1/4 px-6 mb-10">
      <div className="relative">
        <img src={imageSrc} alt={title} className="w-50 h-80 rounded-xl" />
        <div className="absolute inset-0 bg-black rounded-xl opacity-0 hover:opacity-75 transition duration-300">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-center">
              <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-200 px-5 text-justify">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OurPlaces() {
  return (
    <div className="container max-w-6xl mx-auto py-8">
        <h1 className='text-3xl font-semibold mb-8'>Nuestros destinos</h1>
      <div className="flex flex-wrap -mx-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}

const cards = [
  {
    title: 'Roraima',
    description: 'Aventúrate en el Tepuy Roraima, la cima más alta del Parque Nacional Canaima, un lugar místico donde podrás contemplar majestuosas cascadas, ríos de aguas cristalinas y formaciones rocosas únicas en el mundo.',
    imageSrc: Roraima,
  },
  {
    title: 'Mochima',
    description: 'Navega por el Parque Nacional Mochima, un archipiélago de 34 islas paradisíacas, donde podrás disfrutar de playas de arena blanca, aguas turquesas y una gran variedad de deportes acuáticos.',
    imageSrc: Mochima,
  },
  {
    title: 'Merida',
    description: 'Conoce la Ciudad de los Caballeros, Mérida, una ciudad colonial rodeada de montañas andinas, donde podrás visitar el Pico Bolívar, la montaña más alta de Venezuela, y disfrutar de encantadores pueblos y paisajes exuberantes.',
    imageSrc: Merida,
  },
  {
    title: 'Morrocoy',
    description: 'Relájate en el Parque Nacional Morrocoy, un paraíso natural compuesto por 150 cayos de arena blanca y aguas cristalinas, donde podrás practicar snorkeling, buceo y disfrutar de la tranquilidad del mar caribeño.',
    imageSrc: Morrocoy,
  },
  {
    title: 'Margarita',
    description: 'Disfruta de la Isla de Margarita, conocida como la Perla del Caribe, un destino turístico por excelencia, donde podrás encontrar playas de ensueño, una vibrante vida nocturna y una gran variedad de actividades para toda la familia.',
    imageSrc: Margarita,
  },
  {
    title: 'Puerto la cruz',
    description: 'Visita Puerto La Cruz, una ciudad costera con un hermoso malecón, donde podrás disfrutar de una deliciosa gastronomía local, realizar compras en mercados artesanales y visitar lugares históricos como el Castillo de San Felipe de la Barra.',
    imageSrc: Puerto,
  },
  {
    title: 'Medanos de Coro',
    description: 'Adéntrate en los Médanos de Coro, un desierto de dunas de arena blanca que se extienden por más de 15.000 hectáreas, donde podrás realizar actividades como paseos en camello, sandboard y disfrutar de atardeceres inolvidables.',
    imageSrc: Medanos,
  },
  {
    title: 'Los roques',
    description: 'Descubre Los Roques, un archipiélago de 49 islas de origen coralino, considerado como uno de los parques nacionales más bellos del mundo, donde podrás disfrutar de playas vírgenes, aguas cristalinas y una gran variedad de vida marina.',
    imageSrc: LosRoques,
  },
];

export default OurPlaces;
