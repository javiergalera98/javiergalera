import Link from 'next/link'

import useTranslation from "next-translate/useTranslation";

import Header from "../components/global/header";
import Footer from "../components/global/footer";

export default function Home() {
  const { t } = useTranslation("global");

  return (
    <div>
      <Header />
      <div className="content">
        <div className="welcome-banner">
          <h1>{t("welcomeTitle")}</h1>
          <h2>{t("welcomeSubtitle")}</h2>
          <p>{t("welcomeDescription1")}<br/>{t("welcomeDescription2")} <a href="https://www.byspace.es">Space.</a></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
