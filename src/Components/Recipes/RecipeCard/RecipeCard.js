import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import ClassStyles from './RecipeCard.module.css';
const RecipeCard = (props) =>(
 <div style={{color:'#1D1B6E'}} xs={12} className={`border rounded h-100 ${ClassStyles.card} `}>
     <Row>
         <Col className={`text-center align-content-center`}>
              <img alt="logo" className={``} src={props.img} style={{maxWidth:'100%',maxheight:'50%'}}></img>
              <Container fluid className={`py-3`}>
               <h4 style={{fontWeight:600}}>{props.name}</h4>
              <Row className={`${ClassStyles.cardRow}`} style={{fontWeight:500}}>
                    <Col xs={12} className={`my-1 `}>Cuisine: <span className={`${ClassStyles.title}`}>{props.cuisine}</span></Col>
                    <Col xs={6} className={`my-1 `}>Price: <span className={`${ClassStyles.title}`}>${props.price}</span></Col>
                    <Col xs={6} className={`my-1 `}>Rating: <span className={`${ClassStyles.title}`}>{props.rating}</span></Col>
                    <Col xs={12} className={`my-1 text-bold`}>PrepTime: <span className={`${ClassStyles.title}`}>{props.prepTime}min</span></Col>
                    <Col xs={12} className={`my-1`}>Dish Type: <span className={`${ClassStyles.title} text-wrap`}>{props.type}</span></Col>
                  <Col xs={12} className={`my-2 d-flex justify-content-center`}>
                    {props.children}
                  </Col>
              </Row>
              </Container>
              
        </Col>
         
     </Row>
 </div>
);
export default RecipeCard;