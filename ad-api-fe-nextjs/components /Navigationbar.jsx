import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useStateContext} from '../context/StateContext';
import { FcHome } from 'react-icons/fc'

import styles from '../styles/Navigationbar.module.css';


const Navigationbar = () => {

    const {} = useStateContext
    const router = useRouter()
    return(
        <>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.logoContainer}>
                        <Link href="/" legacyBehavior>
                            <a className={styles.logoLink}>
                                <FcHome className={styles.logo}/>
                            </a>
                        </Link>
                    </li>
                    <div className={styles.searchBar}>SEARCH BAR</div>
                    <ul className={styles.navListUserAccountOperation}>
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
                    </ul>
                </ul>
            </nav>
        </>
    )
}

export default Navigationbar;

/*
                <ul className={styles.navList}>
                    <li>
                        <Link href="/" legacyBehavior>
                            <a className={styles.link}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" legacyBehavior>
                            <a className={styles.link}>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" legacyBehavior>
                            <a className={styles.link}>Contact</a>
                        </Link>
                    </li>
                </ul>
*/                