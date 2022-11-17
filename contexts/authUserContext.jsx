/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

import { collection, getFirestore, query, where, getDocs, addDoc } from "firebase/firestore";
import { app, storage } from "../services/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { setCookie, parseCookies, destroyCookie } from "nookies";

export const AuthUserContext = createContext({});

export function AuthUserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userGoogle, setUserGoogle] = useState(null);
  const [usersNumber, setUsersNumber] = useState(null);
  const [usersAll, setUsersAll] = useState(null);

  const [progress, setProgress] = useState(0);
  const [imageURL, setImageURL] = useState(null);

  const isAuthenticated = false;
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
      setUsersAll(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsersNumber();
  }, []);

  function singIn({ email, password }) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
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
        alert("Email ou senha inválidos");
        console.log({ errorMessage, errorCode });
      });
  }

  async function registrationIn({
    name,
    email,
    cpf,
    course,
    level,
    password,
    image,
    conclusionYear,
  }) {
    const file = image[0];

    const storageRef = ref(storage, `images/${file?.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageURL(url);
        });
      }
    );

    await addDoc(collection(db, "users"), {
      name,
      email,
      cpf,
      course,
      level,
      password,
      imageURL,
      conclusionYear,
      type: "user",
    });

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
      user.type === "adm" ? router.push("/dashboard/cadastros") : router.push("/painel/curriculo");
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
        usersAll,
        user,
        setUser,
        userGoogle,
        setUserGoogle,
        autenticationUser,
        isMobile,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
}
