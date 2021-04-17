import React,{Component} from 'react';
import Dropdown from '../Dropdowns/Dropdown/Dropdown';
import {Container,Row,Col} from 'react-bootstrap';
import CreatableMulti from './Dropdown/CreateSelectDropdown';

class Dropdowns extends Component {
    state={
   Diet : ['chocolate','strawberry','vanilla'].map(el=>{return({value:el,label:el})}),
Intolerance : ['diary','egg','grain','peanut','seafood','sesame','shellfish','soy','sulfite','tree nut','wheat']
              .map(el=>{
                return({value:el,label:el})
              }),
  Type : ["Main Course","Side dish","dessert",'appetizer','salad','bread','breakfast','soup','beverage',
           'sauce','marinade','fingerfood','snack','drink'].map(el=>{
             return(
               {value:el,label:el}
              );
           }),

  Cuisine : ["African",'American','British','Cajun','Caribbean','Chinese','Eastern European','European',
           'French','German','Greek','Indian','Irish','Italian','Japanese','Jewish','Korean','Latin American',
           'Mediterranean','Mexican','middle Eastern','Nordic','Southern','Thai','Vietnamese'].map(el=>{
               return(
                   {value:el,label:el}
               );
           })
}

  render() {
    return (
        <Container>
        <Row className={`my-4 justify-content-center 3`}>
          <Col xs={12} md={3} className={`my-3`}><Dropdown placeholder='Filter Diet' options={this.state.Diet}></Dropdown></Col>
          <Col xs={12} md={3} className={`my-3`}><Dropdown placeholder='Filter Intolerance' options={this.state.Intolerance}></Dropdown></Col>
          <Col xs={12} md={3} className={`my-3`}><Dropdown placeholder='Filter Type' options={this.state.Type}></Dropdown></Col>
          <Col xs={12} md={3} className={`my-3`}><CreatableMulti placeholder='Exclude Cuisine' options={this.state.Cuisine}></CreatableMulti></Col>
        </Row>
      </Container>
    );
  };
  
};
export default Dropdowns;