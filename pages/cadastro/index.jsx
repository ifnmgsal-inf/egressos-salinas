import { useContext, useState } from "react";
import { AuthUserContext } from "../../contexts/authUserContext";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { ArrowLeftOutlined, PaperClipOutlined, UserOutlined } from "@ant-design/icons";

const Registration = () => {
  const [image, setImage] = useState(null);
  const { register, handleSubmit } = useForm();

  const { singIn } = useContext(AuthUserContext);

  function handleRegister(data) {
    console.log(data);

    // singIn(data);
  }

  function passwordConfirmation() {
    const password = document.querySelector("input[name=password]");
    const confirmation = document.querySelector("input[name=confirmation]");

    if (password.value === confirmation.value) {
      confirmation.setCustomValidity("");
    } else confirmation.setCustomValidity("As senhas não conferem");
  }

  return (
    <div className="flex h-screen items-center justify-center mt-36">
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
          <div className="flex flex-col items-center">
            <span className="inline-block mt-8" style={{ width: "150px", height: "150px" }}>
              {image ? (
                <img
                  className="shadow-2xl"
                  style={{ borderRadius: "50%", width: "100%", height: "100%", objectFit: "cover" }}
                  src={URL.createObjectURL(image)}
                  alt=""
                />
              ) : (
                <UserOutlined
                  className="flex items-center justify-center text-white-text text-50 rounded-full"
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
            <input
              {...register("image")}
              className="file:my-8 file:text-primary-active file:border-solid file:border-primary-active file:border file:rounded-sm file:hover:border-primary file:hover:text-primary file:cursor-pointer file:px-6 file:py-1.5 file:bg-white"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <form className="flex flex-col my-6 " onSubmit={handleSubmit(handleRegister)}>
            <label className="text-14 font-medium">Nome Completo</label>
            <input
              className="h-10 border border-grey-text rounded-sm mb-4 focus:outline-primary-active px-4"
              {...register("name")}
              type="text"
              id="name"
              name="name"
              required
            />
            <label className="text-14 font-medium">CPF</label>
            <input
              className="h-10 border border-grey-text rounded-sm mb-4 focus:outline-primary-active px-4"
              {...register("cpf")}
              type="cpf"
              id="cpf"
              name="cpf"
              required
            />
            <label className="text-14 font-medium">Email</label>
            <input
              className="h-10 border border-grey-text rounded-sm mb-4 focus:outline-primary-active px-4"
              {...register("email")}
              type="text"
              id="email"
              name="email"
              required
            />
            <label className="text-14 font-medium">Senha</label>
            <input
              className="h-10 border border-grey-text rounded-sm mb-4 focus:outline-primary-active px-4"
              {...register("password")}
              type="password"
              id="password"
              name="password"
              required
              onChange={passwordConfirmation}
            />
            <label className="text-14 font-medium">Confirmar Senha</label>
            <input
              className="h-10 border border-grey-text rounded-sm focus:outline-primary-active px-4"
              {...register("confirmation")}
              type="password"
              id="confirmation"
              name="confirmation"
              required
              onChange={passwordConfirmation}
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

export default Registration;
