import NavBar from "../navBar";

const Header = () => {
  return (
    <div className="top-0 lg:h-screen bg-cover bg-[url('/bg_header.jpg')] lg:bg-fixed border-b-4 border-primary-active">
      <NavBar type={"full"} />
      <div className="flex flex-col xsm:my-40 lg:mt-52">
        <span className="flex font-extra-light xsm:text-white text-center xsm:text-3xl sm:text-3xl md:text-5xl xl:text-5xl justify-center">
          Você vai em frente. A gente acompanha.
        </span>
        <div>
          <p className="flex text-center mt-6 text-white xsm:mx-5 xsm:text-xs sm:text-xs md:text-md xl:text-md xsm:font-normal lg:font-semibold justify-center">
            Queremos ser a ponte para seu crescimento pessoal e profissional.
            <br /> Sinta-se à vontade para compartilhar bons momentos e construir grandes ideias
            <br />
            conosco.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
