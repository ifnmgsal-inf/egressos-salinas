import { useContext, useState } from "react";
import { AuthUserContext } from "../../../contexts/authUserContext";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { formatDate } from "../../../lib/utils";

import { DeleteOutlined } from "@ant-design/icons";

export default function CadastrosPage() {
  const [search, setSearch] = useState("");
  const { usersAll, deleteUser } = useContext(AuthUserContext);
  console.log(usersAll);

  const filterUsers = search.length
    ? usersAll.filter(
        ({ name, email }) =>
          name.toUpperCase().includes(search.toUpperCase()) ||
          email.toUpperCase().includes(search.toUpperCase())
      )
    : [];
  return (
    <div className="bg-white py-10 px-10">
      <div className="flex xsm:flex-col md:flex-col lg:flex-row xl:flex-row justify-between xsm:items-start md:items-start lg:items-center xl:items-center">
        <h1 className="xsm:text-16 sm:text-18 lg:text-20 text-title ">
          Todos os <span className="text-primary-active">Cadastros</span>
        </h1>
        <label className="flex relative justify-end xsm:mt-8 lg:mt-0">
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
      </div>
      <div className="flex flex-col justify-center overflow-x-auto mt-5 mb-20  relative">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
            <tr>
              <th className="py-3 px-6">Nome</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Curso</th>
              <th className="py-3 px-6">Nível</th>
              <th className="py-3 px-6">Data de conclusão</th>
              <th className="py-3 px-6">Data de cadastro</th>
              <th className="flex justify-center py-3 px-6">Ações</th>
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
                    <td className="py-4 px-6">{formatDate(user.createdIn) || "Pendente"}</td>
                    <td className="py-4 px-6">
                      <DeleteOutlined
                        className="text-red-500 cursor-pointer"
                        onClick={() => deleteUser(user)}
                      />
                    </td>
                  </tr>
                ))
              : usersAll?.map((user, index) => (
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
                    <td className="py-4 px-6">{formatDate(user.createdIn) || "Pendente"}</td>
                    <td className="flex flex-row justify-center py-4 px-6">
                      <DeleteOutlined
                        className="text-12 text-danger cursor-pointer bg-icon-bgRed backdrop-opacity-5 p-2.5 rounded-full"
                        onClick={() => deleteUser(user)}
                      />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
