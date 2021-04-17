import React, { Component } from 'react';
import AuthPage from '../../Components/Login&Signup/authPage';
import Nav from '../../Components/Nav/Nav';
import Modal from '../../Components/Modal/Modal';
class Auth extends Component
{
    state={
        showAuth:false,
        currentAuthPage:'login',
        auth:false,
        showModal:false
    }
    openModal(){
        this.setState({showModal:true});   
    }
    closeModal()
    {
        this.setState({showLogin:false});
        this.setState({showModal:false});   
    }
 async ToggleAuthPage()
 {
    await this.setState({showAuth:true});
    this.openModal();
 }

 swapAuthPage()
 {
    if (this.state.currentAuthPage==='login') {
        this.setState({currentAuthPage:'signup'});
    }
    else
    {
        this.setState({currentAuthPage:'login'});
    }
 }
 
    render(){
        return(
            <>
        {this.state.showAuth?(<Modal show={this.state.showModal} close={this.closeModal.bind(this)} comp={this.state.currentAuthPage}><AuthPage pageType={this.state.currentAuthPage} swapAuthPage={this.swapAuthPage.bind(this)}></AuthPage></Modal>):null}
        <Nav auth={this.state.auth} clicked={this.ToggleAuthPage.bind(this)}></Nav>
        </>
        )
    }
}
export default Auth;
