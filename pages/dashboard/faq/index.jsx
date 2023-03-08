import { useContext, useState } from "react";
import { AuthUserContext } from "../../../contexts/authUserContext";
import { useForm } from "react-hook-form";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import Modal from "react-modal";

import Accordion from "../../../components/accordion";

const FaqPage = () => {
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [editFAQid, setEditFAQid] = useState(null);
  const { register, handleSubmit, setValue } = useForm();

  const { faqsAll, createFaqIn, getFAQs, deleteFAQ, updateFAQ } = useContext(AuthUserContext);

  function openModalCreate() {
    setCreateModalIsOpen(true);
  }

  function closeModalCreate() {
    setCreateModalIsOpen(false);
  }
  function openModalEdit(id) {
    console.log(faqsAll.filter((faq) => faq.id === id));
    const item = faqsAll.filter((faq) => faq.id === id);
    setValue("question", item[0].question);
    setValue("response", item[0].response);
    setEditModalIsOpen(true);
    setEditFAQid(id);
  }

  function closeModalEdit() {
    setEditModalIsOpen(false);
  }

  function handleCreateFAQ(data) {
    console.log(data);
    createFaqIn(data);
    getFAQs();
    closeModalCreate();
  }
  function handleEditFAQ(data) {
    console.log(data);
    const item = { id: editFAQid, question: data.question, response: data.response };

    updateFAQ(item);
    getFAQs();
    closeModalEdit();
  }
  return (
    <>
      <div className="flex-1 flex-col mt-8 mb-4 xsm:mx-4 xl:mx-8">
        <div className="flex items-center justify-between mb-10">
          <h1 className="xsm:text-15 sm:text-15 lg:text-20 text-title">
            Perguntas <span className="text-primary-active">Frequentes</span>
          </h1>
          <button
            className="flex items-center px-4 py-2 text-12 font-medium text-primary cursor-pointer bg-icon-bgGreen backdrop-opacity-5 p-2.5 rounded-md"
            onClick={() => openModalCreate()}
          >
            Adicionar
            <PlusOutlined className="ml-1 text-14" />
          </button>
        </div>
        <div>
          {faqsAll?.map(({ question, response, id }, index) => (
            <Accordion
              key={index}
              title={question}
              edit
              onClickDelete={() => deleteFAQ(id)}
              onClickEdit={() => openModalEdit(id)}
            >
              {response}
            </Accordion>
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
            left: "5%",
            right: "5%",
            bottom: "auto",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
        isOpen={createModalIsOpen}
        onRequestClose={closeModalCreate}
        contentLabel="Example Modal"
      >
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-medium">Novo FAQ</p>
          <CloseOutlined className="text-grey-text cursor-pointer" onClick={closeModalCreate} />
        </div>
        <hr />
        <div className="flex xsm:flex-col lg:flex-row text-13 text-grey-text">
          <form
            className="flex-1 flex-col lg:mt-5 space-y-4"
            onSubmit={handleSubmit(handleCreateFAQ)}
          >
            <div className="flex flex-col">
              <label className="text-14 font-medium">Pergunta</label>
              <textarea
                className="h-20 border border-grey-border rounded-sm focus:outline-primary-active p-1.5"
                {...register("question")}
                type="text"
                id="question"
                name="question"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-14 font-medium">Resposta</label>
              <textarea
                className="h-20 border border-grey-border rounded-sm focus:outline-primary-active p-1.5"
                {...register("response")}
                type="textArea"
                id="response"
                name="response"
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
            left: "10%",
            right: "10%",
            bottom: "auto",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
        isOpen={editModalIsOpen}
        onRequestClose={closeModalEdit}
        contentLabel="Example Modal"
      >
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-medium">Novo FAQ</p>
          <CloseOutlined className="text-grey-text cursor-pointer" onClick={closeModalEdit} />
        </div>
        <hr />
        <div className="flex xsm:flex-col lg:flex-row text-13 text-grey-text my-4">
          <form
            className="flex-1 flex-col lg:mt-5 space-y-4"
            onSubmit={handleSubmit(handleEditFAQ)}
          >
            <div className="flex flex-col">
              <label className="text-14 font-medium">Pergunta</label>
              <textarea
                className="h-20 border border-grey-border rounded-sm focus:outline-primary-active p-1.5"
                {...register("question")}
                type="text"
                id="question"
                name="question"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-14 font-medium">Resposta</label>
              <textarea
                className="h-20 border border-grey-border rounded-sm focus:outline-primary-active p-1.5"
                {...register("response")}
                type="textArea"
                id="response"
                name="response"
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
    </>
  );
};

export default FaqPage;
