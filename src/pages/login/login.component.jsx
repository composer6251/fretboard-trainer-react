import React, {Component} from 'react';

import './login.styles.css';
import '../../globals/global-styles/bootstrap.css';

import AuthenticationService from '../../authentication/AuthenticationService.js';
import MessagingService from '../../api/messaging.service.js';

import { GUEST_USERNAME } from '../../globals/global-const/constants';
import NewUserFormComponent from '../../components/forms/new-user-form.component';

export default class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "David",
            password: "test",
            loginFailed: false,
            loginSuccessful: false,
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginOnclick = this.loginOnclick.bind(this);
        this.guestOnclick = this.guestOnclick.bind(this);
        this.messagingServiceOnClick = this.messagingServiceOnClick.bind(this);
        this.messagingServiceBeanOnClick = this.messagingServiceBeanOnClick.bind(this);
    }
    
    //handle login un/pw input changes
    handleChange(event){
        console.log(event.target.name + "=" + event.target.value);
        this.setState({[event.target.name] : event.target.value});
    }
    //validate user info onClick
    loginOnclick(){
        if(this.state.username === "David" && this.state.password === "test"){
            
            AuthenticationService.storeAuthenticationSessionStorage(this.state.username);
            this.props.history.push(`/homepage`); //removed /${this.state.username}
        }
        else{
            this.setState({loginFailed : true});
            this.setState({loginSuccessful : false});
        } 
    }
    guestOnclick(){
        AuthenticationService.storeAuthenticationSessionStorage(GUEST_USERNAME);
        this.props.history.push(`/homepage`);
    }
    
    messagingServiceOnClick(){
        MessagingService.executedMessagingService()
        .then(response => this.handleSuccessfulMessagingService(response));
    }
    messagingServiceBeanOnClick(){
          MessagingService.executedMessagingServiceBean()
         .then(response => this.handleSuccessfulMessagingService(response));
    }
    handleSuccessfulMessagingService(response){
        this.setState({message: response.data.message})
    }
    
    render(){
        return(
            <div>
                <h1 className="login-page-h1">Welcome to the Music Training Application!</h1>
                <br/>
                {this.state.loginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.loginSuccessful && <div>Login Successful!</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="login-button btn" onClick={this.loginOnclick}>Login</button>
                <br/>
                <br/>
                <br/>
                <NewUserFormComponent/>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <h2>Continue as Guest without signing in</h2>
                </div>
                <button className="login-button btn" onClick={this.guestOnclick}>Guest</button>
                <button className="login-button btn" onClick={this.messagingServiceOnClick}>Messaging Service</button>
                <button className="login-button btn" onClick={this.messagingServiceBeanOnClick}>Messaging Service Bean</button>

                <div>{this.state.message}</div>
            </div>
            
        )
    }
}
