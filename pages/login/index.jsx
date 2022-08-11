import { useContext } from "react";
import { AuthUserContext } from "../../contexts/authUserContext";
import { useForm } from "react-hook-form";

import Link from "next/link";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const { autenticationUser, singIn } = useContext(AuthUserContext);

  function handleSingIn(data) {
    singIn(data);
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div>
          <Link href={"/"}>
            <a>voltar</a>
          </Link>

          <h1>Agora precisamos que você se identifique... </h1>
          <form className="flex flex-col" onSubmit={handleSubmit(handleSingIn)}>
            <label>Email</label>
            <input
              {...register("email")}
              type="text"
              id="email"
              name="email"
              placeholder="Email..."
              required
            />
            <label>Senha</label>
            <input
              {...register("password")}
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              required
            />
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
