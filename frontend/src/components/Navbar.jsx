import { useState } from 'react';
import { Logo } from "../assets/index";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { Translation } from "./Translation";
import { useTranslation } from 'react-i18next';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("global");

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
              {t('navBar.reserver')}
            </a>
            <a href="#" className="text-black text-lg font-bold px-4  py-2">
              {t('navBar.destination')}
            </a>
            <a href="#" className="text-black text-lg font-bold px-4 py-2">
              {t('navBar.questions')}
            </a>
            <a href="#" className="text-black text-lg font-bold px-4  py-2">
              {t('navBar.aboutWe')}
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
            <a href="#" className="block text-center py-2 px-4 text-black font-bold">{t('navBar.reserver')}</a>
            <a href="#" className="block text-center py-2 px-4 text-black font-bold">{t('navBar.destination')}</a>
            <a href="#" className="block text-center py-2 px-4 text-black font-bold">{t('navBar.questions')}</a>
            <a href="#" className="block text-center py-2 px-4 text-black font-bold">{t('navBar.aboutWe')}</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
