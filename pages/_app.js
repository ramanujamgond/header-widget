import Head from "next/head";

import { useEffect } from "react";
// import AOS 
import AOS from 'aos';
import 'aos/dist/aos.css';


// bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// custom styles
import '../assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
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
