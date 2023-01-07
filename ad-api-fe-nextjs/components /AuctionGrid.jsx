import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col, CardGroup} from 'reactstrap';

import { useStateContext} from '../context/StateContext';

import styles from '../styles/Home.module.css'
//import '../styles/AuctionCard.module.css'

import AuctionCard from './AuctionCard'

const AuctionGrid = ({ auctionDataArray }) => {

    return(
        <>
            <div className="card-grid">
                {auctionDataArray.map( data => {
                    return (  
                        <AuctionCard auctionData={data}/>
                    )
                })}
            </div>
        </>
    )
}


export default AuctionGrid;