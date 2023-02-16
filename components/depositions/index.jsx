import { useContext, useState } from "react";
import { AuthUserContext } from "../../contexts/authUserContext";

// const depositionsList = [
//   {
//     image: "/bg_header.jpg",
//     name: "Pâmela Veridiane",
//     message:
//       "A Licenciatura em Matemática me deu suporte para desenvolver minhas estratégias pedagógicas e de estudo. A partir disso posso contribuir para uma educação mais justa e humana.",
//   },
//   {
//     image: "/bg_header.jpg",
//     name: "Rodrigo Medeiros",
//     message:
//       "O IFNMG é minha segunda casa. Foi lá que fiz minha primeira faculdade, primeira pós graduação e meu mestrado acadêmico. Espero retornar em breve para novos desafios.",
//   },
// ];

const Depositions = () => {
  const { testimonialsAll } = useContext(AuthUserContext);
  return (
    <div className="flex flex-col mt-10 mb-32 xsm:mx-10 xl:mx-32">
      <h1 className="xsm:text-24 sm:text-24 lg:text-30 text-title">
        Novos <span className="text-primary-active">Depoimentos</span>
      </h1>
      {testimonialsAll?.map(({ id, userImage, userName, userTestimony }) => (
        <div key={id} className="flex xsm:flex-col lg:flex-row mt-10 lg:odd:flex-row-reverse">
          <div className="flex flex-col items-center">
            <span className="inline-block" style={{ width: "150px", height: "150px" }}>
              <img
                style={{ borderRadius: "50%", width: "100%", height: "100%", objectFit: "cover" }}
                src={userImage}
                alt=""
              />
            </span>
            <span className="text-13 font-medium">{userName}</span>
          </div>
          <div className="flex max-h-170 mx-8 p-4 items-center bg-bg-grey rounded-sm drop-shadow-md xsm:text-xs md:text-base">
            {userTestimony}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Depositions;
