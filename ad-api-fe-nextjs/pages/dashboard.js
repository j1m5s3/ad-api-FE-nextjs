import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

import styles from '../styles/Home.module.css'

import { AuctionGrid, Navigationbar } from '../components ';

const inter = Inter({ subsets: ['latin'] })

const Home = ({ user_data }) => {

  return (
    <>
      <Head>
        <title>AD API User Dashboard</title>
        <meta name="description" content="Created by James Lynch" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoAssets/favicon.png" />
      </Head>
      <Navigationbar/>
      <main className={styles.indexMain}>
        <AuctionGrid auctionDataArray={user_data}/>
      </main>
      <footer className={styles.footer}>
        <div className={styles.socialLinks}>
          <a href="https://www.facebook.com/your-page-name">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/your-handle">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/your-handle">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/your-profile">
            <FaLinkedin />
          </a>
          <a href="https://github.com/j1m5s3">
            <FaGithub />
          </a>
        </div>
      </footer>
    </>
  )
}

export const getServerSideProps = async () => {
  const url = process.env.NEXT_PUBLIC_BE_URL + '/user_data';
  console.log("URL: " + url);
  const res = await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  });

  const user_data = res.data;
  return {
    props: {user_data}
  };
};

export default DashBoard;