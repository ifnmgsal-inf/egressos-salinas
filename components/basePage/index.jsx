import Header from "../../components/header";
import ScrollTopView from "../../components/scrollTopView";
import Footer from "../../components/footer";

export default function BasePage({ children }) {
  return (
    <div id="main">
      <Header />
      {children}
      <ScrollTopView />
      <Footer />
    </div>
  );
}
