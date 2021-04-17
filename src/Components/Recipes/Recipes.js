import  React,{PureComponent} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import RecipeCard from './RecipeCard/RecipeCard';
import ClassStyles from './Recipes.module.css';
import LoadingIndicator from '../LoadingIndicator/Loadingindicator';
class Recipes extends PureComponent{
 
    render(){
        const Recipes=this.props.data.RecipeData.map(ele=>{
            return(
                <Col xs={12} md={3} className={`text-center text-md-left my-2`}>
                    <RecipeCard key={ele.id} name={ele.name} prepTime={ele.prepTime} 
                    img={ele.image} price={ele.price} rating={ele.rating}
                    type={ele.type} cuisine={ele.cuisine} >
                    <button className={`${ClassStyles.custombtn}`} onClick={()=>this.props.clicked(ele.id)} >View Recipe</button>
                    </RecipeCard>
            </Col> 
            )
        })
      return(
        <Container>
        <h3 style={{color:'#1D1B6E'}} className={`text-center text-md-left`}>Recipes</h3>
      <h5 style={{color:'#1D1B6E'}} className={`text-center text-md-left`}>Total Results : <span  style={{color:'#FF798A'}}>{this.props.totalResults}</span></h5>
        <Row>
          {Recipes}
        </Row>
        <Row className={`my-4 d-flex justify-content-center`}>
            {this.props.data.loadingMoreRecipes||!this.props.RecipesLoaded?<LoadingIndicator></LoadingIndicator>:null}
        </Row>
        <Row className={`my-4 d-flex justify-content-center`}>
        {this.props.data.RecipesLoaded?<button onClick={this.props.moreRecipesHandler} className={`${ClassStyles.custombtn}`}>More Recipes⬇</button>:null}
        </Row>
      </Container>
      );
    }

}
export default Recipes;