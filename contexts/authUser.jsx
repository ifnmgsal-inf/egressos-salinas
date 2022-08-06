import { createContext, useState, useEffect } from "react";
import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";
import { app } from "../services/firebaseConfig";
import { useRouter } from "next/router";

export const AuthUserContext = createContext({});

export const AuthUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userGoogle, setUserGoogle] = useState(null);
  const [usersNumber, setUsersNumber] = useState(null);
  const router = useRouter();

  const db = getFirestore(app);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsersNumber = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsersNumber(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).length);
      //   console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //   setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsersNumber();
  }, []);

  async function autenticationUser(email, password) {
    const db = getFirestore(app);
    const userRef = collection(db, "users");

    // Create a query against the collection.
    const q = query(userRef, where("email", "==", email), where("password", "==", password));

    const querySnapshot = await getDocs(q);
    const user = querySnapshot.docs.map((doc) => ({ ...doc.data() }))[0] || null;
    if (user) {
      setUser(user);
      user.type === "adm" ? router.push("/homeAdm") : router.push("/homeUser");
    }
    console.log(user);
  }

  return (
    <AuthUserContext.Provider
      value={{ usersNumber, user, setUser, userGoogle, setUserGoogle, autenticationUser }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};
