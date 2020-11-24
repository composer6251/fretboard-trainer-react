import React, {Component} from 'react';

import './login.styles.css';
import '../../globals/global-styles/bootstrap.css';

import AuthenticationService from '../../authentication/AuthenticationService.js';
import MessagingService from '../../api/messaging.service.js';

import { GUEST_USERNAME } from '../../globals/global-const/constants';
import NewUserFormComponent from '../../components/forms/new-user-form.component';
import usersService from '../../api/users.service';

export default class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "dfennell28@hotmail.com",
            password: "test",
            loginFailed: false,
            loginSuccessful: false,
            message: '',
            responseJson: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginOnclick = this.loginOnclick.bind(this);
        this.guestOnclick = this.guestOnclick.bind(this);
        // this.messagingServiceOnClick = this.messagingServiceOnClick.bind(this);
        // this.messagingServiceBeanOnClick = this.messagingServiceBeanOnClick.bind(this);
    }
    /************TODOS*********
     * Create error message display service
     * To handle response entity with error message
     */
    //handle login un/pw input changes
    handleChange(event){
        console.log(event.target.name + "=" + event.target.value);
        this.setState({[event.target.name] : event.target.value});
    }

    //validate user info onClick
    loginOnclick(){
        usersService.validateUserLogin(this.state.username, this.state.password)
            .then(
                (response) => {
                    console.log('validatingUserLogin successful. User found');
                    console.log('response :>> ', response);
                    this.handleSuccessfulResponse(response);
                }
            )
            .catch(
                () => {
                    console.log('validatingUserLogin failed. User NOT found');
                    this.setState({loginFailed : true});
                    this.setState({loginSuccessful : false});
                }
            )
    }
    handleSuccessfulResponse(response){
        this.setState({loginFailed : false});
        this.setState({loginSuccessful : true});
        AuthenticationService.storeAuthenticationSessionStorage(response.data.username);
        this.props.history.push(`/homepage`); ///${response.data.username}
    }
    guestOnclick(){
        AuthenticationService.storeAuthenticationSessionStorage(GUEST_USERNAME);
        this.props.history.push(`/homepage`);
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
                    <h2>Continue as Guest Without Signing In</h2>
                </div>
                <button className="login-button btn" onClick={this.guestOnclick}>Continue As Guest</button>
                {/* <button className="login-button btn" onClick={this.messagingServiceOnClick}>Messaging Service</button>
                <button className="login-button btn" onClick={this.messagingServiceBeanOnClick}>Messaging Service Bean</button> */}

                <div>{this.state.message}</div>
            </div>
            
        )
    }
}
 // messagingServiceOnClick(){
    //     MessagingService.executedMessagingService()
    //     .then(response => this.handleSuccessfulMessagingService(response))
    //     .catch( error => this.handleErrorMessagingService(error));
    // }
    // messagingServiceBeanOnClick(){
    //       MessagingService.executedMessagingServiceBean()
    //      .then(response => this.handleSuccessfulMessagingService(response));
    // }
    // handleSuccessfulMessagingService(response){
    //     this.setState({message: response.data.message})
    // }

    // handleErrorMessagingService(error){
    //     console.log(error);
    //     let errorMessage = '';

    //     if(error.message){
    //         errorMessage += error.message;
    //     }
    //     if(error.response && error.response.data){
    //         errorMessage += error.response.data.message;
    //     }
    //     this.setState({message: errorMessage})
    // }
    


        // AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
        // .then(
        //     (response) => {
        //         AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token);
        //         this.props.history.push(`/homepage`); //removed /${this.state.username}
        //     }
        // )
        // .catch(
        //     () => {
        //         this.setState({loginFailed : true});
        //         this.setState({loginSuccessful : false});
        //     }
        // )

                

        // AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
        //     .then(
        //         (response) => {
        //             AuthenticationService.storeAuthenticationSessionStorage(this.state.username, this.state.password);
        //             usersService.validateUserLogin(this.state.username, this.state.password);
        //             this.handleResponse(response);
        //             this.props.history.push(`/homepage`); //removed /${this.state.username}
        //         }
        //     )
        //     .catch(
        //         () => {
        //             this.setState({loginFailed : true});
        //             this.setState({loginSuccessful : false});
        //         }
        //     )
