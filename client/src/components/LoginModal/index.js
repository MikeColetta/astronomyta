import React from "react"
import {Modal, Button} from "react-bootstrap"


function LoginModal(props) {

  
  return (            
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You are not logged in!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please log in to like and comment on posts!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default LoginModal;