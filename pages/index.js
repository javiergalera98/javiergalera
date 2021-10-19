import Link from 'next/link'
import Image from 'next/image'

import useTranslation from "next-translate/useTranslation";
import { NextSeo } from 'next-seo';

import Header from "../components/global/header";
import Footer from "../components/global/footer";

export default function Home() {
  const { t } = useTranslation("global");

  return (
    <>
    <NextSeo
      title={t("seoTitle")}
      description={t("seoDescription")}
      canonical="https://www.javiergalera.com/"
      openGraph={{
        url: 'https://www.javiergalera.com/',
        title: 'Javier Galera',
        description: 'Open Graph Description',
      }}
    />
      <Header />
      <div className="content">
        <div className="welcome-banner">
          <Image src="/images/avatar.webp" alt="Picture of the author" width={150} height={150}/>
          <h2>{t("welcomeTitle")}</h2>
          <h1>{t("welcomeSubtitle")}</h1>
          <p>{t("welcomeDescription1")}<br/>{t("welcomeDescription2")} <a className="font-bold" href="https://www.byspace.es">Space.</a></p>
          <Link href="/contact"><a className="color-button">{t("welcomeButton")}</a></Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
