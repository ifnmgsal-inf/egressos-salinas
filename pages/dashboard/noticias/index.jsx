/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from "react";
import { AuthUserContext } from "../../../contexts/authUserContext";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { EditOutlined, DeleteOutlined, CheckOutlined, FileImageOutlined } from "@ant-design/icons";

import Modal from "react-modal";
import { useForm } from "react-hook-form";

const NewsPage = () => {
  const [search, setSearch] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [handleModalIsOpen, setHandleModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [image, setImage] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editNewsId, setEditNewsId] = useState(false);
  const { newsAll, createNewsUpload, deleteNews, updateNews } = useContext(AuthUserContext);

  const { register, handleSubmit, setValue } = useForm();

  const filterNews = search.length ? newsAll.filter(({ title }) => title.includes(search)) : [];

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setModalData(null);
  }

  function openModalHandleNews() {
    setHandleModalIsOpen(true);
  }

  function closeModalHandleNews() {
    setHandleModalIsOpen(false);
    setImage(null);
  }

  function handleNews(data) {
    // console.log(data);
    isEdit ? updateNews({ id: editNewsId, ...data }) : createNewsUpload(data);
    closeModalHandleNews();
  }

  function handleDeleteNews(news) {
    // console.log(news);
    deleteNews(news);
  }

  function handleEdit(news) {
    setIsEdit(true);
    setEditNewsId(news.id);
    setValue("title", news.title);
    setValue("description", news.description);
    setValue("image", news.image);
    openModalHandleNews();

    console.log(isEdit);
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
          <button onClick={() => openModalHandleNews()}>Criar notícia</button>
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
                <EditOutlined onClick={() => handleEdit(news)} />
                <DeleteOutlined className="p-4" onClick={() => handleDeleteNews(news)} />
              </figure>
            ))
          : newsAll?.map((news, index) => (
              <div
                key={index}
                className="flex justify-between max-h-167 bg-white rounded-sm p-0 drop-shadow-lg cursor-pointer"
              >
                <div
                  className="flex"
                  onClick={() => {
                    setModalData(news);
                    openModal();
                  }}
                >
                  <img className="max-h-167  rounded-t-sm" src={news.image} alt="" />
                  <span className="pt-2 md:px-4 text-center md:text-left space-y-4">
                    <blockquote>
                      <p className="text-lg font-medium">{news.title}</p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-13 text-grey-text">{news.description}</div>
                    </figcaption>
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <EditOutlined onClick={() => handleEdit(news)} />
                  <DeleteOutlined className="p-4" onClick={() => handleDeleteNews(news)} />
                </div>
              </div>
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
              left: "5%",
              right: "5%",
              bottom: "10%",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
            },
          }}
          isOpen={handleModalIsOpen}
          onRequestClose={closeModalHandleNews}
          contentLabel="Example Modal"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-medium">Nova notícia</p>
            <CloseOutlined
              className="text-grey-text cursor-pointer"
              onClick={closeModalHandleNews}
            />
          </div>
          <hr />
          <div className="flex xsm:flex-col lg:flex-row text-13 text-grey-text">
            <div className="flex flex-col items-center justify-center sm:m-0 lg:m-10">
              <span className="inline-block mt-8" style={{ width: "300px", height: "300px" }}>
                {image ? (
                  <img
                    className="shadow-2xl"
                    style={{
                      borderRadius: "5%",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={URL.createObjectURL(image)}
                    alt=""
                  />
                ) : (
                  <FileImageOutlined
                    className="flex items-center justify-center text-white-text text-50 rounded-full"
                    style={{
                      borderRadius: "5%",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                )}
              </span>
              <input
                {...register("image")}
                className="xsm:file:text-13 xsm:file:my-4 lg:file:my-8 file:text-primary-active file:border-solid file:border-primary-active file:border file:rounded-sm file:hover:border-primary file:hover:text-primary file:cursor-pointer lg:file:px-6 file:py-1.5 file:bg-white"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <form
              className="flex-1 flex-col lg:mt-20 space-y-4"
              onSubmit={handleSubmit(handleNews)}
            >
              <div className="flex flex-col">
                <label className="text-14 font-medium">Título</label>
                <input
                  className="h-10 border border-grey-text rounded-sm focus:outline-primary-active px-4"
                  {...register("title")}
                  type="text"
                  id="title"
                  name="title"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-14 font-medium">Descrição</label>
                <textarea
                  className="border border-grey-text rounded-sm focus:outline-primary-active px-4"
                  {...register("description")}
                  type="textArea"
                  id="description"
                  name="description"
                  required
                />
              </div>

              <div className="flex flex-col">
                <button
                  className="bg-primary-active text-15 text-disable h-10 mt-5 rounded-sm shadow hover:bg-primary"
                  type="submit"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default NewsPage;
