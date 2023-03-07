/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { AuthUserContext } from "../../contexts/authUserContext";
import { UserOutlined } from "@ant-design/icons";

const Depositions = () => {
  const { testimonialsAll } = useContext(AuthUserContext);
  return (
    <div className="flex flex-col mt-10 mb-32 xsm:mx-10 xl:mx-32">
      <h1 className="xsm:text-24 sm:text-24 lg:text-30 text-title">
        Novos <span className="text-primary-active">Depoimentos</span>
      </h1>
      {testimonialsAll?.map(({ id, userImage, userName, userTestimony }) => (
        <div key={id} className="flex xsm:flex-col lg:flex-row mt-10 lg:odd:flex-row-reverse">
          <div className="flex flex-col items-center">
            <span className="inline-block" style={{ width: "150px", height: "150px" }}>
              {userImage ? (
                <img
                  className="shadow-xl"
                  style={{
                    borderRadius: "50%",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={userImage}
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
            <span className="mt-2 text-14 font-medium">{userName}</span>
          </div>
          <div className="flex max-h-170 mx-8 p-4 items-center bg-icon-bgGrey rounded-sm shadow-md xsm:text-xs md:text-base">
            {userTestimony}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Depositions;
