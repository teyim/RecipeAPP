// @flow 
import * as React from 'react';
import ClassStyles from './Backdrop.module.css';
import { Container } from 'react-bootstrap';
const Backdrop = (props) => (
props.show?<Container fluid className={`${ClassStyles.backdrop}`} onClick={props.close}></Container>:null
);
export default Backdrop;