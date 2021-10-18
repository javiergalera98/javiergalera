import useTranslation from "next-translate/useTranslation";

import Header from "../components/global/header";
import Footer from "../components/global/footer";

export default function Home() {
  const { t } = useTranslation("global");

  return (
    <div>
      <Header />
      <div>
        <div className="welcome-banner">
          <h2>👋🏻</h2>
          <h1>Javier Galera</h1>
          <p>I'm a <span>Swift</span> and <span>Web</span> Developer</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
