import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

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
  const [search, setSearch] = useState("");

  const filterNews = search.length ? newsList.filter(({ title }) => title.includes(search)) : [];
  return (
    <div className="px-10 py-10 bg-bg-container">
      <div className="flex justify-between items-center">
        <h1 className="text-38 text-title">
          Novas <span className="text-primary-active">Notícias</span>
        </h1>
        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchOutlined className="text-20 text-primary-active" />
          </span>
          <input
            className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-sm py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
            placeholder="Buscar..."
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </label>
      </div>
      <div className="grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8 my-4">
        {search.length
          ? filterNews.map(({ image, title, description }) => (
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
            ))
          : newsList.map(({ image, title, description }) => (
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
