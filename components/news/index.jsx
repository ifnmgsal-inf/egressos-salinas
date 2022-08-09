const newsList = [
  {
    image: "/bg_header.jpg",
    title: "Título da notícia 1",
    description: "Uma prévia das informações da notícia 1 aparecerá aqui.",
  },
  {
    image: "/bg_header.jpg",
    title: "Título da notícia 2",
    description: "Uma prévia das informações da notícia 2 aparecerá aqui.",
  },
  {
    image: "/bg_header.jpg",
    title: "Título da notícia 3",
    description: "Uma prévia das informações da notícia 3 aparecerá aqui.",
  },
  {
    image: "/bg_header.jpg",
    title: "Título da notícia 4",
    description: "Uma prévia das informações da notícia 4 aparecerá aqui.",
  },
  {
    image: "/bg_header.jpg",
    title: "Título da notícia 5",
    description: "Uma prévia das informações da notícia 5 aparecerá aqui.",
  },
  {
    image: "/bg_header.jpg",
    title: "Título da notícia 6",
    description: "Uma prévia das informações da notícia 6 aparecerá aqui.",
  },
  {
    image: "/bg_header.jpg",
    title: "Título da notícia 7",
    description: "Uma prévia das informações da notícia 5 aparecerá aqui.",
  },
  {
    image: "/bg_header.jpg",
    title: "Título da notícia 8",
    description: "Uma prévia das informações da notícia 6 aparecerá aqui.",
  },
];

const News = () => {
  return (
    <div className="px-10 py-10 bg-bg-container">
      <h1 className="text-38 text-title">
        Novas <span className="text-primary">Notícias</span>
      </h1>
      <div className="grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8 my-4">
        {newsList.map(({ image, title, description }) => (
          <figure
            key={title}
            className="flex flex-col min-h-270 bg-white rounded-sm p-0 drop-shadow-md"
          >
            <img className="w-full h-24 rounded-t-sm" src={image} alt="" />
            <div className="pt-2 md:px-4 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-medium">{title}</p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-13 text-grey-text">{description}</div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default News;
