import { useState } from "react";
import { useContext } from "react";
import { AuthUserContext } from "../../contexts/authUserContext";

import {
  LeftOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  InfoCircleOutlined,
  MessageOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  DatabaseOutlined,
  SmileOutlined,
  SoundOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const SideBar = () => {
  const { user, isMobile } = useContext(AuthUserContext);

  const [openSideBar, setOpenSideBar] = useState(isMobile ? false : true);

  if (!user) return;

  const menus =
    user?.type === "user"
      ? [
          {
            label: "CURRÍCULO",
            icon: <SolutionOutlined />,
            link: "/painel/curriculo",
          },
          {
            label: "DEPOIMENTO",
            icon: <SoundOutlined />,
            link: "/painel/depoimento",
          },
        ]
      : [
          {
            label: "CADASTROS",
            icon: <TeamOutlined />,
            link: "/dashboard/cadastros",
          },
          {
            label: "NOTÍCIAS",
            icon: <InfoCircleOutlined />,
            link: "/dashboard/noticias",
          },
          {
            label: "DEPOIMENTOS",
            icon: <MessageOutlined />,
            link: "/dashboard/depoimentos",
          },
          {
            label: "CONFIGURAÇÕES",
            icon: <SettingOutlined />,
            link: "/dashboard/configuracoes",
          },
          {
            label: "FAQ",
            icon: <QuestionCircleOutlined />,
            link: "/dashboard/faq",
          },
        ];
  return (
    <div
      className={`flex ${isMobile ? "fixed bottom-0 left-0 right-0 justify-center" : ""} bg-title`}
    >
      <div className={`${openSideBar ? "w-72" : "w-20"} md:h-screen relative`}>
        {!isMobile && (
          <LeftOutlined
            className={`text-title absolute cursor-pointer rounded-full -right-3.5 top-1/2 p-1 w-7 border-2 border-title hover:border-primary bg-white ${
              !openSideBar && "rotate-180"
            }`}
            onClick={() => setOpenSideBar(!openSideBar)}
          />
        )}
        <ul className={`${isMobile ? "flex py-1 space-x-10" : "flex-col pt-8"}`}>
          {menus.map(({ label, icon, link }, index) => (
            <Link key={index} href={link}>
              <li
                className={`flex items-center gap-x-4 cursor-pointer ${
                  !openSideBar ? "py-2 mx-1.5 px-2" : "ml-2 p-2"
                } ${
                  isMobile ? "text-18" : ""
                } text-white hover:bg-primary-active my-1 rounded-[1px] `}
              >
                {icon}
                <span className={`${!openSideBar && "hidden"} text-13 origin-left duration-200`}>
                  {label}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
