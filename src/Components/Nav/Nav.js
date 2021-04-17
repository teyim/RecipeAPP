// eslint-disable-next-line 
import React from 'react';
import ClassStyles from './Nav.module.css';

import {Container,Navbar,NavDropdown,Nav}from 'react-bootstrap';
import recipeBookLogo from '../../Assets/Images/carrotLogo.svg';

const navBar=(props)=>(
<Container className={ClassStyles.navItem}>
<Navbar collapseOnSelect expand="lg" >
  <Navbar.Brand href="#home" style={{fontWeight:'700',fontSize:"1.5rem"}}> 
  <img
        alt=""
        src={recipeBookLogo}
        width="33"
        height="33"
        className="d-inline-block align-top "
      />{' '}
      Foodie</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto ml-auto">
      <Nav.Link href="#features">Recipes</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#deets">Contact Us</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link onClick={props.clicked}>
        Login/Signup
      </Nav.Link>
    </Nav>
    {props.auth?(<NavDropdown title="Teyim Asobo" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Recipes</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
      </NavDropdown>):null}
  </Navbar.Collapse>
</Navbar>

</Container>
);
export default navBar;