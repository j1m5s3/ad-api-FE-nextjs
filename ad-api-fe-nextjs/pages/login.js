import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useStateContext, StateContext } from '../context/StateContext'

import Link from 'next/link';
import Head from 'next/head';

import { LoginForm } from '../components ';

import styles from '../styles/Login.module.css'


const Login = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  const {setIsAuthenticated} = useStateContext();

  const handleLogin = async (email_address, password) => {
    try {
     
      const url = process.env.NEXT_PUBLIC_BE_URL+ '/login';
      console.log(url);
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email_address, password }),
      });
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setIsAuthenticated(true);
        router.push({pathname: '/dashboard', query: {token: data.token}});
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
      <>
          <Head>
              <title>Login</title>
              <meta name="description" content="User Login" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/logoAssets/favicon.png" />
          </Head>
          <main className={styles.indexLogin}>
            <h1>Login</h1>
            {error && <p>{error}</p>}
            <LoginForm onSubmit={handleLogin} />
            <Link href="/signup" legacyBehavior>
                <a>Don't have an account? Sign up</a>
            </Link>
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
  );
};

export default Login;
