import Head from 'next/head'

// component import
import Header from '../components/Header/Header';
import OurPremiumHotels from './sections/OurPremiumHotels';
import HotelPackages from './sections/HotelPackages';
import Footer from '../components/Footer';
import NearByHotels from './sections/NearByHotels';
import Testamonial from '../components/Testamonial/Testamonial';
import BoatHouse from './sections/BoatHouse';

const Home = () => {
  return (
    <>
      <Head>
        <title>TTDC - TamilNadu Tourism Development Corporation</title>
        <meta name="description" content="TTDC - TamilNadu Tourism Development Corporation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <OurPremiumHotels />
      <HotelPackages />
      <BoatHouse />
      <Testamonial />
      <NearByHotels />
      <Footer />
    </>
  )
}

export default Home;
