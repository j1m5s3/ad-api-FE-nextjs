import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';


import Link from 'next/link';
import Head from 'next/head';

import { LoginForm } from '../components ';


const Login = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleLogin = async (email_address, password) => {
    console.log("HERE");
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
        console.log(data)
        setCookie(null, 'Authorization', data.token)
        router.push('/dashboard');
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
         
          <main>
            <h1>Login</h1>
            {error && <p>{error}</p>}
            <LoginForm onSubmit={handleLogin} />
            <Link href="/signup" legacyBehavior>
                <a>Don't have an account? Sign up</a>
            </Link>
          </main>
      </>
  );
};

export default Login;
