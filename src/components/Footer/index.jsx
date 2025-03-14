const Footer = () => {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      {/* Efecto de gradiente */}
      {/* <div
        className="absolute left-[calc(50%-20rem)] top-0 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[36.125rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        ></div>
      </div> */}

      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Jaime
            </span>{" "}
            Aza
          </h2>
          <p className="mt-2 text-gray-300">Full Stack Developer Engineer</p>
        </div>

        <div className="mt-8 md:mt-0">
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/jaimeaza/"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://github.com/JjatDeci"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-4 border-t border-gray-800">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Jaime Aza. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
