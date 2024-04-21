import { useState } from 'react';
import { Logo } from "../assets/index";
import { MoonIcon } from "@heroicons/react/24/solid";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { Translation } from "./Translation";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-400 p-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={Logo} alt="" className="h-14" />
          </div>
          <div className="hidden md:flex items-center">
            <a href="#" className="text-black text-lg font-bold px-4  py-2">
              Reserva
            </a>
            <a href="#" className="text-black text-lg font-bold px-4  py-2">
              Destinos
            </a>
            <a href="#" className="text-black text-lg font-bold px-4 py-2">
              Preguntas
            </a>
            <a href="#" className="text-black text-lg font-bold px-4  py-2">
              Sobre nosotros
            </a>
          </div>
       

          <Translation />

          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-black focus:outline-none">
            <Bars4Icon className="h-6 w-6 mx-4 text-black" />

            </button>
            
          </div>

        </div>
        {isOpen && (
          <div className="md:hidden mt-2 ">
            <a href="#" className="block text-center py-2 px-4 text-black font-bold">Reserva</a>
            <a href="#" className="block text-center py-2 px-4 text-black font-bold">Destinos</a>
            <a href="#" className="block text-center py-2 px-4 text-black font-bold">Preguntas</a>
            <a href="#" className="block text-center py-2 px-4 text-black font-bold">Sobre nosotros</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
