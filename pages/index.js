import Link from "next/link";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation";
import { NextSeo } from "next-seo";

import Header from "../components/global/header";
import Footer from "../components/global/footer";
import Intro from "../components/home/intro";

export default function Home() {
  const { t } = useTranslation("global");

  return (
    <>
      <NextSeo
        title={t("seoTitle")}
        description={t("seoDescription")}
        canonical="https://www.javiergalera.com/"
        openGraph={{
          url: "https://www.javiergalera.com/",
          title: "Javier Galera",
          description: "iOS Developer, forging stars at Space.",
        }}
      />
      <Header />
      <div className="content">
        <div className="home-content">
          <div>
            <div className="welcome-section">
              <div className="welcome-title">
                <p>Hello, world!</p>
              </div>
            </div>
          </div>
          <Intro />
        </div>
      </div>
      <Footer />
    </>
  );
}
