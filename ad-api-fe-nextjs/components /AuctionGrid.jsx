import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col, CardGroup} from 'reactstrap';

import { useStateContext} from '../context/StateContext';

import styles from '../styles/Home.module.css'

import AuctionCard from './AuctionCard'

const AuctionGrid = ({ auctionDataArray }) => {

    return(
        <>
            <CardGroup>
                {auctionDataArray.map( data => {
                    return (  
                        <AuctionCard auctionData={data}/>
                    )
                })}
            </CardGroup>
        </>
    )
}


export default AuctionGrid;