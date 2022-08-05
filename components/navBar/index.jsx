import Link from "next/link";
import { useEffect, useState } from "react";
import { app } from "../../services/firebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const links = [
  {
    label: "Início",
    link: "/",
  },
  {
    label: "Sobre",
    link: "/sobre",
  },
  {
    label: "Notícias",
    link: "/noticias",
  },
  {
    label: "Nossos egressos",
    link: "/egressos",
  },
];

const NavBar = ({ type = "full" }) => {
  const [users, setUsers] = useState([]);

  const db = getFirestore(app);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      //   console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //   setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div className="flex justify-between items-center mx-10 pt-1">
      <Link href={"/"}>
        <img
          className="cursor-pointer"
          src="/logo_egressos.png"
          alt="Logo IF"
          height={55}
          width={200}
        />
      </Link>

      {type === "full" && (
        <div className="flex space-x-4 h-12 mt-8 pb-2">
          {links.map(({ label, link }) => (
            <div
              key={link}
              className="flex w-100 justify-center cursor-pointer text-disable text-12 hover:text-white hover:border-b hover:border-b-primary-active"
            >
              <Link href={link}>{label}</Link>
            </div>
          ))}
        </div>
      )}

      {users.length ? (
        <div className="flex flex-col text-white text-13 font-light">
          <span>
            Olá, <span className="text-white font-medium">{users[0].name}</span>
          </span>
          <span className="flex justify-end font-light hover:font-medium cursor-pointer">Sair</span>
        </div>
      ) : (
        <div className="space-x-4">
          {type === "full" || type === "registration" ? (
            <Link href={"/login"}>
              <button className="py-1.5 px-10 text-disable text-12 borde-solid border rounded-sm hover:text-white hover:border-white transition-all">
                Entrar
              </button>
            </Link>
          ) : null}

          {type === "full" || type === "login" ? (
            <button className="py-1.5 px-6 text-disable text-12 bg-primary borde-solid border border-primary rounded-sm hover:bg-primary-active hover:text-white transition-all">
              Cadastrar-se
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default NavBar;
