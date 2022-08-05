import { useContext } from "react";
import { AuthUserContext } from "../../contexts/authUser";

import NavBar from "../../components/NavBar";

const HomeAdm = () => {
  const { user } = useContext(AuthUserContext);
  //   const [users, setUsers] = useState([]);

  //   const db = getFirestore(app);
  //   const usersCollectionRef = collection(db, "users");

  //   useEffect(() => {
  //     const getUsers = async () => {
  //       const data = await getDocs(usersCollectionRef);
  //       //   console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //       //   setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     };
  //     getUsers();
  //   }, []);
  if (!user) return;

  return (
    <div className="bg-title">
      <NavBar type="home" data={user} />
    </div>
  );
};

export default HomeAdm;
