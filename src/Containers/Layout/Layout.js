// eslint-disable-next-line 
import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Aux from '../../Hoc/Auxilliary';
import Dropdowns from '../../Components/Dropdowns/Dropdowns';
import Recipes from '../../Components/Recipes/Recipes';
import axios from 'axios';
import Modal from '../../Components/Modal/Modal';
import RecipeInfo from '../../Components/RecipeInfos/RecipeInfo';
import Footer from '../../Components/Footer/footer';
class Layout extends Component{

    state={
        data:{
            RecipeData:[],
            RecipesLoaded:false,
            searchingRecipe:false,
            offset:0,
            number:32,
            loadingMoreRecipes:false,
            auth:true,
            showLogin:false,

        } ,
        totalResults:0,
        initialSearchItem:'',
        showModal:false,
        selectedID:null
        
    };
     moreRecipesHandler= async ()=>{
            let newState={...this.state.data}
            newState.offset=newState.offset+32;
            newState.loadingMoreRecipes=true;
            await this.setState({data:newState});
            console.log(this.state.data);
            await this.fetchRecipes();
            this.setState({loadingMoreRecipes:false});
        }
   
 async changeSearchValHandler(val)
 {
    this.state.data.RecipeData=[];
  await this.setState({initialSearchItem:val});
 this.setState({loadingMoreRecipes:false});
    this.setState({RecipesLoaded:false});
   this.fetchRecipes();
   this.setState({RecipesLoaded:true});
 }

 randomApiKey() {
    const apiKeys=['6af55fec3de949cbb755a127e9bf2099','f3d56799853e44048955d95086cf0f0a','a7c63da8b9dd43e59ba3565e734b7f83','0430d2810d94404594bec31eb9011a82','060bc16c5c31486c861676401246325a','96703974e7234622aea5d3fac6a2310f','b21218bfeb994e918aba99885fcd41ed'];
    return apiKeys[Math.floor(Math.random()*apiKeys.length)];
   }

 fetchRecipes(){
    console.log(`inside FectRecipes: ${this.state.initialSearchItem}`);
    const recipeItems=[];
    const key=this.randomApiKey();
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${this.state.initialSearchItem}&number=${this.state.data.number}&addRecipeInformation=true&offset=${this.state.data.offset}`)
    .then(response=>{
        response.data.results.forEach(fooditem => {
            let recipeitem={}
            recipeitem={name:fooditem.title,
                     id:fooditem.id,
                     prepTime:fooditem.readyInMinutes,
                     image:fooditem.image,
                     price:fooditem.pricePerServing,
                    rating:fooditem.spoonacularScore,
                    type:fooditem.dishTypes.slice(0,4).join(','),
                    cuisine:fooditem.cuisines.join(','),
                }
                recipeItems.push(recipeitem);
            });
            const newState={...this.state.data}
            newState.RecipeData=this.state.data.RecipeData.concat(recipeItems);
            this.setState({data:newState,totalResults:response.data.totalResults});      
            console.log(this.state.data);
            console.log(newState);
           
        }).catch(error=>{
            alert(error);
        });
       
}
openModal(){
    this.setState({showModal:true});   
}
closeModal()
{
    this.setState({selectedID:null});
    this.setState({showLogin:false});
    this.setState({showModal:false});   
}

 componentDidMount(){
    this.fetchRecipes();
 }
 async selectedIdHandler(ID)
 {
    await this.setState({selectedID:ID});
    this.openModal();
 }


 render(){
     return(
          <Aux>
        {this.state.selectedID!==null?(<Modal show={this.state.showModal} close={this.closeModal.bind(this)} comp='recipeInfo'><RecipeInfo id={this.state.selectedID}></RecipeInfo></Modal>):null}
         <Header clicked={this.changeSearchValHandler.bind(this)}></Header>
         <Dropdowns></Dropdowns>
         <Recipes data={this.state.data} totalResults={this.state.totalResults} moreRecipesHandler={this.moreRecipesHandler} clicked={this.selectedIdHandler.bind(this)}></Recipes>
         <Footer></Footer>
         </Aux>
     ); 
}
}
export default Layout;