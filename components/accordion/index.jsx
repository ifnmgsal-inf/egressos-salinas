import { DownOutlined, RightOutlined } from "@ant-design/icons";

const Accordion = ({ title, children, id, index, setIndex }) => {
  const handleSetIndex = (id) => index !== id && setIndex(id);

  return (
    <>
      <div
        className="flex group cursor-pointer w-3/4 mx-auto h-10 justify-between items-center rounded bg-white"
        onClick={() => handleSetIndex(id)}
      >
        <div className="flex group cursor-pointer items-center">
          <div className="group-hover:text-primary-active">
            {index !== id ? (
              <RightOutlined className="text-13 pb-2.5" />
            ) : (
              <DownOutlined className="text-13 text-primary-active pb-2.5" />
            )}
          </div>
          <div
            className={`${
              index === id && "text-primary-active"
            } pl-2 group-hover:text-primary-active font-medium`}
          >
            {title}
          </div>
        </div>
      </div>
      {index === id && <div className="pl-6 mb-4 text-14">{children}</div>}
    </>
  );
};
export default Accordion;
