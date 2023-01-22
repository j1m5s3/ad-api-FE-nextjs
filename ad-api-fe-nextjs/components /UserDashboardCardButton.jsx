import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap';
import { useStateContext } from '../context/StateContext';

import styles from '../styles/AuctionCard.module.css'


const UserDashboardCardButton = () => {
    const { selector } = useStateContext();
    return (
        <>
            {selector == 'auctions' && (<Button className={styles.button}>Remove</Button>)}
            {selector == 'spaces' && (
                <Container>
                    <Row>
                        <Col>
                            <Button className={styles.button}>Edit</Button>
                        </Col>
                        <Col>
                            <Button className={styles.button}>Auction</Button>
                        </Col>
                    </Row>
                </Container>)}
            {selector == 'advertisements' && (<Button className={styles.button}>Remove</Button>)}

        </>
    )
}

export default UserDashboardCardButton