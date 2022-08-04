const depositionsList = [
  {
    image: "/bg_header.jpg",
    name: "Pâmela Veridiane",
    message:
      "A Licenciatura em Matemática me deu suporte para desenvolver minhas estratégias pedagógicas e de estudo. A partir disso posso contribuir para uma educação mais justa e humana.",
  },
  {
    image: "/bg_header.jpg",
    name: "Rodrigo Medeiros",
    message:
      "O IFNMG é minha segunda casa. Foi lá que fiz minha primeira faculdade, primeira pós graduação e meu mestrado acadêmico. Espero retornar em breve para novos desafios.",
  },
];

const Depositions = () => {
  return (
    <div className="flex flex-col mt-10 mb-4 mx-10">
      <h1 className="text-38 text-title">
        Novos <span className="text-primary">Depoimentos</span>
      </h1>
    </div>
  );
};

export default Depositions;
