import "../styles/globals.css";
import { AuthUserProvider } from "../contexts/authUser";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}

export default MyApp;
