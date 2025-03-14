const Card = ({ title, img, description, technologies, code, website }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 transition-all duration-300 hover:translate-y-[-5px] flex flex-col h-full">
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover object-center transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>

      <div className="p-6 flex-grow">
        <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <p className="text-gray-300 text-sm">
          <span className="font-semibold text-sky-400">Tecnologías:</span>{" "}
          {technologies}
        </p>
      </div>

      <div className="flex justify-between p-4 border-t border-gray-700">
        <a
          href={code}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium"
        >
          <i className="fa-brands fa-github text-lg"></i>
          <span>Código</span>
        </a>
        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium"
        >
          <i className="fa fa-globe text-lg" aria-hidden="true"></i>
          <span>Sitio web</span>
        </a>
      </div>
    </div>
  );
};

export default Card;
