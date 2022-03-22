import Head from "next/head";

import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          defer
          data-domain="javiergalera.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
