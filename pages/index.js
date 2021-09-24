import Head from 'next/head'

// component import
import Header from '../components/Header/Header';

const Home = () => {
  return (
    <>
      <Head>
        <title>Website Under Development</title>
        <meta name="description" content="Website Under Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  )
}

export default Home;
