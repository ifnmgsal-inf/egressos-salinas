/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from "react";
import { AuthUserContext } from "../../contexts/authUserContext";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";

const courseOptions = [
  {
    value: "Técnico em Agroindústria - Integrado",
    label: "Técnico em Agroindústria - Integrado",
  },
  { value: "Técnico em Agropecuária - Integrado", label: "Técnico em Agropecuária - Integrado" },
  {
    value: "Técnico em Agropecuária - Integrado",
    label: "Técnico em Agropecuária - Integrado",
  },
  {
    value: "Técnico em Informática - Integrado",
    label: "Técnico em Informática - Integrado",
  },
  {
    value: "Licenciatura em Ciências Biológicas",
    label: "Licenciatura em Ciências Biológicas",
  },
  {
    value: "Licenciatura em Matemática",
    label: "Licenciatura em Matemática",
  },
  {
    value: "Licenciatura em Química",
    label: "Licenciatura em Química",
  },
  {
    value: "Licenciatura em Física",
    label: "Licenciatura em Física",
  },
  {
    value: "Licenciatura em Pedagogia",
    label: "Licenciatura em Pedagogia",
  },
  {
    value: "Tecnologia em Produção de Cachaça",
    label: "Tecnologia em Produção de Cachaça",
  },
  {
    value: "Bacharelado em Medicina Veterinária",
    label: "Bacharelado em Medicina Veterinária",
  },
  {
    value: "Bacharelado em Engenharia Florestal",
    label: "Bacharelado em Engenharia Florestal",
  },
  {
    value: "Bacharelado em Engenharia de Alimentos",
    label: "Bacharelado em Engenharia de Alimentos",
  },
  {
    value: "Bacharelado em Sistemas de Informação",
    label: "Bacharelado em Sistemas de Informação",
  },
];

const Registration = () => {
  const [image, setImage] = useState(null);
  const { register, handleSubmit } = useForm();

  const { registrationIn } = useContext(AuthUserContext);

  function handleRegister(data) {
    // console.log(data);

    registrationIn(data);
  }

  function passwordConfirmation() {
    const password = document.querySelector("input[name=password]");
    const confirmation = document.querySelector("input[name=confirmation]");

    if (password.value.length >= 8 || confirmation.value.length >= 8) {
      password.setCustomValidity("");
      confirmation.setCustomValidity("");
      if (password.value === confirmation.value) {
        confirmation.setCustomValidity("");
      } else confirmation.setCustomValidity("As senhas não conferem");
    } else {
      password.setCustomValidity("Sua senha precisa ter pelo menos 8 caracteres.");
      confirmation.setCustomValidity("Sua senha precisa ter pelo menos 8 caracteres.");
    }
  }

  return (
    <div className="flex h-full justify-center my-10">
      <div className="flex flex-col justify-center ">
        <div className="xsm:mx-4">
          <Link href={"/"}>
            <a className="flex items-center text-16 font-medium">
              <ArrowLeftOutlined className="text-16 mr-2 text-primary-active" /> Voltar
            </a>
          </Link>

          <h1 className="text-title font-bold xsm:text-16 lg:text-28 mt-4">
            Agora precisamos de algumas
            <br /> informações...
          </h1>
          <div className="flex flex-col items-center mb-2">
            <span className="inline-block mt-4" style={{ width: "130px", height: "130px" }}>
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
              className="xsm:max-w-280 md:max-w-500 xsm:file:text-13 xsm:file:my-4 lg:file:my-8 file:text-primary-active file:border-solid file:border-primary-active file:border file:rounded-sm file:hover:border-primary file:hover:text-primary file:cursor-pointer lg:file:px-6 file:py-1.5 file:bg-white"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <form className="flex flex-col" onSubmit={handleSubmit(handleRegister)}>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-14 font-medium">Nome Completo</label>
                <input
                  className="h-10 xsm:max-w-300 md:max-w-350 xsm:text-13 md:text-15 border border-grey-text rounded-sm focus:outline-primary-active xsm: px-1 md:px-2"
                  {...register("name")}
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-14 font-medium">CPF</label>
                <input
                  className="h-10 xsm:max-w-300 md:max-w-350 xsm:text-13 md:text-15 border border-grey-text rounded-sm focus:outline-primary-active xsm: px-1 md:px-2"
                  {...register("cpf")}
                  type="cpf"
                  id="cpf"
                  name="cpf"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-14 font-medium">Curso</label>
                <select
                  className="h-10 xsm:max-w-300 md:max-w-350 xsm:text-13 md:text-15 border border-grey-text rounded-sm focus:outline-primary-active xsm:px-1 md:px-2"
                  {...register("course")}
                  id="course"
                  name="course"
                  required
                >
                  {courseOptions.map(({ value, label }, index) => (
                    <option className="xsm:text-13 md:text-15" key={index} valeu={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-14 font-medium">Nível</label>
                <select
                  className="h-10 xsm:max-w-300 md:max-w-350 xsm:text-13 md:text-15 border border-grey-text rounded-sm focus:outline-primary-active xsm:px-1 md:px-2"
                  {...register("level")}
                  id="level"
                  name="level"
                  required
                >
                  <option className="xsm:text-13 md:text-15" value="Técnico">
                    Técnico
                  </option>
                  <option className="xsm:text-13 md:text-15" value="Superior">
                    Superior
                  </option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-14 font-medium">Ano de conclusão</label>
                <input
                  className="h-10 xsm:max-w-300 md:max-w-350 xsm:text-13 md:text-15 border border-grey-text rounded-sm focus:outline-primary-active xsm:px-1 md:px-4 uppercase"
                  {...register("conclusionYear")}
                  type="date"
                  id="conclusionYear"
                  name="conclusionYear"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-14 font-medium">Email</label>
                <input
                  className="h-10 xsm:max-w-300 md:max-w-350 xsm:text-13 md:text-15 border border-grey-text rounded-sm focus:outline-primary-active xsm: px-1 md:px-2"
                  {...register("email")}
                  type="text"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-14 font-medium">Senha</label>
                <input
                  className="h-10 xsm:max-w-300 md:max-w-350 xsm:text-13 md:text-15 border border-grey-text rounded-sm focus:outline-primary-active xsm: px-1 md:px-2"
                  {...register("password")}
                  type="password"
                  id="password"
                  name="password"
                  required
                  onChange={passwordConfirmation}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-14 font-medium">Confirmar Senha</label>
                <input
                  className="h-10 xsm:max-w-300 md:max-w-350 xsm:text-13 md:text-15 border border-grey-text rounded-sm focus:outline-primary-active xsm: px-1 md:px-2"
                  {...register("confirmation")}
                  type="password"
                  id="confirmation"
                  name="confirmation"
                  required
                  onChange={passwordConfirmation}
                />
              </div>
            </div>

            <button
              className="bg-primary-active text-15 text-disable h-10 mt-10 rounded-sm shadow hover:bg-primary"
              type="submit"
            >
              Cadastrar
            </button>
            <Link href={"/login"}>
              <a className="flex items-center my-2 text-grey-text font-semibold text-14 cursor-pointer">
                Já tenho um cadastro.{" "}
                <span className="ml-2 font-normal text-primary-active underline hover:font-medium">
                  {" "}
                  Fazer login
                </span>
              </a>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
