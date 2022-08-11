import { useContext } from "react";
import { AuthUserContext } from "../../contexts/authUserContext";

import NavBar from "../../components/navBar";

const HomeAdm = () => {
  const { user } = useContext(AuthUserContext);
  if (!user) return;

  return (
    <div className="bg-title">
      <NavBar type="home" data={user} />
    </div>
  );
};

export default HomeAdm;
