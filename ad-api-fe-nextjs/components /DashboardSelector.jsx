import React, { useState } from 'react'
import { useStateContext } from '../context/StateContext';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from 'reactstrap';

import styles from '../styles/DashboardSelector.module.css';

const DashboardSelector = () => {
    console.log("HERE0")
    const { setSelector } = useStateContext();
    const [isOpen, setIsOpen] = useState(false);
    console.log("HERE1")

    const handleSelection = (option) => {
        console.log("HERE-F1")
        setSelector(option);
    }

    console.log("HERE3")
    return (
        <div className={styles.selectorButtonDiv}>
            <Button onClick={() => handleSelection('auctions')}>Show Auctions</Button>
            <Button onClick={() => handleSelection('spaces')}>Show Spaces</Button>
            <Button onClick={() => handleSelection('advertisements')}>Show Advertisements</Button>
        </div>
    )
}

export default DashboardSelector