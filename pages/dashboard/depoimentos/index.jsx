import { useContext, useState } from "react";
import { AuthUserContext } from "../../../contexts/authUserContext";
import { UserOutlined, EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";

const DepositionsPage = () => {
  const { usersAll, testimonialsAll, createPublishedTestimonials, deletePublishedTestimonials } =
    useContext(AuthUserContext);
  console.log(testimonialsAll);

  const handlePublishedTestimonials = (user) => {
    // console.log(user);
    createPublishedTestimonials(user);
  };

  return (
    <>
      <div className="flex flex-col mt-8 mb-4 xsm:mx-2 xl:mx-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="xsm:text-10 sm:text-10 lg:text-20 text-title ">
            Todos <span className="text-primary-active">Depoimento</span>
          </h1>
        </div>
        {usersAll?.map((user) => (
          <div key={user.id} className=" flex items-center mb-28 ">
            <div className="flex flex-col items-center">
              <span className="inline-block mt-8" style={{ width: "60px", height: "60px" }}>
                {user?.imageURL ? (
                  <img
                    className="shadow-2xl"
                    style={{
                      borderRadius: "50%",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={URL.createObjectURL(user?.imageURL)}
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
              <span>{user?.name || "teste"}</span>
            </div>
            <div>
              <div className="flex flex-col">
                <label className="text-14 font-medium">Depoimento</label>
                <textarea
                  className="rounded-sm focus:outline-primary-active p-1"
                  value={user?.testimony || "Você não possui depoimento..."}
                  type="textArea"
                  id="testimony"
                  name="testimony"
                  disabled
                />
              </div>
            </div>

            <div className="flex flex-col">
              <CheckOutlined onClick={() => handlePublishedTestimonials(user)} />{" "}
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between mb-6">
          <h1 className="xsm:text-10 sm:text-10 lg:text-20 text-title ">
            Depoimentos <span className="text-primary-active">puplicados</span>
          </h1>
        </div>
        {testimonialsAll?.map((testimony) => (
          <div key={testimony.userId} className=" flex items-center mb-28 ">
            <div className="flex flex-col items-center">
              <span className="inline-block mt-8" style={{ width: "60px", height: "60px" }}>
                {testimony?.userImage ? (
                  <img
                    className="shadow-2xl"
                    style={{
                      borderRadius: "50%",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={URL.createObjectURL(testimony?.userImage)}
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
              <span>{testimony?.userName}</span>
            </div>
            <div>
              <div className="flex flex-col">
                <label className="text-14 font-medium">Depoimento</label>
                <textarea
                  className="rounded-sm focus:outline-primary-active p-1"
                  value={testimony?.userTestimony || "Você não possui depoimento..."}
                  type="textArea"
                  id="testimony"
                  name="testimony"
                  disabled
                />
              </div>
            </div>

            <div className="flex flex-col">
              <DeleteOutlined onClick={() => deletePublishedTestimonials(testimony.id)} />{" "}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DepositionsPage;
