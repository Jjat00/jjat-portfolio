import Card from "./../Card";

const Portfolio = ({ contentCards }) => {
  return (
    <section
      id="briefcase"
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
    >
      {/* Patrón de fondo decorativo */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="portfolio-pattern"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#portfolio-pattern)"
        ></rect>
      </svg>

      {/* Efecto de gradiente */}
      <div
        className="absolute right-[calc(50%-30rem)] top-10 -z-10 transform-gpu blur-3xl sm:right-[calc(50%-40rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Proyectos
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contentCards.map((content, index) => (
            <Card
              key={index}
              title={content.title}
              img={content.img}
              description={content.description}
              technologies={content.technologies}
              code={content.code}
              website={content.website}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
