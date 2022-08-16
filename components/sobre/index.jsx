import { FileTextOutlined } from "@ant-design/icons";

const Sobre = () => {
  return (
    <div className="flex flex-col items-center pt-8 pb-4 px-10 bg-bg-container">
      <div>
        <h1 className="text-38 text-title mb-6">
          Sobre o <span className="text-primary-active">Egresso</span>
        </h1>
        <span className="font-medium text-title">
          Um portal de Egressos do IFNMG Campus - Salinas para seus Ex-Alunos, que integra e promove
          o acesso a informações e oportunidades.
        </span>
        <p className=" font-light text-15 my-4 ">
          O Instituto Federal do Norte de Minas – Campus Salinas (IFNMG – Salinas), atua no
          crescimento local e regional, com objetivo de desenvolver educação profissionalizante nos
          diversos níveis básicos, técnico, tecnológico e superior. Capacitando profissionais para o
          mundo do trabalho. Portanto o IFNMG Campus - Salinas preparou um espaço especial para se
          aproximar ainda mais de você. Esse é um convite para você voltar ao IF e saber das
          novidades e tendências na sua área profissional, reencontrar os professores, os amigos, os
          colegas, e dar um alô para o pessoal. Atualize suas informações pessoais e profissionais,
          e confira por aqui as novidades. Seja bem-vindo ao portal do Egresso IFNMG. <br />
          <br />O Acompanhamento de Egressos é um projeto com a visão e missão de identificar as
          experiências profissionais dos egressos, investigando sua inserção no mercado de trabalho
          e como o ensino do IFNMG foi relevante em sua vida profissional, bem como na continuação
          de sua formação. Possibilitando contribuir para o planejamento, definição e
          retroalimentação das políticas educacionais do IFNMG, em nível mais específico, sendo de
          suma importância para redefinir de forma didática, curricular e avaliativa do Plano de
          Curso. Sendo uma avaliação prática da qualidade do ensino oferecido pelo IFNMG, conhecendo
          as realidades, atividades e oportunidades encontradas pelos egressos.
          <br />
          <br /> Para se realizar essa avaliação foi elaborado o questionario abaixo para egressos
          do IFNMG (que já concluíram algum curso no IFNMG, Campus Salinas).
          <br />
          <br /> Lembrando que podem responder aos questionários egressos de qualquer curso
          oferecido pelo IFNM, campus Salinas, seja técnico, tecnólogo ou graduação.
          <br />
          <br /> Pedimos assim a colaboração de você, que se enquadram em ao menos uma dessas
          situações para que preencha os questionários e ajude a compreender e aprimorar os cursos
          do IFNMG. Ambos os questionários são rápidos e práticos de serem respondidos.
        </p>
      </div>

      <h1 className="text-38 text-title mt-6">
        Questionário do <span className="text-primary-active">Egresso</span>
      </h1>

      <button className="flex items-center my-8 py-1.5 px-8 text-primary-active borde-solid border-primary-active border rounded-sm hover:border-primary hover:text-primary">
        Acessar questionário
        <FileTextOutlined className="ml-2" />
      </button>
    </div>
  );
};

export default Sobre;
