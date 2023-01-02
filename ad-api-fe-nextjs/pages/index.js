import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import { AuctionGrid } from '../components ';

const inter = Inter({ subsets: ['latin'] })

const Home = ({ auctions }) => {

  return (
    <>
      <Head>
        <title>AD API Auction Front</title>
        <meta name="description" content="Created by James Lynch" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <AuctionGrid auctionDataArray={auctions}/>
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const url = process.env.BE_PUBLIC_URL + '/live_auctions';
  console.log("URL: " + url);
  const res = await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  });

  const auctions = res.data;
  return {
    props: {auctions}
  };
};

export default Home;