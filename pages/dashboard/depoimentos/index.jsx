/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { AuthUserContext } from "../../../contexts/authUserContext";
import { UserOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";

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
      <div className="flex flex-col xsm:px-2  xsm:mt-4 md:mt-8 mb-4 xsm:mx-2 lg:ml-8 lg:mr-14 ">
        <div className="flex items-center justify-between mb-4">
          <h1 className="xsm:text-13 sm:text-14 lg:text-20 text-title ">
            Novos <span className="text-primary-active">Depoimento</span>
          </h1>
        </div>
        <div className="grid xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 gap-x-6">
          {usersAll?.map((user) =>
            user.testimony ? (
              <div
                key={user.id}
                className="flex xsm:flex-col md:flex-row xsm:max-w-300 md:max-w-700 lg:md:max-w-1000 justify-between shadow-sm bg-white p-4 rounded-sm"
              >
                <div className="flex  xsm:flex-col md:flex-row p-2">
                  <div className="flex xsm:flex-col-reverse md:flex-col items-center mr-2">
                    <span className="inline-block" style={{ width: "50px", height: "50px" }}>
                      {user?.imageURL ? (
                        <img
                          className="shadow-xl"
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
                    <span className="text-12 font-medium mt-1">{user?.name || "teste"}</span>
                  </div>
                  <div className="flex flex-col justify-center md:ml-4 xsm:my-2">
                    <label className="text-12 font-medium px-1">Depoimento</label>
                    <textarea
                      className="xsm:h-20 md:h-10 rounded-sm focus:outline-primary-active p-1 text-grey-text text-13 bg-white resize xsm:max-w-250 md:max-w-500 lg:max-w-350 xsm:my-1"
                      value={user?.testimony}
                      id="testimony"
                      name="testimony"
                      disabled
                    />
                  </div>
                </div>
                <div className="flex flex-row xsm:items-start md:items-center justify-end">
                  <CheckOutlined
                    className="text-12 text-primary cursor-pointer bg-icon-bgGreen backdrop-opacity-5 p-2.5 rounded-full"
                    onClick={() => handlePublishedTestimonials(user)}
                  />{" "}
                </div>
              </div>
            ) : null
          )}
        </div>
        <div className="flex items-center justify-between my-6">
          <h1 className="xsm:text-13 sm:text-14 lg:text-20 text-title ">
            Depoimentos <span className="text-primary-active">Puplicados</span>
          </h1>
        </div>
        <div className="grid xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 gap-x-6">
          {testimonialsAll?.map((testimony) => (
            <div
              key={testimony.userId}
              className="flex xsm:flex-col md:flex-row xsm:max-w-300 md:max-w-700 lg:md:max-w-1000 justify-between shadow-sm bg-white p-4 rounded-sm"
            >
              <div className="flex xsm:flex-col md:flex-row p-2">
                <div className="flex xsm:flex-col-reverse md:flex-col items-center mr-2">
                  <span className="inline-block" style={{ width: "50px", height: "50px" }}>
                    {testimony?.userImage ? (
                      <img
                        className="shadow-xl"
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
                  <span className="text-12 font-medium mt-1">{testimony?.userName || "teste"}</span>
                </div>
                <div className="flex flex-col justify-center md:ml-4 xsm:my-2">
                  <label className="text-12 font-medium px-1">Depoimento</label>
                  <textarea
                    className="xsm:h-20 md:h-10 rounded-sm focus:outline-primary-active p-1 text-grey-text text-13 bg-white resize xsm:max-w-250 md:max-w-500 lg:max-w-350 xsm:my-1"
                    value={testimony?.userTestimony}
                    id="testimony"
                    name="testimony"
                    disabled
                  />
                </div>
              </div>
              <div className="flex flex-row xsm:items-start md:items-center justify-end">
                <DeleteOutlined
                  className="text-12 text-danger cursor-pointer bg-icon-bgRed backdrop-opacity-5 p-2.5 rounded-full"
                  onClick={() => deletePublishedTestimonials(testimony.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DepositionsPage;
