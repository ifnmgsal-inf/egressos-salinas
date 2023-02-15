import { DownOutlined, RightOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

const Accordion = ({ title, children, edit = false }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="flex group cursor-pointer w-3/4 mx-auto xsm:h-10 md:h-8 justify-between items-center rounded xsm:mb-2"
        onClick={() => setOpen(!open)}
      >
        <div className="flex group cursor-pointer items-center">
          <div className="group-hover:text-primary-active">
            {open ? (
              <DownOutlined className="text-13 text-primary-active pb-2.5" />
            ) : (
              <RightOutlined className="text-13 pb-2.5" />
            )}
          </div>
          <div
            className={`${
              open && "text-primary-active"
            } xsm:text-14 lg:text-18 pl-2 group-hover:text-primary-active font-medium`}
          >
            {title}
          </div>
        </div>
        {edit ? (
          <div>
            <EditOutlined />
            <DeleteOutlined />
          </div>
        ) : null}
      </div>
      {open && <div className="pl-6 xsm:mb-8 mb-4 text-14">{children}</div>}
    </>
  );
};
export default Accordion;
