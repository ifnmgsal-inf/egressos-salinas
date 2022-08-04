import CountUp from "react-countup";

const History = () => {
  return (
    <div className="mx-10 py-6">
      <div>
        <h1 className="font-medium text-38 text-title leading-tight">
          Nossa história continua após
          <br /> a formatura
        </h1>
        <p className="font-light text-18 my-5">
          Informações sobre egressos do ensino médio, técnico e Superior oferecidos por todo o
          grande Norte de Minas
          <br /> no Instituto Federal do Norte de Minas Gerais - Campus Salinas.
        </p>
      </div>
      <div className="flex mt-16 mb-5 items-center justify-between">
        <div className="basis-1/2 ">
          <button className="py-1.5 px-8 text-primary borde-solid border-primary border rounded-sm hover:border-primary-active hover:text-primary-active">
            O que é o Portal Egressos?
          </button>
        </div>
        <div className="flex basis-1/4 flex-col items-center">
          <CountUp
            className="text-50 text-primary"
            separator="."
            end={99999}
            enableScrollSpy={true}
            duration={4}
          />
          <span className="text-16 font-medium -mt-4">Egressos</span>
        </div>
      </div>
    </div>
  );
};

export default History;
