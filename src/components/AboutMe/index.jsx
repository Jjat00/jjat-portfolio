import jjatImage from "../../images/jjat_1.jpg";
import JjatImage2 from "../../images/jjat_2.jpg";

const AboutMe = ({
  name,
  lastname,
  information,
  aboutDescription,
  linkedIn,
  github,
}) => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 min-h-screen w-full">
      {/* Patrón de fondo decorativo */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width="200"
            height="200"
            x="100%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth="0"
          ></path>
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        ></rect>
      </svg>

      {/* Efecto de gradiente */}
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        ></div>
      </div>

      {/* Sección principal - Información personal */}
      <div className="px-6 py-24 sm:py-32 lg:px-8 min-h-[100vh] flex items-center">
        <div className="mx-auto max-w-7xl w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
                  {name}
                </span>{" "}
                {lastname}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300 md:text-xl">
                {information}
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <i className="fa-brands fa-linkedin text-3xl"></i>
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <i className="fa-brands fa-github text-3xl"></i>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src={jjatImage}
                alt="main picture"
                className="rounded-lg shadow-2xl shadow-sky-500/20 max-w-full h-auto object-cover transform transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sección Sobre mí */}
      <div
        id="about"
        className="px-6 py-24 sm:py-32 lg:px-8 bg-gray-800/50 min-h-[100vh] flex items-center"
      >
        <div className="mx-auto max-w-7xl w-full">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Sobre mí
              </h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"></div>
              <p className="mt-6 text-lg leading-8 text-gray-300 md:text-xl">
                {aboutDescription}
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src={JjatImage2}
                alt="description"
                className="rounded-lg shadow-2xl shadow-indigo-500/20 max-w-full h-auto object-cover transform transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
