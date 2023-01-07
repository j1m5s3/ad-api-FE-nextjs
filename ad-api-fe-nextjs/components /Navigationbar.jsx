import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useStateContext} from '../context/StateContext';

import styles from '../styles/Navigationbar.module.css';


const Navigationbar = () => {

    const {} = useStateContext
    const router = useRouter()
    return(
        <>
            <nav>
                <ul className={styles.navListUserAccountOperation}>
                    <li>
                        <Link href="/signup" legacyBehavior>
                            <a className={styles.link}>Sign Up</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login" legacyBehavior>
                            <a className={styles.link}>Log In</a>
                        </Link>
                    </li>
                </ul>
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

            </nav>
        </>
    )
}

export default Navigationbar;