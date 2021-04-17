// @flow 
import  React,{Component} from 'react';
import Aux from '../../Hoc/Auxilliary';
import {Row,Col} from 'react-bootstrap';
import axios from 'axios';
import Autolinker from 'autolinker';
import LoadingIndicator from '../LoadingIndicator/Loadingindicator';
class RecipeInfo extends Component{
  state={
    RecipeData:{},
    loadedRecipeInfo:false
  }

 randomApiKey() {
   const apiKeys=['6af55fec3de949cbb755a127e9bf2099','f3d56799853e44048955d95086cf0f0a','a7c63da8b9dd43e59ba3565e734b7f83','0430d2810d94404594bec31eb9011a82','060bc16c5c31486c861676401246325a','96703974e7234622aea5d3fac6a2310f','b21218bfeb994e918aba99885fcd41ed'];
   return apiKeys[Math.floor(Math.random()*apiKeys.length)];
  }

 

   fetchCurrentRecipe(){
   let recipeItems={};
   const key=this.randomApiKey();
   axios.get(`https://api.spoonacular.com/recipes/${this.props.id}/information?apiKey=${key}`)
   .then(response=>{
           let recipeInstruction={}
           recipeInstruction={name:response.data.title,
                    summary:response.data.summary,
                    instructions:response.data.instructions,
                    ingredients:response.data.extendedIngredients.map(ele=>{return(ele.original)}).join(' , '),
                   type:response.data.dishTypes.join(','),
                   cuisine:response.data.cuisines.join(','),
               }
               recipeItems=recipeInstruction;
           let newState={};
           newState=recipeItems;
          this.setState({RecipeData:newState,loadedRecipeInfo:true},()=>{
            console.log(this.state.RecipeData);
            console.log(newState);
            
          });      
           
       }).catch(error=>{
           alert(error);
       });
       
}
componentDidMount(){
   this.fetchCurrentRecipe();
}

   render(){
      const RecipeEl=
      <Aux>
      <Row className={`d-flex justify-content-end px-2`}>
  </Row>
  <Row>
     <Col className={`text-center`}>
<h3 style={{fontWeight:600,color:'#FF798A'}}>{this.state.RecipeData.name}</h3>
<h6 dangerouslySetInnerHTML={{__html: Autolinker.link(this.state.RecipeData.summary)}}></h6>
     </Col>
  </Row>
  <Row className={`my-2`}>
     <Col className={`text-center`}>
     <h4 style={{fontWeight:500,color:'#FF798A'}}>Ingredients</h4>
<Col style={{fontWeight:500}}>{this.state.RecipeData.ingredients}</Col>
     </Col>
  </Row>
  <Row>
  <Col className={`text-center mt-2`}>
     <h4 style={{fontWeight:500,color:'#FF798A'}}>Instructions</h4>
<Col><h6 dangerouslySetInnerHTML={{__html: Autolinker.link(this.state.RecipeData.instructions)}} style={{fontWeight:500}}></h6></Col>
  </Col>
  </Row>
  </Aux>
      return(
      this.state.loadedRecipeInfo?<Aux>{RecipeEl}</Aux>:<div className={`text-center`}><LoadingIndicator></LoadingIndicator></div> 
      )
   }
}
export default RecipeInfo;