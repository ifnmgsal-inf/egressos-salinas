import { useContext, useState } from "react";
import { AuthUserContext } from "../../../contexts/authUserContext";

import { CheckOutlined, EditOutlined } from "@ant-design/icons";

const ConfigurationPage = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="flex flex-col mt-8 mb-4 xsm:mx-2 lg:ml-8 lg:mr-14 ">
      <div className="flex items-center justify-between mb-4">
        <h1 className="xsm:text-10 sm:text-10 lg:text-20 text-title ">
          Configurações do <span className="text-primary-active">Sistema</span>
        </h1>
      </div>
      <div className="flex items-center justify-between mb-4 shadow-md p-2">
        <div className="flex p-2">
          <div className="flex flex-col px-2">
            <label className="text-14 font-medium px-1">Link para o formulário do egresso</label>
            <textarea
              className="h-10 rounded-sm focus:outline-primary-active p-1 text-13 text-grey-text"
              // value={user?.testimony}
              type="textArea"
              id="testimony"
              name="testimony"
              cols={100}
              disabled={!isEdit}
            />
          </div>
        </div>
        {isEdit ? (
          <div className="flex flex-col mx-5">
            <CheckOutlined
              className="text-12 text-primary cursor-pointer bg-icon-bgGreen backdrop-opacity-5 p-2.5 rounded-full"
              // onClick={handleSubmit(handleEditTestimony)}
            />
          </div>
        ) : (
          <div className="flex flex-col space-y-6 mx-5">
            <EditOutlined
              className="text-12 text-title cursor-pointer bg-icon-bgGrey backdrop-opacity-5 p-2.5 rounded-full"
              onClick={() => setIsEdit(true)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfigurationPage;
