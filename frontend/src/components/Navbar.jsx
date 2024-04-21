import { useState } from 'react';
import { Link } from 'react-scroll';
import { Logo } from "../assets/index";
import { MoonIcon } from "@heroicons/react/24/solid";
import { Bars4Icon } from "@heroicons/react/24/solid";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-sky-500 p-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={Logo} alt="" className="h-14" />
          </div>
          <div className="hidden md:flex items-center">
            <Link to="reservation" smooth={true} duration={900} className="text-white text-lg font-bold px-4  py-2 hover:text-blue-900 cursor-pointer">
              Reserva
            </Link>
            <Link to="ourPlaces" smooth={true} duration={900} className="text-white text-lg font-bold px-4  py-2 hover:text-blue-900 cursor-pointer">
              Destinos
            </Link>
            <Link to="FAQs" smooth={true} duration={900} className="text-white text-lg font-bold px-4 py-2 hover:text-blue-900 cursor-pointer">
              Preguntas
            </Link>
            <Link to="flightPlans" smooth={true} duration={900} className="text-white text-lg font-bold px-4  py-2 hover:text-blue-900 cursor-pointer">
            Panel de vuelo
            </Link>
            <Link to="footer" smooth={true} duration={900} className="text-white text-lg font-bold px-4  py-2 hover:text-blue-900 cursor-pointer">
              Sobre nosotros
            </Link>
          </div>
       

          <div className="flex items-center">
            <MoonIcon className="h-10 w-10 mx-4 hover:text-yellow-400 text-gray-700 md:block" />
            <select id="select" className="bg-white border border-gray-300 py-2 px-2 rounded-md focus:outline-none focus:border-yellow-500">
              <option value="">Español</option>
              <option value="english">English</option>
            </select>
          </div>

          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-black focus:outline-none">
            <Bars4Icon className="h-6 w-6 mx-4 text-black" />

            </button>
            
          </div>

        </div>
        {isOpen && (
          <div className="md:hidden mt-2 ">
            <Link to="reservation" smooth={true} duration={900} className="block text-center py-2 px-4 text-white font-bold hover:text-blue-900  cursor-pointer">Reserva</Link>
            <Link to="ourPlaces" smooth={true} duration={900} className="block text-center py-2 px-4 text-white font-bold hover:text-blue-900  cursor-pointer">Destinos</Link>
            <Link to="FAQs" smooth={true} duration={900} className="block text-center py-2 px-4 text-white font-bold hover:text-blue-900  cursor-pointer">Preguntas</Link>
            <Link to="flightPlans" smooth={true} duration={900} className="block text-center py-2 px-4 text-white font-bold hover:text-blue-900  cursor-pointer">Planes de vuelo</Link>
            <Link to="footer" smooth={true} duration={900} className="block text-center py-2 px-4 text-white font-bold hover:text-blue-900  cursor-pointer">Sobre nosotros</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
