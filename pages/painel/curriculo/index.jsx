/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { EditOutlined, SaveOutlined, UserOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../../../contexts/authUserContext";
import { useForm } from "react-hook-form";

const CurriculoPage = () => {
  const [alteration, setAlteration] = useState(true);
  const { setUser, user, isMobile } = useContext(AuthUserContext);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("name", user?.name);
    setValue("birth-date", "1111");
    setValue("address", "rua");
    setValue("phone", "(38)988197980");
    setValue("email", user?.email);
    setValue("description", "Descrição do usuário");
  }, [user]);

  function handleUpdateCurriculum(data) {
    console.log(data);
  }

  return (
    <form className="xsm:px-2 lx:pl-10" onSubmit={handleSubmit(handleUpdateCurriculum)}>
      <div className="flex flex-col max-w-1000 bg-white justify-center my-10 border rounded-lg px-5 py-2">
        <h2 className="text-base mb-5 font-medium">Informações curriculares</h2>
        <div className="flex xsm:flex-col md:flex-row xl:flex-row pb-4">
          <span className="inline-block mx-4 xsm:mb-5" style={{ width: "150px", height: "150px" }}>
            {user?.imageURL ? (
              <img
                className="xl:shadow-2xl"
                style={{ borderRadius: "50%", width: "100%", height: "100%", objectFit: "cover" }}
                src={user?.imageURL}
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
          <div className="flex flex-col ml-2">
            <div>
              <label className="text-sm font-medium">Nome:</label>
              <input
                className="xsm:text-sm px-2 text-grey-text"
                {...register("name")}
                type="text"
                onChange={() => setAlteration(false)}
              />
            </div>
            <div className="mt-2">
              <label className="text-sm font-medium">Data de nascimento:</label>
              <input
                className="xsm:text-sm px-2 text-grey-text"
                {...register("birth-date")}
                type="text"
                onChange={() => setAlteration(false)}
              />
            </div>
            <div className="mt-2">
              <label className="text-sm font-medium">Endereço:</label>
              <input
                className="xsm:text-sm px-2 text-grey-text"
                {...register("address")}
                type="text"
                onChange={() => setAlteration(false)}
              />
            </div>
            <div className="mt-2">
              <label className="text-sm font-medium">Telefone celular:</label>
              <input
                className="xsm:text-sm px-2 text-grey-text"
                {...register("phone")}
                type="text"
                onChange={() => setAlteration(false)}
              />
            </div>
            <div className="mt-2">
              <label className="text-sm font-medium">E-mail:</label>
              <input
                className="xsm:text-sm px-2 text-grey-text"
                {...register("email")}
                type="text"
                onChange={() => setAlteration(false)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-700 bg-white justify-center my-5 border rounded-lg px-5 py-2">
        <h2 className="text-base mb-4 font-medium">
          Breve descrição pessoal e objetivos profissionais
        </h2>
        <textarea
          {...register("description")}
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-grey-text focus:outline-none"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Descrição"
          onChange={() => setAlteration(false)}
        />
      </div>
      <div className="flex flex-col max-w-700 bg-white justify-center my-5 border rounded-lg px-5 py-2">
        <h2 className="text-base mb-4 font-medium">formação</h2>
      </div>
      <div className="flex justify-start">
        <button
          type="submit"
          disabled={alteration}
          className="flex items-center cursor-pointer text-sm text-primary border border-primary-active px-4 py-0.5 rounded-sm hover:bg-primary-active hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          <SaveOutlined className="mr-1" /> Salvar
        </button>
      </div>
    </form>
  );
};

export default CurriculoPage;
