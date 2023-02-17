import { useContext, useState } from "react";
import { AuthUserContext } from "../../../contexts/authUserContext";
import { useForm } from "react-hook-form";

import { UserOutlined, EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";

const DepoimentoPage = () => {
  const [isEdit, setIsEdit] = useState(false);

  const { register, handleSubmit } = useForm();
  const { user, updateTestimonyUser } = useContext(AuthUserContext);

  const handleDeleteTestimony = () => {};
  function handleEditTestimony(data) {
    console.log(data);
    data.testimony ? (updateTestimonyUser(user, data), setIsEdit(false)) : setIsEdit(false);
  }

  return (
    <>
      <div className="flex flex-col mt-8 mb-4 xsm:mx-2 xl:mx-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="xsm:text-10 sm:text-10 lg:text-20 text-title ">
            Publicar meu <span className="text-primary-active">Depoimento</span>
          </h1>
        </div>
        <div className=" flex items-center mb-28 ">
          <div className="flex flex-col items-center">
            <span className="inline-block mt-8" style={{ width: "130px", height: "130px" }}>
              {user?.imageURL ? (
                <img
                  className="shadow-2xl"
                  style={{ borderRadius: "50%", width: "100%", height: "100%", objectFit: "cover" }}
                  src={URL.createObjectURL(user?.imageURL)}
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
            <span>{user?.name}</span>
          </div>
          <div>
            <div className="flex flex-col">
              <label className="text-14 font-medium">Meu Depoimento</label>
              <input
                className="rounded-sm focus:outline-primary-active p-1"
                defaultValue={user?.testimony || "Você não possui depoimento..."}
                disabled={!isEdit}
                {...register("testimony")}
                type="text"
                id="testimony"
                name="testimony"
                required
              />
            </div>
          </div>
          {isEdit ? (
            <div className="flex flex-col">
              <CheckOutlined onClick={handleSubmit(handleEditTestimony)} />{" "}
            </div>
          ) : (
            <div className="flex flex-col">
              <EditOutlined onClick={() => setIsEdit(true)} />
              <DeleteOutlined onClick={() => handleDeleteTestimony(user)} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DepoimentoPage;
