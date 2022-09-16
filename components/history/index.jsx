import { useContext } from "react";
import { AuthUserContext } from "../../contexts/authUserContext";

import CountUp from "react-countup";
import Link from "next/link";

const History = () => {
  const { usersNumber } = useContext(AuthUserContext);
  return (
    <div className="mx-10 py-6">
      <div>
        <h1 className="font-medium xsm:text-20 sm:text-20 lg:text-30 text-title leading-tight">
          Nossa história continua após
          <br /> a formatura
        </h1>
        <p className="font-light xsm:text-15 lg:text-18 my-5">
          Informações sobre egressos do ensino médio, técnico e Superior oferecidos por todo o
          grande Norte de Minas no Instituto Federal do Norte de Minas Gerais - Campus Salinas.
        </p>
      </div>
      <div className="flex xsm:flex-col sm:flex-col md:flex-row lg:flex-row mt-16 mb-5 items-center justify-between">
        <div className="basis-1/2">
          <Link href={"/sobre"}>
            <button className="py-1.5 px-8 text-primary borde-solid border-primary-active border rounded-sm hover:border-primary hover:text-primary">
              O que é o Portal Egressos?
            </button>
          </Link>
        </div>
        <div className="flex basis-1/4 flex-col items-center">
          <CountUp
            className="text-50 text-primary-active"
            separator="."
            end={usersNumber}
            enableScrollSpy={true}
            duration={usersNumber < 100 ? 0.7 : 4}
          />
          <span className="text-16 font-medium -mt-4">Egressos</span>
        </div>
      </div>
    </div>
  );
};

export default History;
