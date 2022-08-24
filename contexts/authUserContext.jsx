import { createContext, useState, useEffect } from "react";
import { collection, getFirestore, query, where, getDocs, addDoc } from "firebase/firestore";
import { app } from "../services/firebaseConfig";
import { useRouter } from "next/router";

import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { setCookie, parseCookies, destroyCookie } from "nookies";

export const AuthUserContext = createContext({});

export function AuthUserProvider({ children }) {
  const isAuthenticated = false;
  const [user, setUser] = useState(null);
  const [userGoogle, setUserGoogle] = useState(null);
  const [usersNumber, setUsersNumber] = useState(null);
  const router = useRouter();

  const db = getFirestore(app);
  const usersCollectionRef = collection(db, "users");
  const auth = getAuth();

  useEffect(() => {
    const { "next-egressos.token": token, "next-egressos.email": email } = parseCookies();
    if (token && email) {
      autenticationUser(email);
    } else router.push("/");
  }, []);

  useEffect(() => {
    const getUsersNumber = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsersNumber(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).length);
    };
    getUsersNumber();
  }, []);

  function singIn({ email, password }) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { accessToken, email } = userCredential.user;

        setCookie(undefined, "next-egressos.token", accessToken, {
          maxAge: 60 * 60 * 1, //1 hour
        });
        setCookie(undefined, "next-egressos.email", email, {
          maxAge: 60 * 60 * 1, //1 hour
        });
        if (accessToken) autenticationUser(email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  async function registrationIn({ name, email, cpf, password }) {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "users"), {
      name,
      email,
      cpf,
      password,
      type: "user",
    });
    console.log("Document written with ID: ", docRef.id);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { accessToken, email } = userCredential.user;

        setCookie(undefined, "next-egressos.token", accessToken, {
          maxAge: 60 * 60 * 1, //1 hour
        });
        setCookie(undefined, "next-egressos.email", email, {
          maxAge: 60 * 60 * 1, //1 hour
        });
        if (accessToken) autenticationUser(email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  const signOutUser = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        destroyCookie(undefined, "next-egressos.token");
        destroyCookie(undefined, "next-egressos.email");
      })
      .catch((error) => {});
  };

  async function autenticationUser(email) {
    // Create a query against the collection.
    const db = getFirestore(app);
    const userRef = collection(db, "users");
    const q = query(userRef, where("email", "==", email));

    const querySnapshot = await getDocs(q);
    const user = querySnapshot.docs.map((doc) => ({ ...doc.data() }))[0] || null;
    if (user) {
      setUser(user);
      user.type === "adm" ? router.push("/homeAdm") : router.push("/homeUser");
    }
  }

  return (
    <AuthUserContext.Provider
      value={{
        isAuthenticated,
        singIn,
        registrationIn,
        signOutUser,
        usersNumber,
        user,
        setUser,
        userGoogle,
        setUserGoogle,
        autenticationUser,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
}
