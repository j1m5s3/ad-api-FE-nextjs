import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';
import { FcHome } from 'react-icons/fc'

import SearchBar from './SearchBar';

import styles from '../styles/Navigationbar.module.css';


const Navigationbar = () => {

    const { isAuthenticated } = useStateContext()
    //const router = useRouter()
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.logoContainer}>
                        <Link href="/" legacyBehavior>
                            <a className={styles.logoLink}>
                                <FcHome className={styles.logo} />
                            </a>
                        </Link>
                    </li>
                    <SearchBar />
                    <ul className={styles.navListUserAccountOperation}>
                        {!isAuthenticated && (
                            <>
                                <li className={styles.linkContainer}>
                                    <Link href="/signup" legacyBehavior>
                                        <a className={styles.link}>Sign Up</a>
                                    </Link>
                                </li>
                                <li className={styles.linkContainer}>
                                    <Link href="/login" legacyBehavior>
                                        <a className={styles.link}>Log In</a>
                                    </Link>
                                </li>
                            </>
                        )}

                        {isAuthenticated && (
                            <div>LOGGED IN</div>
                        )}
                    </ul>
                </ul>

            </nav>
        </>
    )
}

export default Navigationbar;
