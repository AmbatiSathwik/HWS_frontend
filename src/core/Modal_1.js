import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Modal_1(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                {props.heading}
            </Button>
            <Modal show={show} onHide={handleClose} animation={false} keyboard={true}>
                {props.heading==="Search"? <div>
                    <center className="mt-4 mb-3"><h5>Student Details</h5></center>
                    <Modal.Body>
                        <p>Name : {props.content.name}</p>
                        <p>Roll number : {props.content.roll}</p>
                        <p>Phone number : {props.content.phno}</p>
                        <p>Hostel : {props.content.hostel}</p>
                        <p>Room number : {props.content.room}</p>
                        <p>Address : {props.content.address}</p>
                    </Modal.Body>
                </div> :<Modal.Body>{props.content}
                </Modal.Body>}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}