import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import Modal from "react-modal";

import Accordion from "../../../components/accordion";
const faqList = [
  {
    question: "Qual o objetivo desse cadastro?",
    response:
      "O cadastro tem como objetivo agregar informações sobre os estudantes que concluíram a graduação na UFC, bem como nossos cursos, formação e empregabilidade. É de grande importância para avaliação institucional e também para a melhoria das ações pedagógicas na graduação.",
  },
  {
    question: "Já me formei há muitos anos. Ainda posso me cadastrar?",
    response:
      "Sim! Compartilhar sua experiência conosco será muito importante para a melhoria do IFNMG Campus Salinas.",
  },
  {
    question: "Sou estudante do último período. Devo me cadastrar?",
    response: "Ainda não. Aguarde para preencher o cadastro somente após concluir seu curso.",
  },
  {
    question:
      "Ao preencher o formulário, tive dúvidas sobre algumas questões. Quem poderia me auxiliar?",
    response: "Você pode entrar em contato conosco pelo e-mail comunicacao.salinas@ifnmg.edu.br",
  },
];

const FaqPage = () => {
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  function openModalCreate() {
    setCreateModalIsOpen(true);
  }

  function closeModalCreate() {
    setCreateModalIsOpen(false);
  }

  function handleRegister(data) {
    console.log(data);
  }
  return (
    <>
      <div className="flex flex-col mt-8 mb-4 xsm:mx-2 xl:mx-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="xsm:text-10 sm:text-10 lg:text-20 text-title ">
            Perguntas <span className="text-primary-active">Frequentes</span>
          </h1>
          <button onClick={() => openModalCreate()}>Adicionar FAQ</button>
        </div>
        <div className="mb-28 ">
          {faqList.map(({ question, response }, index) => (
            <Accordion key={index} title={question} edit>
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
            left: "20%",
            right: "20%",
            bottom: "20%",
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
            className="flex-1 flex-col lg:mt-20 space-y-4"
            onSubmit={handleSubmit(handleRegister)}
          >
            <div className="flex flex-col">
              <label className="text-14 font-medium">Pergunta</label>
              <input
                className="h-10 border border-grey-text rounded-sm focus:outline-primary-active px-4"
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
                className="border border-grey-text rounded-sm focus:outline-primary-active px-4"
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
