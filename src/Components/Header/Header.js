import React,{Component} from 'react';
import {Container,Row,Col}from 'react-bootstrap';
import ClassStyle from './Header.module.css';
import LogoImage from '../../Assets/Images/kisspng-angus-cattle-kebab-hamburger-take-out-pizza-beef-burger-5ad848f1a59fd3.9041058515241238896784.png';
class Header extends Component{
  state={
    searchValue:''
  }
ChangeSearchVal=()=>{
  if (this.state.searchValue==='') {
    alert('please enter food item to search')
  } else {
    this.props.clicked(this.state.searchValue)
  } 
  }

  TextboxValue=(event)=>{
    let tbVal=event.target.value;
this.setState({searchValue:tbVal})
  }
  
  render(){
    return (
        <Container className={`mt-2 text-light  rounded  ${ClassStyle.header} py-xs-4 py-md-3 text-center`}>
        <Row className="d-flex justify-content-between align-items-center px-md-4  py-md-0 ">
          <Col md={6} xs={12} className={` py-3`}>
            <h2 style={{fontWeight:600}}>Expand your Cooking Skills <br/> with <span className={ClassStyle.highlight}>Foodie</span></h2>
            <h5 style={{fontWeight:200}} className={`py-2`}>Get creative with thousands of recipes made ready for you.cook enjoy and shares with your love ones while upgraded your cooking skills.</h5>
            <input onChange={event=>this.TextboxValue(event)} placeholder="Enter meal name" className={`${ClassStyle.input} rounded-left`}></input><button onClick={this.ChangeSearchVal} className={`${ClassStyle.btn} rounded-right`} >Search</button>
          </Col>
          <Col md={6} className={`d-none d-md-block`}>
            <img alt="logo" className={`${ClassStyle.logo}`} src={LogoImage}></img>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;