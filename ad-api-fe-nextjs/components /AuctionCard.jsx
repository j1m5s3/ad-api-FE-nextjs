import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
  } from 'reactstrap';

import { useStateContext} from '../context/StateContext';


const AuctionCard = ({ auctionData }) => {
    const auction_id = auctionData.auction_record._id;
    const auction_starting_price = auctionData.on_chain_info.price.starting_price;
    const auction_current_price = auctionData.on_chain_info.price.current_price;
    const auction_discount_rate = auctionData.on_chain_info.price.discount_rate;
    const auction_start_date = auctionData.on_chain_info.auction_time.auction_start;
    const auction_end_date = auctionData.on_chain_info.auction_time.auction_expire;
    return(
        <>
            <Card>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap"/>
                <CardBody>
                    <CardTitle tag="h5">Auction ID {auction_id}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText tag="p">Start Price: {auction_starting_price}</CardText>
                    <CardText tag="p">Current Price: {auction_current_price}</CardText>
                    <CardText tag="p">Discount Rate: {auction_discount_rate}</CardText>
                    <CardText tag="p">Start Date: {auction_start_date}</CardText>
                    <CardText tag="p">End Date: {auction_end_date}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </>
    )
} 

export default AuctionCard;