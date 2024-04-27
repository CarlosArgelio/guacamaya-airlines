import { useState } from "react";
import { Link } from "react-scroll";
import { Logo } from "../assets/index";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { Translation } from "./Translation";
import { DarkMode } from "./DarkMode";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("global");

  const MAX_MOBILE = 425;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-sky-500 p-2 dark:bg-blue-900">
      <div className="flex justify-between items-center container mx-auto">
        <div className="flex items-center">
          <img src={Logo} alt="" className="h-14" />
        </div>
        {window.innerWidth >= MAX_MOBILE && (
          <>
            <div className="hidden tablet:flex items-center">
              {ITEMS_NAVBAR.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  smooth={true}
                  duration={900}
                  className="text-white text-lg font-bold px-4  py-2 hover:text-blue-900 dark:hover:text-cyan cursor-pointer"
                >
                  {t(item.pathI18n)}
                </Link>
              ))}
            </div>
          </>
        )}

        {isOpen && (
          <>
            <div className="tablet:hidden mt-2">
              {ITEMS_NAVBAR.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  smooth={true}
                  duration={900}
                  className="mobile:block mobile:text-center mobile:px-4 text-white text-lg font-bold px-4  py-2 hover:text-blue-900 dark:hover:text-cyan cursor-pointer"
                >
                  {t(item.pathI18n)}
                </Link>
              ))}
            </div>
          </>
        )}

        <div className="flex items-center">
          <DarkMode />
          <Translation />
        </div>

        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-black focus:outline-none"
          >
            <Bars4Icon className="h-6 w-6 mx-4 text-black" />
          </button>
        </div>
      </div>
    </nav>
  );
}

const ITEMS_NAVBAR = [
  {
    id: 1,
    to: "reservation",
    pathI18n: "navBar.reserver",
  },
  {
    id: 2,
    to: "ourPlaces",
    pathI18n: "navBar.destination",
  },
  {
    id: 3,
    to: "FAQs",
    pathI18n: "navBar.questions",
  },
  {
    id: 4,
    to: "flightPlans",
    pathI18n: "navBar.flightPanel",
  },
  {
    id: 5,
    to: "footer",
    pathI18n: "navBar.aboutWe",
  },
];

export default Navbar;
