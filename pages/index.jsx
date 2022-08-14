import BasePage from "../components/basePage";

import History from "../components/history";
import News from "../components/news";
import OurGraduates from "../components/ourGraduates";
import Depositions from "../components/depositions";

export default function HomePage() {
  return (
    <BasePage>
      <History />
      <News />
      <OurGraduates />
      <Depositions />
    </BasePage>
  );
}
