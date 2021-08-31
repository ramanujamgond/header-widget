import Head from "next/head";

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// custom styles
import '../assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
