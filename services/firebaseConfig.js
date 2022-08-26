
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTuuo5PC6y1L5DHgtRMD2BQ3kuWmuPmfc",
  authDomain: "next-egressos.firebaseapp.com",
  projectId: "next-egressos",
  storageBucket: "next-egressos.appspot.com",
  messagingSenderId: "618242890259",
  appId: "1:618242890259:web:b1e21e6af83191b8b7bde6",
  measurementId: "G-GX77F2KVBB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);