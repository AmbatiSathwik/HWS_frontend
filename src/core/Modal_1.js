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
      <Modal.Body>Name: {props.content.name}</Modal.Body>
      <Modal.Body>Roll number: {props.content.roll}</Modal.Body>
      </div> :<Modal.Body>{props.content}</Modal.Body>}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
