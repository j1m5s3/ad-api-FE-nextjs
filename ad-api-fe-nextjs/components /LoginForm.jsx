import React, { useState } from 'react';

import styles from '../styles/LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const [email_address, setEmail_Address] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("HERE-0");
    console.log(email_address);
    console.log(password);
    onSubmit(email_address, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formBody}>
      <label>
        Email:
        <input type="text" value={email_address} onChange={(event) => setEmail_Address(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
