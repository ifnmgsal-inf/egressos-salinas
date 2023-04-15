/* eslint-disable @next/next/no-img-element */
import { useState, useContext } from "react";
import { AuthUserContext } from "../../../contexts/authUserContext";
import { UserOutlined, DeleteOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";

import Modal from "react-modal";

import { isMobile } from "react-device-detect";

const DepositionsPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentTestimonialId, setCurrentTestimonialId] = useState(null);

  const { usersAll, testimonialsAll, createPublishedTestimonials, deletePublishedTestimonials } =
    useContext(AuthUserContext);

  const handlePublishedTestimonials = (user) => {
    // console.log(user);
    createPublishedTestimonials(user);
  };

  function openModal(TestimonialId) {
    setModalIsOpen(true);
    setCurrentTestimonialId(TestimonialId);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <div className="flex flex-col w-full xsm:p-2 xsm:mt-5 xsm:mb-20 md:mt-8 md:mb-4 xsm:px-4 lg:ml-2 lg:mr-4">
        <h1 className="xsm:text-15 sm:text-15 lg:text-20 mb-4 text-title">
          Novos <span className="text-primary-active">Depoimentos</span>
        </h1>

        <div className="grid xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 gap-x-6">
          {usersAll?.map((user) =>
            user.testimony ? (
              <div
                key={user.id}
                className="flex xsm:flex-col md:flex-row xsm:max-w-350 sm:max-w-400 md:max-w-700 lg:md:max-w-1000 justify-between shadow-md bg-white px-4 py-2 rounded-sm border"
              >
                <div className="flex xsm:flex-col md:flex-row">
                  <div className="flex xsm:flex-col-reverse md:flex-col items-center md:mr-2">
                    <span className="inline-block" style={{ width: "50px", height: "50px" }}>
                      {user?.imageURL ? (
                        <img
                          className="shadow-xl xsm:m-1"
                          style={{
                            borderRadius: "50%",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          src={user?.imageURL}
                          alt=""
                        />
                      ) : (
                        <UserOutlined
                          className="flex items-center justify-center text-white-text text-16 rounded-full"
                          style={{
                            borderRadius: "50%",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            backgroundColor: "#D9D9D9",
                          }}
                        />
                      )}
                    </span>
                    <span className="text-12 font-medium mt-1">{user?.name || "teste"}</span>
                  </div>
                  <div className="flex flex-col justify-center md:ml-4 xsm:my-2">
                    <label className="text-12 font-medium px-1">Depoimento</label>
                    <textarea
                      className="disabled:text-grey-text  xsm:h-20 md:h-10 rounded-sm focus:outline-primary-active p-1 text-grey-text text-13 bg-white resize xsm:max-w-300 md:max-w-500 lg:max-w-350 xsm:my-1"
                      value={user?.testimony}
                      id="testimony"
                      name="testimony"
                      disabled
                    />
                  </div>
                </div>
                <div className="flex flex-row xsm:items-start md:items-center justify-end my-2">
                  <CheckOutlined
                    className="text-12 text-primary cursor-pointer bg-icon-bgGreen backdrop-opacity-5 p-2.5 rounded-full"
                    onClick={() => handlePublishedTestimonials(user)}
                  />{" "}
                </div>
              </div>
            ) : null
          )}
        </div>
        <div className="flex items-center justify-between my-6">
          <h1 className="xsm:text-15 sm:text-15 lg:text-20 text-title ">
            Depoimentos <span className="text-primary-active">Puplicados</span>
          </h1>
        </div>
        <div className="grid xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 gap-x-6">
          {testimonialsAll?.map((testimony) => (
            <div
              key={testimony.userId}
              className="flex xsm:flex-col md:flex-row xsm:max-w-350 md:max-w-700 lg:md:max-w-1000 justify-between shadow-md bg-white px-4 py-2 rounded-sm border"
            >
              <div className="flex xsm:flex-col md:flex-row p-2">
                <div className="flex xsm:flex-col-reverse md:flex-col items-center mr-2">
                  <span className="inline-block" style={{ width: "50px", height: "50px" }}>
                    {testimony?.userImage ? (
                      <img
                        className="shadow-xl xsm:m-1"
                        style={{
                          borderRadius: "50%",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        src={testimony?.userImage}
                        alt=""
                      />
                    ) : (
                      <UserOutlined
                        className="flex items-center justify-center text-white-text text-16 rounded-full"
                        style={{
                          borderRadius: "50%",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          backgroundColor: "#D9D9D9",
                        }}
                      />
                    )}
                  </span>
                  <span className="text-12 font-medium mt-1">{testimony?.userName || "teste"}</span>
                </div>
                <div className="flex flex-col justify-center md:ml-4 xsm:my-2">
                  <label className="text-12 font-medium px-1">Depoimento</label>
                  <textarea
                    className="disabled:text-grey-text xsm:h-20 md:h-10 rounded-sm focus:outline-primary-active p-1 text-grey-text text-13 bg-white resize xsm:max-w-300 md:max-w-500 lg:max-w-350 xsm:my-1"
                    value={testimony?.userTestimony}
                    id="testimony"
                    name="testimony"
                    disabled
                  />
                </div>
              </div>
              <div className="flex flex-row xsm:items-start md:items-center justify-end my-2">
                <DeleteOutlined
                  className="text-12 text-danger cursor-pointer bg-icon-bgRed backdrop-opacity-5 p-2.5 rounded-full"
                  onClick={() => openModal(testimony.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
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
            left: isMobile ? "5%" : "35%",
            right: "50%",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "10px",
            width: isMobile ? "90%" : "400px",
            maxHeight: "160px",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-medium">Excluir depoimento</p>
          <CloseOutlined className="text-grey-text cursor-pointer" onClick={closeModal} />
        </div>
        <hr />
        <h2 className="py-4 Text-grey-text">Deseja realmente excluir o depoimento?</h2>
        <div className="flex items-end justify-end mt-2 gap-x-2">
          <button
            className="text-12 text-grey-text cursor-pointer bg-bg-container backdrop-opacity-5 px-2.5 py-1.5 rounded-sm"
            onClick={() => closeModal()}
          >
            Cancelar
          </button>
          <button
            className="text-12 text-primary-green cursor-pointer bg-icon-bgGreen backdrop-opacity-5 px-6 py-1.5 rounded-sm"
            onClick={() => {
              deletePublishedTestimonials(currentTestimonialId);
              closeModal();
            }}
          >
            Sim
          </button>
        </div>
      </Modal>
    </>
  );
};

export default DepositionsPage;
