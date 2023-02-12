import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useStateContext } from '../context/StateContext';
import styles from '../styles/Home.module.css'

import { DashboardDisplayGrid, Navigationbar, DashboardSelector } from '../components ';

const inter = Inter({ subsets: ['latin'] })

const DashBoard = ({user_data}) => {

  const { selector } = useStateContext();
  
  return (
    <>
      <Head>
        <title>AD API User Dashboard</title>
        <meta name="description" content="Created by James Lynch" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoAssets/favicon.png" />
      </Head>
      <Navigationbar/>
      <div className='dashboardSelectorDiv'>
        <DashboardSelector/>
      </div>
      <main className={styles.indexMain}>
        <DashboardDisplayGrid userData={user_data}/>
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

export const getServerSideProps = async (context) => {
  const url = process.env.NEXT_PUBLIC_BE_URL + '/user_data';
  const token = context.query.token;
  const res = await fetch(url, {
    method: 'GET',
    headers: {'Content-Type': 'application/json', 
    'Authorization': token}
  })
  if (!res.ok) {
      return {redirect: {destination: '/', permanent: false,}}
  }
  const user_data = await res.json();
  console.log(user_data)
  return {
    props: {user_data}
  };
};

export default DashBoard;