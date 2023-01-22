import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col, CardGroup } from 'reactstrap';

import { useStateContext } from '../context/StateContext';

import styles from '../styles/Home.module.css'

import UserDataCard from './UserDataCard';

const DashboardDisplayGrid = ({ userData }) => {
    const { selector } = useStateContext()
    const [auctionsExist, setAuctionsExist] = useState(false);
    const [spacesExist, setSpacesExit] = useState(false);
    const [advertisementsExist, setAdvertisementsExist] = useState(false);
    const [auctions, setAuctions] = useState([]);
    const [spaces, setSpaces] = useState([]);
    const [advertisements, setAdvertisements] = useState([]);

    useEffect(() => {
        if ('data' in userData) {
            if ('auctions' in userData.data) {
                setAuctions(userData.data.auctions);
                setAuctionsExist(true);
            }
            if ('spaces' in userData.data) {
                setSpaces(userData.data.spaces);
                setSpacesExit(true);
            }
            if ('advertisements' in userData.data) {
                setAdvertisements(userData.data.advertisements);
                setAdvertisementsExist(true);
            }
        }
    }, userData)

    return (
        <>
            <div className="card-grid">
                {auctionsExist && selector == 'auctions' &&
                    auctions.map(data => {
                        return (
                            <UserDataCard data={data} />
                        )
                    })}

                {spacesExist && 'selector' == 'spaces' &&
                    spaces.map(data => {
                        return (
                            <UserDataCard data={data} />
                        )
                    })}

                {advertisementsExist && selector == 'advertisements' &&
                    advertisements.map(data => {
                        return (
                            <UserDataCard data={data} />
                        )
                    })}
            </div>
        </>
    )
}

export default DashboardDisplayGrid;