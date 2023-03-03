/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from "react";
import { AuthUserContext } from "../../../contexts/authUserContext";
import { useForm } from "react-hook-form";

import { UserOutlined, EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";

const DepoimentoPage = () => {
  const [isEdit, setIsEdit] = useState(false);

  const { register, handleSubmit } = useForm();
  const { user, updateTestimonyUser } = useContext(AuthUserContext);

  function handleEditTestimony(data) {
    data.testimony ? (updateTestimonyUser(user, data), setIsEdit(false)) : setIsEdit(false);
  }

  return (
    <div className="flex flex-col mt-8 mb-4 xsm:mx-2 xl:mx-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="xsm:text-10 sm:text-10 lg:text-20 text-title ">
          Publicar meu <span className="text-primary-active">Depoimento</span>
        </h1>
      </div>
      <div className=" flex items-center justify-between shadow-sm bg-white p-4 rounded-sm">
        <div className="flex p-2">
          <div className="flex flex-col items-center mr-4">
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
          <div className="flex flex-col">
            <label className="text-14 font-medium">Meu Depoimento</label>
            <textarea
              className="h-20 rounded-sm focus:outline-primary-active p-1 text-grey-text text-13 bg-white"
              defaultValue={user?.testimony || "Você não possui depoimento..."}
              {...register("testimony")}
              disabled={!isEdit}
              type="text"
              id="testimony"
              name="testimony"
              cols={100}
              required
            />
          </div>
        </div>
        {isEdit ? (
          <div className="flex flex-col mx-5">
            <CheckOutlined
              className="text-12 text-primary cursor-pointer bg-icon-bgGreen backdrop-opacity-5 p-2.5 rounded-full"
              onClick={handleSubmit(handleEditTestimony)}
            />{" "}
          </div>
        ) : (
          <div className="flex flex-col space-y-6 mx-5">
            <EditOutlined
              className="text-12  text-title cursor-pointer bg-icon-bgGrey  backdrop-opacity-5 p-2.5 rounded-full"
              onClick={() => setIsEdit(true)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DepoimentoPage;
