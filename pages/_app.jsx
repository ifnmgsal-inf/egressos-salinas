import "../styles/globals.css";
import Head from "next/head";
import { AuthUserProvider } from "../contexts/authUserContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Egressos IFNMG Campus Salinas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/if_icon.png" />
      </Head>
      <AuthUserProvider>
        <Component {...pageProps} />
      </AuthUserProvider>
    </>
  );
}

export default MyApp;
