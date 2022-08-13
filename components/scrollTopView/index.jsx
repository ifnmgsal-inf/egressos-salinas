import { useState } from "react";

import { UpOutlined } from "@ant-design/icons";

const ScrollTopView = () => {
  const [visible, setVisible] = useState(false);

  const onVisbile = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled >= 600) setVisible(true);
    else if (scrolled <= 300) setVisible(false);
  };

  const onScroll = () => {
    if (typeof window === "object") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (typeof window === "object") window.addEventListener("scroll", onVisbile);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 30,
        right: 30,
      }}
    >
      <UpOutlined
        className="text-white bg-title/50 p-4 rounded"
        onClick={onScroll}
        style={{ display: visible ? "inline-block" : "none", borderRadius: 5 }}
      />
    </div>
  );
};

export default ScrollTopView;
