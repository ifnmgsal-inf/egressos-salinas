import { useState } from "react";

import Accordion from "../accordion";

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

const Faq = () => {
  return (
    <div className="flex flex-col mt-8 mb-4 mx-10">
      <h1 className="xsm:text-24 sm:text-24 lg:text-30 text-title mb-6">
        Perguntas <span className="text-primary-active">Frequentes</span>
      </h1>
      <div className="mb-28 ">
        {faqList.map(({ question, response }, index) => (
          <Accordion key={index} title={question}>
            {response}
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
