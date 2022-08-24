import { FacebookFilled, InstagramFilled, YoutubeFilled } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="h-96 bg-cover bg-[url('/BG.png')] border-t-4 border-primary-active">
      <div className="flex flex-col justify-center items-center">
        <div className="flex sm:flex-col md:flex-row items-start justify-center sm:space-x-2 md:space-x-4 xl:space-x-16 mt-16 border-b-[0.5px] border-grey-text md:pb-4 xl:pb-16">
          <div className="flex flex-col items-center space-y-8">
            <img src="/icon_if_footer.png" alt="" height={78} width={60} />
            <span className="text-grey-text text-13">
              Fazenda Varginha Km 02 Rod. Salinas/
              <br />
              Taiobeiras Salinas/MG - CEP: 39.560-000
              <br /> Fone/Fax: (38) 3841-7000
              <br /> E-mail: comunicacao.salinas@ifnmg.edu.br
            </span>
          </div>
          <div className="md:space-y-2 xl:space-y-4">
            <h2 className="text-14 text-primary font-semibold">Início</h2>
            <h3 className="text-13 text-bg-grey">O que é o portal de egressos ?</h3>
            <h3 className="text-13 text-bg-grey">Notícias</h3>
            <h3 className="text-13 text-bg-grey">Depoimentos</h3>
          </div>
          <div className="md:space-y-2 xl:space-y-4">
            <h2 className="text-14 text-primary font-semibold">Sobre</h2>
            <h3 className="text-13 text-bg-grey">Sobre o egresso</h3>
            <h3 className="text-13 text-bg-grey">Questionário do egresso</h3>
            <h3 className="text-13 text-bg-grey">Pergutas frequentes</h3>
          </div>
          <div className="md:space-y-2 xl:space-y-4">
            <h2 className="text-14 text-primary font-semibold">Notícias</h2>
            <h3 className="text-13 text-bg-grey">Todas Notícias</h3>
          </div>
          <div className="md:space-y-2 xl:space-y-4">
            <h2 className="text-14 text-primary font-semibold">Nossos egressos</h2>
            <h3 className="text-13 text-bg-grey">Todos Egressos</h3>
          </div>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="text-12 text-grey-text my-4">
          Copyright © 2022 Portal Egressos Do IFNMG-Campus Salinas | Tales Ferreira®
        </div>
        <div className="text-12 my-4 space-x-6">
          <FacebookFilled className="text-16 text-grey-text" />
          <InstagramFilled className="text-16 text-grey-text" />
          <YoutubeFilled className="text-18 text-grey-text" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
