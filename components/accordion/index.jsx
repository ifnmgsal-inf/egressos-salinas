import { DownOutlined, RightOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

const Accordion = ({ title, children, edit = false, ...props }) => {
  const [open, setOpen] = useState(false);
  const { onClickDelete, onClickEdit } = props;

  return (
    <div className="mb-4">
      <div className="flex group cursor-pointer mx-auto xsm:h-10 md:h-10 justify-between items-center rounded mb-2">
        <div className="flex group cursor-pointer items-center" onClick={() => setOpen(!open)}>
          <div className="group-hover:text-primary-active">
            {open ? (
              <DownOutlined className="text-12 text-primary-active pb-2.5" />
            ) : (
              <RightOutlined className="text-12 pb-2.5" />
            )}
          </div>
          <div
            className={`${
              open && "text-primary-active"
            } xsm:text-12 lg:text-15 pl-2 pr-4 group-hover:text-primary-active font-medium`}
          >
            {title}
          </div>
        </div>
        {edit ? (
          <div className="flex flex-row space-x-4 mx-2">
            <EditOutlined
              className="text-12 text-primary cursor-pointer bg-icon-bgGreen backdrop-opacity-5 p-2.5 rounded-full"
              onClick={onClickEdit}
            />
            <DeleteOutlined
              className="text-12 text-danger cursor-pointer bg-icon-bgRed backdrop-opacity-5 p-2.5 rounded-full"
              onClick={onClickDelete}
            />
          </div>
        ) : null}
      </div>
      {open && <div className="pl-6 xsm:pb-4 pb-4 xsm:mb-4 mb-2 text-14 border-b">{children}</div>}
    </div>
  );
};
export default Accordion;
