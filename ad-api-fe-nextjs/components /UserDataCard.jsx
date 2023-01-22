import React, { useState, useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';
import styles from '../styles/AuctionCard.module.css'

const UserDataCard = ({ data }) => {
  //console.log(data)
  //for (let [key, value] of Object.entries(data)) {
  //  console.log(`${key}: ${value}`);
//}
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
      </Card>
    </>
  )
}

export default UserDataCard;