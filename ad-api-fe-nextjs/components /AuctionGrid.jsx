import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col} from 'reactstrap';

import { useStateContext} from '../context/StateContext';

import AuctionCard from './AuctionCard'

const AuctionGrid = ({ auctionDataArray }) => {

    return(
        <>
            <Container>
                <Row xs={3}>
                {auctionDataArray.map( data => {
                    return (
                    <Col>     
                        <AuctionCard auctionData={data}/>
                    </Col>
                    )
                })}
                </Row>
            </Container>
        </>
    )
}


export default AuctionGrid;