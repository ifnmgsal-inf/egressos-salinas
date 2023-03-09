/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { SaveOutlined, CheckOutlined, UserOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../../../contexts/authUserContext";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

const CurriculoPage = () => {
  const [alteration, setAlteration] = useState(false);
  const { user, updateUserCurriculum, userCurriculum, getUserCurriculum } =
    useContext(AuthUserContext);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("name", userCurriculum?.name);
    setValue("birthDate", userCurriculum?.birthDate);
    setValue("address", userCurriculum?.address);
    setValue("phone", userCurriculum?.phone || "");
    setValue("email", userCurriculum?.email);
    setValue("description", userCurriculum?.description);
    setValue("education", userCurriculum?.education);
    setValue("languages", userCurriculum?.languages);
    setValue("extraCourses", userCurriculum?.extraCourses);
    setValue("professionalHistory", userCurriculum?.professionalHistory);
    setValue("publish", userCurriculum?.publish);
  });

  function handleCurriculum(data) {
    // console.log(data);
    updateUserCurriculum({ id: userCurriculum.id, user, ...data });
    getUserCurriculum(user);
  }

  return (
    <form
      className="xsm:px-2 sm:pl-5 lg:pl-10 lg:min-w-700 pb-20"
      onSubmit={handleSubmit(handleCurriculum)}
    >
      <div className="flex flex-col max-w-1000 bg-white justify-center my-8 border rounded-sm px-5 py-2">
        <h2 className="text-base mb-5 font-medium">Informações curriculares</h2>
        <div className="flex xsm:flex-col md:flex-row xl:flex-row">
          <span className="inline-block mx-4 xsm:mb-5" style={{ width: "150px", height: "150px" }}>
            {user?.imageURL ? (
              <img
                className="xl:shadow-xl"
                style={{ borderRadius: "50%", width: "100%", height: "100%", objectFit: "cover" }}
                src={user?.imageURL}
                alt=""
              />
            ) : (
              <UserOutlined
                className="flex items-center justify-center text-white-text text-30 rounded-full"
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
                className="xsm:text-sm md:text-15 mx-1 px-1 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
                placeholder="Nada informado."
                {...register("name")}
                type="text"
                onChange={() => setAlteration(true)}
                required
              />
            </div>
            <div className="mt-2">
              <label className="text-sm font-medium">Data de nascimento:</label>
              <input
                className="placeholder:text-14 xsm:text-sm md:text-15 mx-1 px-1 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm "
                placeholder="Nada informado."
                {...register("birthDate")}
                max={new Date().toISOString().split("T")[0]}
                onChange={() => setAlteration(true)}
                type="date"
                required
              />
            </div>
            <div className="mt-2">
              <label className="text-sm font-medium">Endereço:</label>
              <input
                className="placeholder:text-14 xsm:text-sm md:text-15 mx-1 px-1 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
                placeholder="Nada informado."
                {...register("address")}
                type="text"
                onChange={() => setAlteration(true)}
                required
              />
            </div>
            <div className="mt-2">
              <label className="text-sm font-medium">Telefone celular:</label>
              <InputMask
                className="placeholder:text-14 xsm:text-sm md:text-15 mx-1 px-1 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
                placeholder="Nada informado."
                {...register("phone")}
                mask="(99) 99999-9999"
                type="tel"
                onChange={() => setAlteration(true)}
                required
              />
            </div>
            <div className="mt-2">
              <label className="text-sm font-medium">E-mail:</label>
              <input
                className="placeholder:text-14 xsm:text-sm md:text-15 mx-1 px-1 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
                placeholder="Nada informado."
                {...register("email")}
                type="text"
                onChange={() => setAlteration(true)}
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-700 bg-white justify-center my-5 border rounded-sm px-5 py-2">
        <h2 className="text-base mb-4 font-medium">
          Breve descrição pessoal e objetivos profissionais
        </h2>
        <textarea
          {...register("description")}
          className="placeholder:text-14 form-control block w-full px-3 py-1.5 xsm:text-sm  md:text-15 font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
          id="description"
          rows="3"
          placeholder="Descrição"
          onChange={() => setAlteration(true)}
          required
        />
      </div>
      <div className="flex flex-col max-w-700 bg-white justify-center my-5 border rounded-sm px-5 py-2">
        <h2 className="text-base mb-1 font-medium">formação</h2>
        <input
          className="placeholder:text-14 xsm:text-sm p-2 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
          placeholder="Nada informado."
          {...register("education")}
          type="text"
          onChange={() => setAlteration(true)}
          required
        />
      </div>
      <div className="flex flex-col max-w-700 bg-white justify-center my-5 border rounded-sm px-5 py-2">
        <h2 className="text-base mb-1 font-medium">Idiomas</h2>
        <input
          className="xsm:text-sm p-2 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
          placeholder="Nada informado."
          {...register("languages")}
          type="text"
          onChange={() => setAlteration(true)}
          required
        />
      </div>
      <div className="flex flex-col max-w-700 bg-white justify-center my-5 border rounded-sm px-5 py-2">
        <h2 className="text-base mb-1 font-medium">Cursos extracurriculares</h2>
        <input
          className="xsm:text-sm p-2 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
          placeholder="Nada informado."
          {...register("extraCourses")}
          type="text"
          onChange={() => setAlteration(true)}
          required
        />
      </div>
      <div className="flex flex-col max-w-700 bg-white justify-center mt-5 mb-2 border rounded-sm px-5 py-2">
        <h2 className="text-base mb-1 font-medium">Histórico profissinal</h2>
        <input
          className="xsm:text-sm p-2 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
          placeholder="Nada informado."
          {...register("professionalHistory")}
          type="text"
          onChange={() => setAlteration(true)}
          required
        />
      </div>
      <div className="flex flex-col justify-start items-start space-y-3">
        <div className="flex items-center ml-1 mb-4">
          <input
            type="checkbox"
            className="accent-primary-active"
            {...register("publish")}
            onChange={() => setAlteration(true)}
          />
          <span className="text-14 ml-2">Publicar currículo.</span>
        </div>
        <button
          type="submit"
          disabled={!alteration}
          className="flex items-center px-8 py-2 text-13 font-medium text-primary cursor-pointer bg-icon-bgGreen backdrop-opacity-5 p-2.5 rounded-sm"
        >
          <CheckOutlined className="mr-1.5 text-14" /> Salvar
        </button>
      </div>
    </form>
  );
};

export default CurriculoPage;
