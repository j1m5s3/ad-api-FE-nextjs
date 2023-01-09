import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Head from 'next/head';

import { LoginForm } from '../components ';

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleLogin = (username, password) => {
    // Replace this with a function that sends a request to the server to
    // log the user in and receives the response
    const loggedIn = false//login(username, password);

    if (loggedIn) {
      // Redirect to the dashboard page if login is successful
      router.push('/dashboard');
    } else {
      setError('Invalid username or password');
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
          <h1>Login</h1>
          {error && <p>{error}</p>}
          <LoginForm onSubmit={handleLogin} />
          <Link href="/signup" legacyBehavior>
              <a>Don't have an account? Sign up</a>
          </Link>
      </>
  );
};

export default Login;
