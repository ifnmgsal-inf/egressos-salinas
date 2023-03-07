/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from "react";
import { AuthUserContext } from "../../contexts/authUserContext";
import BasePage from "../../components/basePage";
import {
  SearchOutlined,
  UserOutlined,
  CloseOutlined,
  AlignLeftOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { formatDate } from "../../lib/utils";
import Modal from "react-modal";

export default function EgressosPage() {
  const [search, setSearch] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const { usersAll, userCurriculumAll } = useContext(AuthUserContext);

  const filterUsers = search.length
    ? usersAll.filter(
        ({ name, email }) =>
          name.toUpperCase().includes(search.toUpperCase()) ||
          email.toUpperCase().includes(search.toUpperCase())
      )
    : [];

  const usersAllFilter = usersAll?.map((user) => ({
    resume: userCurriculumAll.filter((resume) => resume.userId == user.id)[0],
    ...user,
  }));

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setModalData(null);
  }
  return (
    <BasePage>
      <label className="flex relative justify-end xsm:mt-10 lg:mt-10 xl:mt-10  xsm:mr-5 xl:mr-20">
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          <SearchOutlined className="text-20 text-title" />
        </span>
        <input
          className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-sm py-1 pl-3 pr-3 shadow-sm focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
          placeholder="Buscar..."
          type="text"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </label>
      <div className="flex flex-col justify-center overflow-x-auto mt-5 mb-20 xsm:mx-5 xl:mx-20 relative">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
            <tr>
              <th className="py-3 px-6">Nome</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Curso</th>
              <th className="py-3 px-6">Nível</th>
              <th className="py-3 px-6">Ano de Conclusão</th>
              <th className="py-3 px-6">Currículo</th>
            </tr>
          </thead>
          <tbody>
            {filterUsers.length
              ? filterUsers?.map((user, index) => (
                  <tr key={index} className="bg-white border-b">
                    <th
                      scope="row"
                      className="flex items-center py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      <span className="inline-block mx-4" style={{ width: "40px", height: "40px" }}>
                        {user.imageURL ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            className="shadow-2xl"
                            style={{
                              borderRadius: "50%",
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            src={user.imageURL}
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
                      <span>{user.name}</span>
                    </th>
                    <td className="py-4 px-6">{user.email}</td>
                    <td className="py-4 px-6">{user.course}</td>
                    <td className="py-4 px-6">{user.level}</td>
                    <td className="py-4 px-6">{formatDate(user.conclusionYear) || "Pendente"}</td>
                    <td className="py-4 px-6">
                      {user?.resume?.publish ? (
                        <span
                          className="flex items-center font-medium cursor-pointer hover:text-primary-active"
                          onClick={() => {
                            setModalData(user);
                            openModal();
                          }}
                        >
                          <AlignLeftOutlined className="mr-2 text-17" />
                          Visualizar
                        </span>
                      ) : (
                        <span
                          className="flex items-center font-medium cursor-pointer hover:text-danger"
                          aria-disabled
                        >
                          <InfoCircleOutlined className="mr-2 text-17" />
                          Pendente
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              : usersAllFilter?.map((user, index) => (
                  <tr key={index} className="bg-white border-b">
                    <th
                      scope="row"
                      className="flex items-center py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      <span className="inline-block mx-4" style={{ width: "40px", height: "40px" }}>
                        {user.imageURL ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            className="shadow-2xl"
                            style={{
                              borderRadius: "50%",
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            src={user.imageURL}
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
                      <span>{user.name}</span>
                    </th>
                    <td className="py-4 px-6">{user.email}</td>
                    <td className="py-4 px-6">{user.course}</td>
                    <td className="py-4 px-6">{user.level}</td>
                    <td className="py-4 px-6">{formatDate(user.conclusionYear) || "Pendente"}</td>
                    <td className="py-4 px-6">
                      {user?.resume?.publish ? (
                        <span
                          className="flex items-center font-medium cursor-pointer hover:text-primary-active"
                          onClick={() => {
                            setModalData(user);
                            openModal();
                          }}
                        >
                          <AlignLeftOutlined className="mr-2 text-17" />
                          Visualizar
                        </span>
                      ) : (
                        <span
                          className="flex items-center font-medium cursor-pointer hover:text-danger"
                          aria-disabled
                        >
                          <InfoCircleOutlined className="mr-2 text-17" />
                          Pendente
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
            <Modal
              style={{
                overlay: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(255, 255, 255, 0.75)",
                },
                content: {
                  position: "absolute",
                  top: "10%",
                  left: "30px",
                  right: "30px",
                  bottom: "40px",
                  border: "1px solid #ccc",
                  background: "#fff",
                  overflow: "auto",
                  WebkitOverflowScrolling: "touch",
                  borderRadius: "4px",
                  outline: "none",
                  padding: "20px",
                },
              }}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-lg font-medium">{modalData?.name}</p>
                <CloseOutlined className="text-grey-text cursor-pointer" onClick={closeModal} />
              </div>
              <hr />
              <form className="xsm:px-2 lg:pl-10">
                <div className="flex flex-col max-w-1000 bg-white justify-center my-8 border rounded-sm px-5 py-2">
                  <h2 className="text-base mb-5 font-medium">Informações pessoais</h2>
                  <div className="flex xsm:flex-col md:flex-row xl:flex-row">
                    <span
                      className="inline-block mx-4 xsm:mb-5"
                      style={{ width: "150px", height: "150px" }}
                    >
                      {modalData?.imageURL ? (
                        <img
                          className="xl:shadow-xl"
                          style={{
                            borderRadius: "50%",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          src={modalData?.imageURL}
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
                          className="bg-white xsm:text-sm md:text-15 mx-1 px-1 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
                          placeholder="Nada informado."
                          type="text"
                          defaultValue={modalData?.resume?.name}
                          disabled
                        />
                      </div>
                      <div className="mt-2">
                        <label className="text-sm font-medium">Data de nascimento:</label>
                        <input
                          className="bg-white placeholder:text-14 xsm:text-sm md:text-15 mx-1 px-1 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
                          placeholder="Nada informado."
                          type="date"
                          defaultValue={modalData?.resume?.birthDate}
                          disabled
                        />
                      </div>
                      <div className="mt-2">
                        <label className="text-sm font-medium">Endereço:</label>
                        <input
                          className="bg-white placeholder:text-14 xsm:text-sm md:text-15 mx-1 px-1 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
                          placeholder="Nada informado."
                          type="text"
                          defaultValue={modalData?.resume?.address}
                          disabled
                        />
                      </div>
                      <div className="mt-2">
                        <label className="text-sm font-medium">Telefone celular:</label>
                        <input
                          className="bg-white placeholder:text-14 xsm:text-sm md:text-15 mx-1 px-1 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
                          placeholder="Nada informado."
                          type="text"
                          defaultValue={modalData?.resume?.phone}
                          disabled
                        />
                      </div>
                      <div className="mt-2">
                        <label className="text-sm font-medium">E-mail:</label>
                        <input
                          className="bg-white placeholder:text-14 xsm:text-sm md:text-15 mx-1 px-1 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
                          placeholder="Nada informado."
                          type="text"
                          defaultValue={modalData?.resume?.email}
                          disabled
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
                    className="bg-white placeholder:text-14 form-control block w-full px-3 py-1.5 xsm:text-sm  md:text-15 font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                    id="description"
                    rows="3"
                    placeholder="Descrição"
                    defaultValue={modalData?.resume?.description}
                    disabled
                  />
                </div>
                <div className="flex flex-col max-w-700 bg-white justify-center my-5 border rounded-sm px-5 py-2">
                  <h2 className="text-base mb-1 font-medium">formação</h2>
                  <input
                    className="bg-white placeholder:text-14 xsm:text-sm p-2 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
                    placeholder="Nada informado."
                    type="text"
                    defaultValue={modalData?.resume?.education}
                    disabled
                  />
                </div>
                <div className="flex flex-col max-w-700 bg-white justify-center my-5 border rounded-sm px-5 py-2">
                  <h2 className="text-base mb-1 font-medium">Idiomas</h2>
                  <input
                    className="bg-white xsm:text-sm p-2 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
                    placeholder="Nada informado."
                    type="text"
                    defaultValue={modalData?.resume?.languages}
                    disabled
                  />
                </div>
                <div className="flex flex-col max-w-700 bg-white justify-center my-5 border rounded-sm px-5 py-2">
                  <h2 className="text-base mb-1 font-medium">Cursos extracurriculares</h2>
                  <input
                    className="bg-white xsm:text-sm p-2 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
                    placeholder="Nada informado."
                    type="text"
                    defaultValue={modalData?.resume?.extraCourses}
                    disabled
                  />
                </div>
                <div className="flex flex-col max-w-700 bg-white justify-center my-5 border rounded-sm px-5 py-2">
                  <h2 className="text-base mb-1 font-medium">Histórico profissinal</h2>
                  <input
                    className="bg-white xsm:text-sm p-2 text-grey-text focus:outline-none focus:border-primary-active focus:ring-primary-active focus:ring-1 sm:text-sm"
                    placeholder="Nada informado."
                    type="text"
                    defaultValue={modalData?.resume?.professionalHistory}
                    disabled
                  />
                </div>
              </form>
            </Modal>
          </tbody>
        </table>
      </div>
    </BasePage>
  );
}
