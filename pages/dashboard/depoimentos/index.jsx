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
        <div className="flex items-center justify-between mb-4">
          <h1 className="xsm:text-10 sm:text-10 lg:text-20 text-title ">
            Todos <span className="text-primary-active">Depoimento</span>
          </h1>
        </div>
        {usersAll?.map((user) => (
          <div key={user.id} className="flex items-center justify-between mb-4 shadow-sm p-2">
            <div className="flex p-2">
              <div className="flex flex-col items-center mr-2">
                <span className="inline-block" style={{ width: "35px", height: "35px" }}>
                  {user?.imageURL ? (
                    <img
                      className="shadow-2xl"
                      style={{
                        borderRadius: "50%",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={user?.imageURL}
                      alt=""
                    />
                  ) : (
                    <UserOutlined
                      className="flex items-center justify-center text-white-text text-16 rounded-full"
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
                <span className="text-12 font-medium">{user?.name || "teste"}</span>
              </div>
              <div className="flex flex-col px-2">
                <label className="text-12 font-medium px-1">Depoimento</label>
                <textarea
                  className="h-10 rounded-sm focus:outline-primary-active p-1 text-13 text-grey-text"
                  value={user?.testimony}
                  type="textArea"
                  id="testimony"
                  name="testimony"
                  cols={100}
                  disabled
                />
              </div>
            </div>
            <div className="flex flex-col">
              <CheckOutlined
                className="text-12 text-primary cursor-pointer bg-icon-bgGreen backdrop-opacity-5 p-2.5 rounded-full"
                onClick={() => handlePublishedTestimonials(user)}
              />{" "}
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between my-6">
          <h1 className="xsm:text-10 sm:text-10 lg:text-20 text-title ">
            Depoimentos <span className="text-primary-active">puplicados</span>
          </h1>
        </div>
        {testimonialsAll?.map((testimony) => (
          <div
            key={testimony.userId}
            className="flex items-center justify-between mb-4 shadow-sm p-2"
          >
            <div className="flex p-2">
              <div className="flex flex-col items-center mr-2">
                <span className="inline-block" style={{ width: "35px", height: "35px" }}>
                  {testimony?.userImage ? (
                    <img
                      className="shadow-2xl"
                      style={{
                        borderRadius: "50%",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={testimony?.userImage}
                      alt=""
                    />
                  ) : (
                    <UserOutlined
                      className="flex items-center justify-center text-white-text text-16 rounded-full"
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
                <span className="text-12 font-medium">{testimony?.userName}</span>
              </div>
              <div className="flex flex-col px-2">
                <label className="text-12 font-medium px-1">Depoimento</label>
                <textarea
                  className="h-10 rounded-sm focus:outline-primary-active p-1 text-13 text-grey-text"
                  value={testimony?.userTestimony}
                  type="textArea"
                  id="testimony"
                  name="testimony"
                  cols={100}
                  disabled
                />
              </div>
            </div>
            <div className="flex flex-col">
              <DeleteOutlined
                className="text-12 text-danger cursor-pointer bg-icon-bgRed backdrop-opacity-5 p-2.5 rounded-full"
                onClick={() => deletePublishedTestimonials(testimony.id)}
              />{" "}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DepositionsPage;
