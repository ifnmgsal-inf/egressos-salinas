/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

import {
  collection,
  getFirestore,
  query,
  where,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { app, storage } from "../services/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import moment from "moment/moment";
import { toast } from "react-toastify";

export const AuthUserContext = createContext({});

export function AuthUserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userGoogle, setUserGoogle] = useState(null);
  const [usersNumber, setUsersNumber] = useState(null);
  const [usersAll, setUsersAll] = useState(null);
  const [newsAll, setNewsAll] = useState(null);
  const [faqsAll, setFaqsAll] = useState(null);
  const [testimonialsAll, setTestimonialsAll] = useState(null);
  const [linkForm, setLinkForm] = useState(null);

  const [progress, setProgress] = useState(0);

  const isAuthenticated = false;
  const router = useRouter();

  const db = getFirestore(app);
  const usersCollectionRef = collection(db, "users");
  const newsCollectionRef = collection(db, "news");
  const faqsCollectionRef = collection(db, "faqs");
  const testimonialsCollectionRef = collection(db, "publishedTestimonials");
  const linkFormCollectionRef = collection(db, "linkForm");
  const auth = getAuth();

  useEffect(() => {
    const { "next-egressos.token": token, "next-egressos.email": email } = parseCookies();
    if (token && email) {
      autenticationUser(email);
    } else router.push("/");
  }, []);

  useEffect(() => {
    getUsers();
    getNews();
    getFAQs();
    getTestimonialsAll();
    getLinkForm();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    const dataFilter = data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .filter((doc) => doc.type !== "adm");
    setUsersNumber(dataFilter.length);
    setUsersAll(dataFilter);
  };

  const getNews = async () => {
    const data = await getDocs(newsCollectionRef);
    setNewsAll(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteNews = async (news) => {
    try {
      await deleteDoc(doc(db, "news", news.id));
      getNews();
      toast.success("Notícia deletada com sucesso.");
    } catch (error) {
      toast.error("Erro ao deletar a notícia.");
      console.log(error);
    }
  };

  const updateNews = async ({ id, image, title, description }) => {
    try {
      await updateDoc(doc(db, "news", id), {
        image,
        title,
        description,
      });
      getNews();
      toast.success("Notícia atualizada com sucesso.");
    } catch (error) {
      toast.error("Erro ao atualizar a notícia.");
      console.log(error);
    }
  };

  async function createNewsUpload({ image, title, description }) {
    const file = image[0];

    const storageRef = ref(storage, `images/${file?.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);
    let imageURL = null;

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
      async () => {
        try {
          await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            imageURL = url;
          });

          await addDoc(collection(db, "news"), {
            image: imageURL,
            title,
            description,
          });
          getNews();
          toast.success("Notícia criada com sucesso.");
        } catch (error) {
          toast.error("Erro ao criar a notícia.");
          console.log(error);
        }
      }
    );
  }

  const getFAQs = async () => {
    const data = await getDocs(faqsCollectionRef);
    setFaqsAll(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  async function createFaqIn({ question, response }) {
    try {
      await addDoc(collection(db, "faqs"), {
        question,
        response,
      });
      getFAQs();
      toast.success("FAQ criado com sucesso.");
    } catch (error) {
      toast.error("Erro ao criar o FAQ.");
      console.log(error);
    }
  }

  const deleteFAQ = async (id) => {
    try {
      await deleteDoc(doc(db, "faqs", id));
      getFAQs();
      toast.success("FAQ deletado com sucesso.");
    } catch (error) {
      toast.error("Erro ao deletar o FAQ.");
      console.log(error);
    }
  };

  const updateFAQ = async ({ id, question, response }) => {
    try {
      await updateDoc(doc(db, "faqs", id), {
        question,
        response,
      });
      getFAQs();
      toast.success("FAQ atualizado com sucesso.");
    } catch (error) {
      toast.error("Erro ao atualizar o FAQ.");
      console.log(error);
    }
  };

  const getTestimonialsAll = async () => {
    const data = await getDocs(testimonialsCollectionRef);
    setTestimonialsAll(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const updateTestimonyUser = async (user, { testimony }) => {
    await updateDoc(doc(db, "users", user.id), {
      testimony,
    });
    getTestimonialsAll();
  };

  async function createPublishedTestimonials({ id, name, imageURL, testimony }) {
    try {
      await addDoc(collection(db, "publishedTestimonials"), {
        userId: id,
        userName: name,
        userImage: imageURL,
        userTestimony: testimony,
      });
      getTestimonialsAll();
      toast.success("Depoimento publicado com sucesso.");
    } catch (error) {
      toast.error("Erro ao publicar o depoimento.");
      console.log(error);
    }
  }

  const deletePublishedTestimonials = async (id) => {
    try {
      await deleteDoc(doc(db, "publishedTestimonials", id));
      getTestimonialsAll();
      toast.success("Depoimento deletado com sucesso.");
    } catch (error) {
      toast.error("Erro ao deletar o depoimento.");
      console.log(error);
    }
  };

  const getLinkForm = async () => {
    const data = await getDocs(linkFormCollectionRef);
    setLinkForm(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const updateLinkForm = async ({ id, link }) => {
    try {
      await updateDoc(doc(db, "linkForm", id), {
        link,
      });
      getLinkForm();
      toast.success("Link atualizado com sucesso.");
    } catch (error) {
      toast.error("Erro ao atualizar o depoimento.");
      console.log(error);
    }
  };

  function singIn({ email, password }) {
    console.log({ email, password });
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
        toast.warning("Email ou senha inválidos");
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
    const createdIn = moment().format("YYYY-MM-DD");
    let imageURL = null;

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
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          imageURL = url;
        });
        console.log(imageURL);

        await addDoc(collection(db, "users"), {
          name,
          email,
          cpf,
          course,
          level,
          password,
          imageURL,
          conclusionYear,
          createdIn,
          type: "user",
        });

        await createUserWithEmailAndPassword(auth, email, password)
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
            toast.success("Conta criada com sucesso.");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error("Erro ao criar sua conta, revise os campos e tente novamente.");
            // ..
          });
      }
    );
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

  const deleteUser = async (user) => {
    try {
      await deleteDoc(doc(db, "users", user.id));
      getUsers();
      toast.success("Usuário deletado com sucesso.");
    } catch (error) {
      toast.error("Erro ao deletar usuário.");
    }
  };

  async function autenticationUser(email) {
    // Create a query against the collection.
    const db = getFirestore(app);
    const userRef = collection(db, "users");
    const q = query(userRef, where("email", "==", email));

    const querySnapshot = await getDocs(q);
    const user = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0] || null;
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
        deleteUser,
        getUsers,
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
        newsAll,
        createNewsUpload,
        faqsAll,
        createFaqIn,
        getFAQs,
        deleteFAQ,
        updateFAQ,
        testimonialsAll,
        getTestimonialsAll,
        createPublishedTestimonials,
        deletePublishedTestimonials,
        updateTestimonyUser,
        deleteNews,
        updateNews,
        linkForm,
        updateLinkForm,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
}
