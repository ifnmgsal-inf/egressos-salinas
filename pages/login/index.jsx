import { useContext } from "react";
import { AuthUserContext } from "../../contexts/authUserContext";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { ArrowLeftOutlined, DownloadOutlined } from "@ant-design/icons";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const { singIn } = useContext(AuthUserContext);

  function handleSingIn(data) {
    singIn(data);
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div>
          <Link href={"/"}>
            <a className="flex items-center text-16 font-medium ">
              <ArrowLeftOutlined className="text-16 mr-2 text-primary-active" /> Voltar
            </a>
          </Link>

          <h1 className="text-title font-bold text-28 mt-4">
            Agora precisamos que você se
            <br /> identifique...{" "}
          </h1>
          <form className="flex flex-col my-6 " onSubmit={handleSubmit(handleSingIn)}>
            <label>Email</label>
            <input
              className="h-12 border border-grey-text rounded-sm mb-4 focus:outline-primary-active"
              {...register("email")}
              type="text"
              id="email"
              name="email"
              required
            />
            <label>Senha</label>
            <input
              className="h-12 border border-grey-text rounded-sm focus:outline-primary-active"
              {...register("password")}
              type="password"
              id="password"
              name="password"
              required
            />
            <button
              className="bg-primary-active text-18 text-disable h-10 mt-10 rounded-sm shadow hover:bg-primary"
              type="submit"
            >
              Entrar
            </button>
            <a className="flex items-center my-2 text-grey-text font-semibold text-14">
              <DownloadOutlined className="text-16 text-primary rotate-270 mr-1" />
              Não tenho cadastro
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
