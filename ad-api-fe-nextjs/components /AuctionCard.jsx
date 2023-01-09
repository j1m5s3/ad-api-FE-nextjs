import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
  } from 'reactstrap';

import { useStateContext} from '../context/StateContext';
import styles from '../styles/AuctionCard.module.css'

const AuctionCard = ({ auctionData }) => {
    const [timeRemaining, setTimeRemaining] = useState(null);

    const auction_id = auctionData.auction_record._id;
    const auction_starting_price = Number(auctionData.on_chain_info.price.starting_price).toFixed(8);
    const auction_current_price = Number(auctionData.on_chain_info.price.current_price).toFixed(8);
    const auction_discount_rate = Number(auctionData.on_chain_info.price.discount_rate).toFixed(8);
    const auction_start_date = auctionData.on_chain_info.auction_time.auction_start;
    const auction_end_date = auctionData.on_chain_info.auction_time.auction_expire;

    useEffect(() => {
      const timer = setInterval(() => {
        const now = new Date();
        const endDate = new Date(auction_end_date);
        const timeLeft = endDate.getTime() - now.getTime();
        if (timeLeft > 0) {
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
          setTimeRemaining(`${days}d:${hours}hrs:${minutes}mins:${seconds}s`);
        } else {
          clearInterval(timer);
          setTimeRemaining("COMPLETE");
        }
      }, 1000);
    }, []);

    return(
        <>
            <Card>
                <CardImg top width="100%" src="logoAssets/logo_transparent.png" alt="Card image cap"/>
                <CardBody>
                    <CardTitle tag="h5">Auction ID: {auction_id}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText tag="h6">Start Price: {auction_starting_price} ETH</CardText>
                    <CardText tag="h6">Current Price: {auction_current_price} ETH</CardText>
                    <CardText tag="h6">Discount Rate: {auction_discount_rate} ETH</CardText>
                    <CardText tag="h6">Start Date: {auction_start_date}</CardText>
                    <CardText tag="h6">End Date: {auction_end_date}</CardText>
                    <CardText tag="h6">Time remaining: {timeRemaining}</CardText>
                </CardBody>
                <Button className={styles.button}>Bid</Button>
            </Card>
        </>
    )
} 

export default AuctionCard;