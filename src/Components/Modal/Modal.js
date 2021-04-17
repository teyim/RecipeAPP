// @flow 
import React from 'react';
import Modal from 'react-bootstrap/Modal'
const ModalPopup = (props) =>{
 
  return (
    <>
      <Modal show={props.show} onHide={props.close} >
      {props.comp!=='login'&&props.comp!=='signup'? <Modal.Header closeButton></Modal.Header>:null}
      <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
}
  
export default ModalPopup;