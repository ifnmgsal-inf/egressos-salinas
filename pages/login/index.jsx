import { useContext, useState } from "react";
import { AuthUserContext } from "../../contexts/authUserContext";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { ArrowLeftOutlined, DownloadOutlined } from "@ant-design/icons";

const Login = () => {
  const [userEmail, setUserEmail] = useState(null);
  const { register, handleSubmit } = useForm();

  const { singIn, loading, PasswordResetUser } = useContext(AuthUserContext);

  function handleSingIn(data) {
    singIn(data, userEmail);
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className=" xsm:mx-5">
          <Link href={"/"}>
            <a className="flex items-center text-16 font-medium ">
              <ArrowLeftOutlined className="text-16 mr-2 text-primary-active" /> Voltar
            </a>
          </Link>

          <h1 className="text-title font-bold xsm:text-20 md:text-28 mt-4">
            Agora precisamos que você se
            <br /> identifique...{" "}
          </h1>
          <form className="flex flex-col my-6 " onSubmit={handleSubmit(handleSingIn)}>
            <label className="text-14 font-medium">Email</label>
            <input
              className="h-12 border border-grey-text rounded-sm mb-4 focus:outline-primary-active px-4"
              {...register("email")}
              onChange={(e) => setUserEmail(e.target.value)}
              type="text"
              id="email"
              name="email"
              required
            />
            <label className="text-14 font-medium">Senha</label>
            <input
              className="h-12 border border-grey-text rounded-sm focus:outline-primary-active px-4"
              {...register("password")}
              type="password"
              id="password"
              name="password"
              required
            />
            <span
              className="text-12 underline font-ligth text-primary mt-1 cursor-pointer hover:font-medium"
              onClick={() => PasswordResetUser(userEmail)}
            >
              Esqueci minha senha
            </span>
            <button
              className="flex items-center justify-center bg-primary-active text-15 text-disable h-10 mt-10 rounded-sm shadow hover:bg-primary "
              type="submit"
              disabled={loading}
            >
              {loading && (
                <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
                  <path
                    className="fill-white/30"
                    d="M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z"
                  ></path>
                  <path
                    className="fill-white"
                    d="M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z"
                  ></path>
                </svg>
              )}
              <span className="ml-2">{loading ? "Entrando..." : "Entrar"}</span>
            </button>
            <Link href={"/cadastro"}>
              <a className="flex items-center my-2 text-grey-text font-semibold text-14 cursor-pointer hover:text-primary">
                <DownloadOutlined className="text-16 text-primary rotate-270 mr-1" />
                Não tenho cadastro...
              </a>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
