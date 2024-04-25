import { useState } from 'react';
import { Link } from 'react-scroll';
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
    <nav className="bg-sky-500 p-2 dark:bg-blue-900">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={Logo} alt="" className="h-14" />
          </div>
          <div className="hidden md:flex items-center">

            <Link to="reservation" smooth={true} duration={900} className="text-white text-lg font-bold px-4  py-2 hover:text-blue-900 dark:hover:text-cyan-300 cursor-pointer">
               {t('navBar.reserver')}
            </Link>
            <Link to="ourPlaces" smooth={true} duration={900} className="text-white text-lg font-bold px-4  py-2 hover:text-blue-900 dark:hover:text-cyan-300 cursor-pointer">
              {t('navBar.destination')}
            </Link>
            <Link to="FAQs" smooth={true} duration={900} className="text-white text-lg font-bold px-4 py-2 hover:text-blue-900 dark:hover:text-cyan-300 cursor-pointer">
               {t('navBar.questions')}
            </Link>
            <Link to="flightPlans" smooth={true} duration={900} className="text-white text-lg font-bold px-4  py-2 hover:text-blue-900 dark:hover:text-cyan-300 cursor-pointer">
            {t('navBar.flightPanel')}
            </Link>
            <Link to="footer" smooth={true} duration={900} className="text-white text-lg font-bold px-4  py-2 hover:text-blue-900 dark:hover:text-cyan-300 cursor-pointer">
             {t('navBar.aboutWe')}
            </Link>

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

            <Link to="reservation" smooth={true} duration={900} className="block text-center py-2 px-4 text-white font-bold hover:text-blue-900 dark:hover:text-cyan-300  cursor-pointer">{t('navBar.reserver')}</Link>
            <Link to="ourPlaces" smooth={true} duration={900} className="block text-center py-2 px-4 text-white font-bold hover:text-blue-900 dark:hover:text-cyan-300  cursor-pointer">{t('navBar.destination')}</Link>
            <Link to="FAQs" smooth={true} duration={900} className="block text-center py-2 px-4 text-white font-bold hover:text-blue-900 dark:hover:text-cyan-300  cursor-pointer">{t('navBar.questions')}</Link>
            <Link to="flightPlans" smooth={true} duration={900} className="block text-center py-2 px-4 text-white font-bold hover:text-blue-900 dark:hover:text-cyan-300  cursor-pointer"> {t('navBar.flightPanel')}</Link>
            <Link to="footer" smooth={true} duration={900} className="block text-center py-2 px-4 text-white font-bold hover:text-blue-900 dark:hover:text-cyan-300  cursor-pointer">{t('navBar.aboutWe')}</Link>

          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
