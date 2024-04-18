import { MoonIcon } from "@heroicons/react/24/solid";
import { Logo } from "../assets/index";

function Navbar() {
  return (
    <nav className="bg-blue-400 p-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={Logo} alt="" className="h-14" />
          </div>
          <div className="flex items-center">
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
          <div className="flex items-center ">

            <MoonIcon className="h-10 w-10 mx-4 hover:text-yellow-400 text-gray-700" />

            <select id="select" className=" bg-white border border-gray-300 py-2 px-2  rounded-md focus:outline-none focus:border-yellow-500 " >
              <option value="">Español</option>
              <option value="english">English</option>
            </select>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
