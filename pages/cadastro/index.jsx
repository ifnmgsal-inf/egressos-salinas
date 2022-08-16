import { useContext } from "react";
import { AuthUserContext } from "../../contexts/authUserContext";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const { singIn } = useContext(AuthUserContext);

  function handleRegister(data) {
    console.log(data);
    if (password === confirmation) {
      confirmation.setCustomValidity("");
    } else confirmation.setCustomValidity("As senhas não conferem");
    // singIn(data);
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center mt-10">
        <div>
          <Link href={"/"}>
            <a className="flex items-center text-16 font-medium ">
              <ArrowLeftOutlined className="text-16 mr-2 text-primary-active" /> Voltar
            </a>
          </Link>

          <h1 className="text-title font-bold text-28 mt-4">
            Agora precisamos de algumas
            <br /> informações...
          </h1>
          <form className="flex flex-col my-6 " onSubmit={handleSubmit(handleRegister)}>
            <label className="text-14 font-medium">Nome Completo</label>
            <input
              className="h-10 border border-grey-text rounded-sm mb-4 focus:outline-primary-active"
              {...register("name")}
              type="text"
              id="name"
              name="name"
              required
            />
            <label className="text-14 font-medium">CPF</label>
            <input
              className="h-10 border border-grey-text rounded-sm mb-4 focus:outline-primary-active"
              {...register("cpf")}
              type="cpf"
              id="cpf"
              name="cpf"
              required
            />
            <label className="text-14 font-medium">Email</label>
            <input
              className="h-10 border border-grey-text rounded-sm mb-4 focus:outline-primary-active"
              {...register("email")}
              type="text"
              id="email"
              name="email"
              required
            />
            <label className="text-14 font-medium">Senha</label>
            <input
              className="h-10 border border-grey-text rounded-sm mb-4 focus:outline-primary-active"
              {...register("password")}
              type="password"
              id="password"
              name="password"
              required
            />
            <label className="text-14 font-medium">Confirmar Senha</label>
            <input
              className="h-10 border border-grey-text rounded-sm focus:outline-primary-active"
              {...register("confirmation")}
              type="password"
              id="confirmation"
              name="confirmation"
              required
            />
            <button
              className="bg-primary-active text-15 text-disable h-10 mt-10 rounded-sm shadow hover:bg-primary"
              type="submit"
            >
              Cadastrar
            </button>
            <Link href={"/login"}>
              <a className="flex items-center my-2 text-grey-text font-semibold text-14 cursor-pointer">
                Já tenho um cadastro.{" "}
                <span className="ml-2 font-normal text-primary-active underline"> Fazer login</span>
              </a>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
