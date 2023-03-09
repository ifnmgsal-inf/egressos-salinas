/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from "react";
import { AuthUserContext } from "../../contexts/authUserContext";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import InputMask from "react-input-mask";

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

  const { registrationIn, loading } = useContext(AuthUserContext);

  function handleRegister(data) {
    registrationIn(data);
  }
  console.log(loading);

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

  function cpfConfirmation() {
    const cpf = document.querySelector("input[name=cpf]");
    const validCpf = cpf.value.match(/\d/g);

    if (validCpf?.length == 11) {
      cpf.setCustomValidity("");
    } else {
      cpf.setCustomValidity("CPF inválido.");
    }
  }

  return (
    <div className="flex h-full justify-center my-10">
      <div className="flex flex-col justify-center">
        <div className="xsm:mx-2">
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
              className="xsm:max-w-350 md:max-w-500 xsm:file:text-13 xsm:file:my-4 lg:file:my-8 file:text-primary-active file:border-solid file:border-primary-active file:border file:rounded-sm file:hover:border-primary file:hover:text-primary file:cursor-pointer lg:file:px-6 file:py-1.5 file:bg-white"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <form className="flex flex-col" onSubmit={handleSubmit(handleRegister)}>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-14 font-medium">Nome Completo</label>
                <input
                  className="h-10 xsm:max-w-350 xsm:min-w-200 xsm:text-13 md:text-15 text-grey-text border border-grey-text rounded-sm focus:outline-primary-active xsm: px-1 md:px-2"
                  {...register("name")}
                  placeholder="Seu nome"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-14 font-medium">CPF</label>
                <InputMask
                  className="h-10 xsm:max-w-350 xsm:min-w-200 xsm:text-13 md:text-15 text-grey-text border border-grey-text rounded-sm focus:outline-primary-active xsm: px-1 md:px-2"
                  {...register("cpf")}
                  mask="999.999.999-99"
                  placeholder="000.000.000-00"
                  onChange={cpfConfirmation}
                  type="cpf"
                  id="cpf"
                  name="cpf"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-14 font-medium">Curso</label>
                <select
                  className="h-10 xsm:max-w-350 xsm:min-w-200 xsm:text-13 md:text-15 text-grey-text border border-grey-text rounded-sm focus:outline-primary-active xsm:px-1 md:px-2"
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
                  className="h-10 xsm:max-w-350 xsm:min-w-200 xsm:text-13 md:text-15 text-grey-text border border-grey-text rounded-sm focus:outline-primary-active xsm:px-1 md:px-2"
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
                <label className="text-14 font-medium">Data de conclusão</label>
                <input
                  className="h-10 xsm:max-w-350 xsm:min-w-200 xsm:text-13 md:text-15 text-grey-text border border-grey-text rounded-sm focus:outline-primary-active xsm:px-1 md:px-4 uppercase"
                  {...register("conclusionYear")}
                  type="date"
                  max={new Date().toISOString().split("T")[0]}
                  id="conclusionYear"
                  name="conclusionYear"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-14 font-medium">Email</label>
                <input
                  className="h-10 xsm:max-w-350 xsm:min-w-200 xsm:text-13 md:text-15 text-grey-text border border-grey-text rounded-sm focus:outline-primary-active xsm: px-1 md:px-2"
                  {...register("email")}
                  placeholder="exemplo@email.com"
                  type="text"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-14 font-medium">Senha</label>
                <input
                  className="h-10 xsm:max-w-350 xsm:min-w-200 xsm:text-13 md:text-15 text-grey-text border border-grey-text rounded-sm focus:outline-primary-active xsm: px-1 md:px-2"
                  {...register("password")}
                  onChange={passwordConfirmation}
                  type="password"
                  id="password"
                  name="password"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-14 font-medium">Confirmar Senha</label>
                <input
                  className="h-10 xsm:max-w-350 xsm:min-w-200 xsm:text-13 md:text-15 text-grey-text border border-grey-text rounded-sm focus:outline-primary-active xsm: px-1 md:px-2"
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
              className="flex items-center justify-center bg-primary-active text-15 text-disable h-10 mt-10 rounded-sm shadow hover:bg-primary "
              type="submit"
              disabled={loading}
            >
              {loading && (
                <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
                  <path
                    className="fill-gray-400"
                    d="M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z"
                  ></path>
                  <path
                    className="fill-white"
                    d="M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z"
                  ></path>
                </svg>
              )}
              <span className="ml-2">{loading ? "Aguarde ..." : "Cadastrar"}</span>
            </button>
            {/* <button
              type="button"
              disabled
              className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-2 rounded border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-800 hover:bg-blue-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-75"
            >
              <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
                <path
                  className="fill-blue-800"
                  d="M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z"
                ></path>
                <path
                  className="fill-blue-100"
                  d="M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z"
                ></path>
              </svg>
              <span>Loading...</span>
            </button> */}
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
