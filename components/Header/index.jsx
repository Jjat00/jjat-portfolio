const Header = ({ menuItems }) => {
  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-white">
              <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </a>
          </div>

          {/* Menú móvil */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>

          {/* Menú desktop */}
          <nav className="hidden md:flex md:space-x-8">
            {menuItems &&
              menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="text-gray-300 hover:text-sky-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
          </nav>
        </div>
      </div>

      {/* Menú móvil expandible */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {menuItems &&
            menuItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {item.name}
              </a>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
