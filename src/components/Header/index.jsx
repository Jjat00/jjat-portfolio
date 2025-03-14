import iconMenu from "./../../assets/icon_menu.svg";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/#" className="text-xl font-bold text-white">
              <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
                Jaime
              </span>{" "}
              Aza
            </a>
          </div>

          {/* Menú desktop */}
          <ul className="hidden md:flex md:space-x-8">
            <li>
              <a
                href="/#"
                className="text-gray-300 hover:text-sky-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/#about"
                className="text-gray-300 hover:text-sky-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="/#briefcase"
                className="text-gray-300 hover:text-sky-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Proyectos
              </a>
            </li>
          </ul>

          {/* Botón menú móvil */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white md:hidden"
            onClick={toggleMenu}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Abrir menú principal</span>
            <img src={iconMenu} alt="icon" className="h-6 w-6" />
          </button>
        </nav>
      </div>

      {/* Menú móvil expandible */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 bg-gray-800/90 backdrop-blur-md">
          <a
            href="/#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-sky-400"
          >
            Inicio
          </a>
          <a
            href="/#about"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-sky-400"
          >
            Sobre mí
          </a>
          <a
            href="/#briefcase"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-sky-400"
          >
            Proyectos
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
