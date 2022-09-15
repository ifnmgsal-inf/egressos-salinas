import Link from "next/link";

const OurGraduates = () => {
  return (
    <div className="flex flex-col items-center mt-8 mb-4 mx-10">
      <h1 className="xsm:text-24 sm:text-24 lg:text-30 text-title">
        Nossos <span className="text-primary-active">Egressos</span>
      </h1>
      <p className="text-center font-light xsm:text-12 sm:text-14 lg:text-18 my-4 ">
        Precisa se certificar de que alguém realmente concluiu o ensino médio, técnico e ou Superior
        oferecidos pelo Instituto Federal do Norte de Minas Gerais - Campus Salinas? <br />
        Você pode conferir em nosso Portal. Aproveite e veja também dados estatísticos sobre nossos
        egressos.
      </p>

      <Link href={"/nossos-egressos"}>
        <button className="my-8 py-1.5 px-8 text-primary-active borde-solid border-primary-active border rounded-sm hover:border-primary hover:text-primary">
          Mais informações
        </button>
      </Link>
    </div>
  );
};

export default OurGraduates;
