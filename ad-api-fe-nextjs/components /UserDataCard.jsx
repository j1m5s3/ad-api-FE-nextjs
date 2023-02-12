import React, { useState, useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';
import Link from 'next/link';
import { router } from 'next/router';
import { useStateContext } from '../context/StateContext';

import user_dashboard_styles from '../styles/UserDashboardCardButton.module.css'
import styles from '../styles/AuctionCard.module.css';

const UserDataCard = ({ data }) => {
  const { selector, setSelector, setUserDataOfFocus } = useStateContext();

  const handleClickAuction = (data) => {
    setUserDataOfFocus(data);
    setSelector('create_auction');
  }

  const handleClickRemove = (data) => {
    setUserDataOfFocus(data);
    setSelector('remove');
  }

  if ("ref_data" in data) {
    console.log(Object.entries(data.ref_data))
  }
  return (
    <>
      <Card>
        <CardImg top width="100%" src="logoAssets/logo_transparent.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">ID: {data._id}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          {Object.entries(data).map(([key, value]) => {
            if (key !== "_id" && key != "ref_data") {
              return (
                <>
                  <CardText tag="h6">{key}: {value}</CardText>
                </>
              );
            }
            if (key == "ref_data") {
              Object.entries(data.ref_data).map(([ref_data_key, ref_data_value]) => {
                return (
                  <>
                    <CardText tag="h6">{ref_data_key}: {ref_data_value}</CardText>
                  </>
                )
              })
            }
          })}
        </CardBody>
        {selector == 'auctions' && (<Button onClick={() => handleClickRemove(data)} className={styles.button}>Remove</Button>)}
        {selector == 'spaces' && (
          <Container>
            <Row>
              <Col>
                <Button className={user_dashboard_styles.buttonTop}>Edit</Button>
              </Col>
              <Col>
                <Button onClick={() => handleClickAuction(data)} className={styles.button}>Auction</Button>
              </Col>
            </Row>
          </Container>)}
        {selector == 'advertisements' && (
          <Button onClick={() => handleClickRemove(data)} className={styles.button}>Remove</Button>)}
      </Card>
    </>
  )
}

export default UserDataCard;