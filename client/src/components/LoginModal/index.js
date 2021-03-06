import React from "react"
import {Modal, Button} from "react-bootstrap"
import './style.css'


function LoginModal(props) {

  
  return (            
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header className="modalStyle" closeButton>
          <Modal.Title className="modalStyle">You are not logged in!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalStyle">Please log in to like and comment on posts!</Modal.Body>
        <Modal.Footer className="modalStyle">
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default LoginModal;