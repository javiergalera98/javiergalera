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
          <h2>{t("welcomeTitle")}</h2>
          <h1>{t("welcomeSubtitle")}</h1>
          <p>{t("welcomeDescription1")}<br/>{t("welcomeDescription2")} <a className="font-bold" href="https://www.byspace.es">Space.</a></p>
          <Link href="/contact"><a className="color-button">{t("welcomeButton")}</a></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
