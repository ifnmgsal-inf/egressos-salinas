import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import Modal from "react-modal";
import { isMobile } from "react-device-detect";
import { AuthUserContext } from "../../contexts/authUserContext";

// const news = [
//   {
//     image: "/bg_header.jpg",
//     simpleTitle: "Título da notícia 1",
//     simpleDescription: "Uma prévia das informações da notícia 1 aparecerá aqui.",
//     title: "Título completo sobre a notícia 1",
//     description: "Todas as informações completas da notícia 1 aparecerá aqui.",
//   },
//   {
//     image: "/bg_header.jpg",
//     simpleTitle: "Título da notícia 2",
//     simpleDescription: "Uma prévia das informações da notícia 2 aparecerá aqui.",
//     title: "Título completo sobre a notícia 2",
//     description: "Todas as informações completas da notícia 2 aparecerá aqui.",
//   },
//   {
//     image: "/bg_header.jpg",
//     simpleTitle: "Título da notícia 3",
//     simpleDescription: "Uma prévia das informações da notícia 3 aparecerá aqui.",
//     title: "Título completo sobre a notícia 3",
//     description: "Todas as informações completas da notícia 3 aparecerá aqui.",
//   },
//   {
//     image: "/bg_header.jpg",
//     simpleTitle: "Título da notícia 4",
//     simpleDescription: "Uma prévia das informações da notícia 4 aparecerá aqui.",
//     title: "Título completo sobre a notícia 4",
//     description: "Todas as informações completas da notícia 4 aparecerá aqui.",
//   },
//   {
//     image: "/bg_header.jpg",
//     simpleTitle: "Título da notícia 5",
//     simpleDescription: "Uma prévia das informações da notícia 5 aparecerá aqui.",
//     title: "Título completo sobre a notícia 5",
//     description: "Todas as informações completas da notícia 5 aparecerá aqui.",
//   },
//   {
//     image: "/bg_header.jpg",
//     simpleTitle: "Título da notícia 6",
//     simpleDescription: "Uma prévia das informações da notícia 6 aparecerá aqui.",
//     title: "Título completo sobre a notícia 6",
//     description: "Todas as informações completas da notícia 6 aparecerá aqui.",
//   },
//   {
//     image: "/bg_header.jpg",
//     simpleTitle: "Título da notícia 7",
//     simpleDescription: "Uma prévia das informações da notícia 5 aparecerá aqui.",
//     title: "Título completo sobre a notícia 7",
//     description: "Todas as informações completas da notícia 7 aparecerá aqui.",
//   },
//   {
//     image: "/bg_header.jpg",
//     simpleTitle: "Título da notícia 8",
//     simpleDescription: "Uma prévia das informações da notícia 6 aparecerá aqui.",
//     title: "Título completo sobre a notícia 8",
//     description: "Todas as informações completas da notícia 8 aparecerá aqui.",
//   },
// ];

const News = () => {
  const [search, setSearch] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const { newsAll } = useContext(AuthUserContext);

  const filterNews = search.length
    ? newsAll.filter(
        ({ title, description }) =>
          title.toUpperCase().includes(search.toUpperCase()) ||
          description.toUpperCase().includes(search.toUpperCase())
      )
    : [];

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setModalData(null);
  }

  return (
    <div className="xsm:px-10 xl:px-32 py-10 bg-bg-container">
      <div className="flex xsm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between xsm:items-start md:items-center lg:items-center xl:items-center">
        <h1 className="xsm:text-24 sm:text-24 lg:text-30 text-title">
          Novas <span className="text-primary-active">Notícias</span>
        </h1>
        <label className="relative block xsm:mt-5 lg:mt-0 xl:mt-0">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchOutlined className="text-20 text-title" />
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
          ? filterNews.map((news, index) => (
              <figure
                key={index}
                className="flex flex-col min-h-270 bg-white rounded-sm p-0 drop-shadow-md cursor-pointer"
                onClick={() => {
                  setModalData(news);
                  openModal();
                }}
              >
                <img className="w-full h-24 rounded-t-sm" src={news.image} alt="" />
                <div className="pt-2 md:px-4 text-center md:text-left space-y-4">
                  <blockquote>
                    <p className="text-lg font-medium">{news.title}</p>
                  </blockquote>
                  <figcaption className="font-medium">
                    <div className="text-13 text-grey-text">{news.description}</div>
                  </figcaption>
                </div>
              </figure>
            ))
          : newsAll?.map((news, index) => (
              <figure
                key={index}
                className="flex flex-col min-h-270 bg-white rounded-sm p-0 drop-shadow-md cursor-pointer"
                onClick={() => {
                  setModalData(news);
                  openModal();
                }}
              >
                <img className="w-full h-24 rounded-t-sm" src={news.image} alt="" />
                <div className="pt-2 md:px-4 text-center md:text-left space-y-4">
                  <blockquote>
                    <p className="text-lg font-medium">{news.title}</p>
                  </blockquote>
                  <figcaption className="font-medium">
                    <div className="text-13 text-grey-text">{news.description}</div>
                  </figcaption>
                </div>
              </figure>
            ))}
        <Modal
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.75)",
            },
            content: {
              position: "absolute",
              top: "10%",
              left: "30px",
              right: "30px",
              bottom: "40px",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
            },
          }}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-medium">{modalData?.title}</p>
            <CloseOutlined className="text-grey-text cursor-pointer" onClick={closeModal} />
          </div>
          <hr />
          <div className="text-13 text-grey-text mt-4w-100">{modalData?.description}</div>
        </Modal>
      </div>
    </div>
  );
};

export default News;
