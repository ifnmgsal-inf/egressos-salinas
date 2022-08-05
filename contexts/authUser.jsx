import { createContext, useState } from "react";
import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";
import { app } from "../services/firebaseConfig";
import { useRouter } from "next/router";

export const AuthUserContext = createContext({});

export const AuthUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userGoogle, setUserGoogle] = useState(null);
  const router = useRouter();

  async function autenticationUser(email, password) {
    console.log({ email, password });
    const db = getFirestore(app);
    const userRef = collection(db, "users");

    // Create a query against the collection.
    const q = query(userRef, where("email", "==", email), where("password", "==", password));

    const querySnapshot = await getDocs(q);
    const user = querySnapshot.docs.map((doc) => ({ ...doc.data() }))[0] || null;
    if (user) {
      setUser(user);
      user.type === "adm" ? router.push("/home-adm") : router.push("/home-user");
    }
    console.log(user);
  }

  return (
    <AuthUserContext.Provider
      value={{ user, setUser, userGoogle, setUserGoogle, autenticationUser }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};
