/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../../contexts/authUserContext";

import { useRouter } from "next/router";

import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";

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
    link: "/nossos-egressos",
  },
];

const NavBar = ({ type = "full" }) => {
  const [navbar, setNavbar] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const { signOutUser, setUser, user, isMobile } = useContext(AuthUserContext);

  const data = type === "dashboard" ? user : null;

  const router = useRouter();

  const goOut = () => {
    router.push("/");
    signOutUser();
    setUser(null);
  };

  function handleScroll() {
    setScrollTop(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className="w-full">
      <div
        className={`${
          type === "full" ? "justify-around" : "justify-between md:mx-10"
        } mx-auto md:items-center lg:flex`}
      >
        <div>
          <div
            className={`flex items-center justify-between ${
              type === "full" ? "xsm:pt-2 md:pt-2 lg:py-2 " : "py-1"
            } px-2 lg:block`}
          >
            {type === "dashboard" ? (
              <img
                className="ml-2"
                src={isMobile ? "/icon_if.png" : "/logo_egressos.png"}
                alt="Logo IF"
                height={isMobile ? 5 : 55}
                width={isMobile ? 20 : 200}
              />
            ) : (
              <Link href={"/"}>
                <img
                  className="cursor-pointer ml-3"
                  src={isMobile ? "/icon_if.png" : "/logo_egressos.png"}
                  alt="Logo IF"
                  height={isMobile ? 5 : 55}
                  width={isMobile ? 20 : 200}
                />
              </Link>
            )}
            <div className="lg:hidden">
              <button
                className="mx-2 pt-2 text-gray-700 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 lg:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            {data ? (
              <div className="flex items-center justify-end">
                <div className="flex flex-col text-white text-13 font-light">
                  <span>
                    Olá, <span className="text-white font-medium uppercase">{data.name}</span>
                  </span>
                  <span
                    className="flex justify-end font-light hover:font-medium cursor-pointer"
                    onClick={goOut}
                  >
                    Sair
                  </span>
                </div>
                <span className="inline-block mx-4" style={{ width: "40px", height: "40px" }}>
                  {data.imageURL ? (
                    <img
                      className="shadow-2xl"
                      style={{
                        borderRadius: "50%",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={data.imageURL}
                      alt=""
                    />
                  ) : (
                    <UserOutlined
                      className="flex items-center justify-center text-white-text text-20 rounded-full"
                      style={{
                        borderRadius: "50%",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        backgroundColor: "#D9D9D9",
                      }}
                    />
                  )}
                </span>
              </div>
            ) : (
              <>
                <ul className="items-center justify-center space-y-3 lg:flex lg:space-x-16 lg:space-y-0 lg:mt-10 mx-4 my-4">
                  {links.map(({ label, link }) => (
                    <div
                      key={link}
                      className="flex lg:h-10 justify-center cursor-pointer text-disable text-13 hover:text-white hover:border-b hover:border-b-primary"
                    >
                      <Link href={link}>{label}</Link>
                    </div>
                  ))}
                </ul>
                <div className="mt-3 lg:hidden">
                  <div className="flex flex-col space-y-4 mx-10">
                    <Link href={"/login"}>
                      <button className="inline-block w-full py-1 px-10 text-white borde-solid border rounded-sm hover:text-white hover:border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150">
                        Entrar
                      </button>
                    </Link>
                    <Link href={"/cadastro"}>
                      <button className="inline-block w-full py-1 px-6 text-white bg-primary-active borde-solid border border-primary-active rounded-sm hover:bg-primary hover:border-primary hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150">
                        Criar conta
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {type === "full" && (
          <div className="hidden space-x-4 lg:inline-block">
            <Link href={"/login"}>
              <button className="py-1.5 px-10 text-white text-12 borde-solid border rounded-sm hover:text-white hover:border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150">
                Entrar
              </button>
            </Link>
            <Link href={"/cadastro"}>
              <button className="py-1.5 px-6 text-white text-12 bg-primary borde-solid border border-primary rounded-sm hover:bg-primary hover:border-primary hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150">
                Criar conta
              </button>
            </Link>
          </div>
        )}
      </div>
      {scrollTop > 50 && type === "full" && (
        <div
          className={`fixed top-0 left-0 right-0 z-40 justify-around mx-auto md:items-center lg:flex ${
            isMobile ? "opacity-95" : "opacity-90"
          } bg-title xsm:h-14 sm:h-16 shadow-md lg:pt-6 lg:pb-4`}
        >
          <div className="flex items-center justify-between px-2 pt-2 lg:py-5 lg:block">
            {type === "dashboard" ? (
              <img
                src={isMobile ? "/icon_if.png" : "/logo_egressos.png"}
                alt="Logo IF"
                height={isMobile ? 5 : 55}
                width={isMobile ? 20 : 200}
              />
            ) : (
              <Link href={"/"}>
                <img
                  className="cursor-pointer ml-3"
                  src={isMobile ? "/icon_if.png" : "/logo_egressos.png"}
                  alt="Logo IF"
                  height={isMobile ? 5 : 55}
                  width={isMobile ? 20 : 200}
                />
              </Link>
            )}
            <div className="lg:hidden">
              <button
                className=" p-2 text-white rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 lg:block md:pb-0 md:mt-0 bg-title ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-3 lg:flex lg:space-x-16 lg:space-y-0 lg:pt-2 mx-4">
                {links.map(({ label, link }) => (
                  <div
                    key={link}
                    className="flex lg:h-7 pb-2 justify-center cursor-pointer text-white text-13 hover:text-white hover:border-b-2 hover:border-b-primary"
                  >
                    <Link href={link}>{label}</Link>
                  </div>
                ))}
              </ul>
              <div className="lg:hidden py-4">
                <div className="flex flex-col space-y-4 mx-10">
                  <Link href={"/login"}>
                    <button className="inline-block w-full py-1 text-white borde-solid border border-white rounded-sm hover:text-primary hover:border-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150">
                      Entrar
                    </button>
                  </Link>
                  <Link href={"/cadastro"}>
                    <button className="inline-block w-full py-1 text-white bg-primary borde-solid border border-primary rounded-sm hover:bg-primary hover:border-primary hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150">
                      Criar conta
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden space-x-4 lg:inline-block">
            <Link href={"/login"}>
              <button className="text-12 py-1.5 px-10 text-white borde-solid border border-white rounded-sm hover:text-white hover:border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150">
                Entrar
              </button>
            </Link>
            <Link href={"/cadastro"}>
              <button className="text-12 py-1.5 px-6 text-white bg-primary borde-solid border border-primary rounded-sm hover:bg-primary hover:border-primary hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150">
                Criar conta
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

// return (
//   <div className="flex justify-between items-center mx-10 pt-1">
//     {type === "dashboard" ? (
//       <img src="/icon_if.png" alt="Logo IF" height={55} width={200} />
//     ) : (
//       <Link href={"/"}>
//         <img
//           className="cursor-pointer"
//           src="/icon_if.png"
//           alt="Logo IF"
//           height={55}
//           width={200}
//         />
//       </Link>
//     )}

//     {type === "full" && (
//       <div className="flex xl:space-x-4 h-12 mt-8 pb-2">
//         {links.map(({ label, link }) => (
//           <div
//             key={link}
//             className="flex w-100 justify-center cursor-pointer text-disable text-12 hover:text-white hover:border-b hover:border-b-primary-active"
//           >
//             <Link href={link}>{label}</Link>
//           </div>
//         ))}
//       </div>
//     )}

//     {data ? (
//       <div className="flex items-center">
//         <div className="flex flex-col text-white text-13 font-light">
//           <span>
//             Olá, <span className="text-white font-medium uppercase">{data.name}</span>
//           </span>
//           <span
//             className="flex justify-end font-light hover:font-medium cursor-pointer"
//             onClick={goOut}
//           >
//             Sair
//           </span>
//         </div>
//         <span className="inline-block mx-4" style={{ width: "40px", height: "40px" }}>
//           {data.imageURL ? (
//             <img
//               className="shadow-2xl"
//               style={{ borderRadius: "50%", width: "100%", height: "100%", objectFit: "cover" }}
//               src={data.imageURL}
//               alt=""
//             />
//           ) : (
//             <UserOutlined
//               className="flex items-center justify-center text-white-text text-20 rounded-full"
//               style={{
//                 borderRadius: "50%",
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 backgroundColor: "#D9D9D9",
//               }}
//             />
//           )}
//         </span>
//       </div>
//     ) : (
//       <div className="space-x-4">
//         {type === "full" || type === "registration" ? (
//           <Link href={"/login"}>
//             <button className="py-1.5 px-10 text-disable text-12 borde-solid border rounded-sm hover:text-white hover:border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150">
//               Entrar
//             </button>
//           </Link>
//         ) : null}

//         {type === "full" || type === "login" ? (
//           <Link href={"/cadastro"}>
//             <button className="py-1.5 px-6 text-disable text-12 bg-primary-active borde-solid border border-primary-active rounded-sm hover:bg-primary hover:border-primary hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150">
//               Cadastrar-se
//             </button>
//           </Link>
//         ) : null}
//       </div>
//     )}
//   </div>
// );
