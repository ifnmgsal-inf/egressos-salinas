import { useContext, useState } from "react";
import { AuthUserContext } from "../../../contexts/authUserContext";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";

import Modal from "react-modal";

const NewsPage = () => {
  const [search, setSearch] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const { newsAll } = useContext(AuthUserContext);
  console.log(newsAll, "Notícias do Firebase");

  const filterNews = search.length ? newsAll.filter(({ title }) => title.includes(search)) : [];

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setModalData(null);
  }

  return (
    <div className="px-10 py-10">
      <div className="flex xsm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between xsm:items-start md:items-center lg:items-center xl:items-center">
        <h1 className="xsm:text-15 sm:text-20 lg:text-24 text-title">
          Todas as <span className="text-primary-active">Notícias</span>
        </h1>
        <div className="flex space-x-4">
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
          <button>Criar notícia</button>
        </div>
      </div>
      <div className="grid 2xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-x-4 gap-y-8 my-8">
        {search.length
          ? filterNews.map((news, index) => (
              <figure
                key={index}
                className="flex max-h-167 bg-white rounded-sm p-0 drop-shadow-lg cursor-pointer"
                onClick={() => {
                  setModalData(news);
                  openModal();
                }}
              >
                <img className="max-h-167 rounded-t-sm" src={news.image} alt="" />
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
                className="flex max-h-167 bg-white rounded-sm p-0 drop-shadow-lg cursor-pointer"
                onClick={() => {
                  setModalData(news);
                  openModal();
                }}
              >
                <img className="max-h-167  rounded-t-sm" src={news.image} alt="" />
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

export default NewsPage;
