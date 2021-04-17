// @flow 
import * as React from 'react';
import { Container, Col,Row} from 'react-bootstrap';
import twitterImage from '../../Assets/Images/icons8_twitter.ico';
import GithubImage from '../../Assets/Images/icons8_github2.ico';
import LinkedInImage from '../../Assets/Images/icons8_linkedin_circled.ico';
const Footer = (props) =>(
    <Container fluid style={{backgroundColor:"#1D1B6E"}}>
     <Container>
         <Row className={`text-center py-3`}>
            <Col xs={12}>
            <h2 style={{fontWeight:600,color:'#FF798A'}}>Foodie</h2>
            </Col>
            <Col className={`my-1`}>
           <a href><img src={twitterImage} alt="social-icons"></img></a>
           <a href><img src={GithubImage} alt="social-icons"></img></a>
           <a href><img src={LinkedInImage} alt="social-icons"></img></a>
            </Col>
            <Col xs={12} >
            <h5 style={{color:'#FF798A'}}><span role='img' aria-label="emoji hand">👋</span>Hey there,this website was developed by Teyim<br/>have fun Cooking</h5>
            </Col>
         </Row>
     </Container>
    </Container>
);
export default Footer;