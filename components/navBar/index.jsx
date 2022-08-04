const links = [
  {
    label: "Início",
    link: "link",
  },
  {
    label: "Sobre",
    link: "link",
  },
  {
    label: "Notícias",
    link: "link",
  },
  {
    label: "Nossos egressos",
    link: "link",
  },
];

const NavBar = () => {
  return (
    <div className="flex justify-between items-center mx-10">
      <a>
        <img className="cursor-pointer" src="/logo_egressos.png" alt="Logo IF" />
      </a>
      <div className="flex space-x-4 h-12 mt-8">
        {links.map(({ label, link }) => (
          <div
            key={link}
            className="flex w-100 justify-center cursor-pointer text-disable text-12 hover:text-white hover:border-b hover:border-b-primary-active"
          >
            <a>{label}</a>
          </div>
        ))}
      </div>
      <div className="space-x-4">
        <button className="py-1.5 px-10 text-disable text-12 borde-solid border rounded-sm hover:text-white hover:border-white transition-all">
          Entrar
        </button>
        <button className="py-1.5 px-6 text-disable text-12 bg-primary borde-solid border border-primary rounded-sm hover:bg-primary-active hover:text-white transition-all">
          Cadastrar-se
        </button>
      </div>
    </div>
  );
};

export default NavBar;
