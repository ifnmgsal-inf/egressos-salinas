import { useContext, useState } from "react";
import { AuthUserContext } from "../../contexts/authUserContext";
import {
  LeftOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  InfoCircleOutlined,
  MessageOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

import NavBar from "../../components/navBar";

const menus = [
  { label: "CADASTROS", icon: <UsergroupAddOutlined />, defaultItem: true, link: "/" },
  { label: "EGRESSOS", icon: <TeamOutlined />, defaultItem: false, link: "/" },
  { label: "NOTÍCIAS", icon: <InfoCircleOutlined />, defaultItem: false, link: "/" },
  { label: "DEPOIMENTOS", icon: <MessageOutlined />, defaultItem: false, link: "/" },
  { label: "CONFIGURAÇÕES", icon: <SettingOutlined />, defaultItem: false, link: "/" },
  { label: "FAQ", icon: <QuestionCircleOutlined />, defaultItem: false, link: "/" },
];

const HomeUser = () => {
  const [openSideBar, setOpenSideBar] = useState(true);
  const { user } = useContext(AuthUserContext);
  if (!user) return;

  return (
    <>
      <div className="bg-title">
        <NavBar type="home" data={user} />
      </div>
      <div className="flex">
        <div
          className={`${
            openSideBar ? "w-72" : "w-20"
          } h-screen transition duration-300 bg-title relative`}
        >
          <LeftOutlined
            className={`text-title absolute cursor-pointer rounded-full -right-3.5 top-1/2 p-1 w-7 border-2 border-title hover:border-primary bg-white ${
              !openSideBar && "rotate-180"
            }`}
            onClick={() => setOpenSideBar(!openSideBar)}
          />
          <ul className="pt-8">
            {menus.map(({ label, icon, defaultItem, link }, index) => (
              <li
                key={index}
                className={`flex items-center gap-x-4 cursor-pointer ${
                  !openSideBar ? "ml-4 py-2 mr-4 px-2" : "ml-2 p-2"
                } ${
                  defaultItem && "bg-primary-active"
                } text-white hover:bg-primary-active mt-2 rounded-[1px] `}
              >
                {icon}
                <span className={`${!openSideBar && "hidden"} text-13 origin-left duration-200`}>
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 h-screen">home</div>
      </div>
    </>
  );
};

export default HomeUser;
