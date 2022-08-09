import ScrollToTop from "react-scroll-to-top";

import NavBar from "../components/navBar";
import History from "../components/history";
import News from "../components/news";
import OurGraduates from "../components/ourGraduates";
import Depositions from "../components/depositions";

export default function Home() {
  return (
    <div id="main">
      <main>
        <div className="top-0 h-screen bg-cover bg-[url('/bg_header.jpg')] bg-fixed border-b-4 border-primary-active">
          <NavBar type={"full"} />
          <div className="flex flex-col mt-52">
            <span className="flex font-extra-light text-white text-48 justify-center">
              Você vai em frente. A gente acompanha.
            </span>
            <div>
              <p className="flex text-center mt-6 text-white text-16 font-semibold justify-center">
                Queremos ser a ponte para seu crescimento pessoal e profissional.
                <br /> Sinta-se à vontade para compartilhar bons momentos e construir grandes ideias
                <br />
                conosco.
              </p>
            </div>
          </div>
        </div>
        <History />
        <News />
        <OurGraduates />
        <Depositions />
        <ScrollToTop smooth={true} />
      </main>

      <footer></footer>
    </div>
  );
}
