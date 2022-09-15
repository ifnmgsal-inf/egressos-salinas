import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="flex group cursor-pointer w-3/4 mx-auto h-10 justify-between items-center rounded bg-white xsm:mb-4"
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
      </div>
      {open && <div className="pl-6 xsm:mb-8 mb-4 text-14">{children}</div>}
    </>
  );
};
export default Accordion;
