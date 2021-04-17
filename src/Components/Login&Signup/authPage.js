import React from 'react';
import facebookLogo from '../../Assets/Images/facebook.svg';
import twitterLogo from '../../Assets/Images/twitter_circled.svg';
import GoogleLogo from '../../Assets/Images/google.svg';
import classStyles from './authPage.module.css';
import recipeBookLogo from '../../Assets/Images/carrotLogo.svg';
import {Container, Row ,Button,Form} from 'react-bootstrap';

const authPage=(props)=>{
    
    let pagename='';
    if (props.pageType==='login') {
        pagename='Login';
    }
    else
    {
        pagename='Signup'
    }
return(
<Container fluid >
    <Row className={`justify-content-center`}>
    <img
        alt=""
        src={recipeBookLogo}
        width="30"
        height="30"
        className="d-inline-block align-top "
      />
      <h3 style={{fontWeight:'700',color:'rgb(255,121,138)'}}>Foodie</h3>
    </Row>
    <Row className={`mt-3 justify-content-center`}>
    <Button
    variant="default"
    style={{ color: "white", background: "#3B5998",borderRadius:'0'}}
block active className={classStyles.btn}>
     <img
        alt=""
        src={facebookLogo}
        width="30"
        height="20"
        className="d-inline-block align-top "
      />
    {pagename} with Facebook
</Button>
<Button
    variant="default"
    style={{ color: "white", background: "#C32E10",borderRadius:'0'}}
block active className={classStyles.btn}>
     <img
        alt=""
        src={GoogleLogo}
        width="30"
        height="20"
        className="d-inline-block align-top "
      />
    {pagename} with Google+
</Button>
<Button
    variant="default"
    style={{ color: "white", background: "#00ACED",borderRadius:'0'}}
block active className={classStyles.btn}>
     <img
        alt=""
        src={twitterLogo}
        width="40"
        height="20"
        className="d-inline-block align-top "
      />
    {pagename} with twitter
</Button>
<h6 className={`mt-3 ${classStyles.AuthaltText}`}>OR</h6>
    </Row>
    <Row  className={`d-block justify-content-center`}>
    <Form className={`my-3`}>
  {props.pageType!=='login'?(<Form.Group>
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter username" />   
 </Form.Group>):null}
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  {props.pageType!=='login'?(<Form.Group controlId="formBasicPassword">
    <Form.Label> Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>):null}
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="keep me signed in" />
  </Form.Group>
  <Button variant="default" type="submit" block style={{background:'#1D1B6E',color:'white'}}>
    {pagename}
  </Button>
</Form>
{props.pageType==='login'?(<h6  className={`text-muted text-center`}style={{fontWeight:'400'}}>need an account?<a  href style={{color:'blue'}}  onClick={props.swapAuthPage}>signup now</a></h6>):null}
{props.pageType!=='login'?(<h6 className={`text-muted text-center`} style={{fontWeight:'400'}}>already have an account?<a  href style={{color:'blue'}} onClick={props.swapAuthPage}>Login</a></h6>):null}
    </Row>
</Container>
);
};
export default authPage;