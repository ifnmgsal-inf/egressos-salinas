/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from "react";
import { AuthUserContext } from "../../../contexts/authUserContext";
import { useForm } from "react-hook-form";

import { UserOutlined, EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";

const DepoimentoPage = () => {
  const [isEdit, setIsEdit] = useState(false);

  const { register, handleSubmit } = useForm();
  const { user, updateTestimonyUser, isMobile } = useContext(AuthUserContext);

  function handleEditTestimony(data) {
    data.testimony ? (updateTestimonyUser(user, data), setIsEdit(false)) : setIsEdit(false);
  }

  return (
    <div className="flex flex-col mt-8 mb-4 xsm:mx-2 xl:mx-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="xsm:text-14 sm:text-14 lg:text-20 text-title ">
          Publicar meu <span className="text-primary-active">Depoimento</span>
        </h1>
      </div>
      <div className=" flex xsm:flex-col md:flex-row xsm:max-w-300 md:max-w-700 lg:md:max-w-1000 justify-between shadow-sm bg-white p-4 rounded-sm">
        <div className="flex xsm:flex-col md:flex-row p-2">
          <div className="flex xsm:flex-col-reverse md:flex-col items-center ">
            <span className="inline-block" style={{ width: "100px", height: "100px" }}>
              {user?.imageURL ? (
                <img
                  className="shadow-lg"
                  style={{ borderRadius: "50%", width: "100%", height: "100%", objectFit: "cover" }}
                  src={user?.imageURL}
                  alt=""
                />
              ) : (
                <UserOutlined
                  className="flex items-center justify-center text-white-text text-40 rounded-full"
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
            <span className="text-14 font-medium mt-1">{user?.name}</span>
          </div>
          <div className="flex flex-col justify-center ml-4 xsm:my-2">
            <label className="text-14 font-medium">Meu Depoimento</label>
            <textarea
              className="h-20 rounded-sm focus:outline-primary-active p-1 text-grey-text text-13 bg-white resize xsm:max-w-250 sm:max-w-250 md:max-w-500 lg:max-w-700 xsm:my-1"
              defaultValue={user?.testimony || "Você não possui depoimento..."}
              {...register("testimony")}
              disabled={!isEdit}
              type="text"
              id="testimony"
              name="testimony"
              required
            />
          </div>
        </div>
        <div className="flex flex-row xsm:items-start md:items-end justify-end">
          {isEdit ? (
            <div className="flex mx-2">
              <CheckOutlined
                className="text-12 text-primary cursor-pointer bg-icon-bgGreen backdrop-opacity-5 p-2.5 rounded-full"
                onClick={handleSubmit(handleEditTestimony)}
              />{" "}
            </div>
          ) : (
            <div className="flex mx-2">
              <EditOutlined
                className="text-12  text-title cursor-pointer bg-icon-bgGrey  backdrop-opacity-5 p-2.5 rounded-full"
                onClick={() => setIsEdit(true)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepoimentoPage;
