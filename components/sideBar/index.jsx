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
            label: "DADOS CADASTRAIS",
            icon: <DatabaseOutlined />,
            link: "/painel/dados",
          },
          {
            label: "DEPOIMENTO",
            icon: <SoundOutlined />,
            link: "/painel/depoimento",
          },
          {
            label: "AVALIAÇÃO",
            icon: <SmileOutlined />,
            link: "/painel/avaliacao",
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
    <div className="flex">
      <div className={`${openSideBar ? "w-72" : "w-20"} h-screen bg-title relative`}>
        {!isMobile && (
          <LeftOutlined
            className={`text-title absolute cursor-pointer rounded-full -right-3.5 top-1/2 p-1 w-7 border-2 border-title hover:border-primary bg-white ${
              !openSideBar && "rotate-180"
            }`}
            onClick={() => setOpenSideBar(!openSideBar)}
          />
        )}
        <ul className="pt-8">
          {menus.map(({ label, icon, defaultItem, link }, index) => (
            <Link key={index} href={link}>
              <li
                className={`flex items-center gap-x-4 cursor-pointer ${
                  !openSideBar ? "ml-4 py-2 mr-4 px-2" : "ml-2 p-2"
                } text-white hover:bg-primary-active mt-2 rounded-[1px] `}
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
