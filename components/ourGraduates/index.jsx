const OurGraduates = () => {
  return (
    <div className="flex flex-col items-center mt-8 mb-4 mx-10">
      <h1 className="text-38 text-title">
        Nossos <span className="text-primary">Egressos</span>
      </h1>
      <p className="text-center font-light text-18 my-4 ">
        Precisa se certificar de que alguém realmente concluiu o ensino médio, técnico e ou Superior
        oferecidos pelo Instituto Federal do Norte de Minas Gerais - Campus Salinas? <br />
        Você pode conferir em nosso Portal. Aproveite e veja também dados estatísticos sobre nossos
        egressos.
      </p>

      <button className="my-8 py-1.5 px-8 text-primary borde-solid border-primary border rounded-sm hover:border-primary-active hover:text-primary-active">
        Mais informações
      </button>
    </div>
  );
};

export default OurGraduates;
