import React, {Component} from 'react';

import './login.styles.css';

import HomepageLink from '../homepage/homepage.component';

export default class LoginComponent extends Component{
    constructor(){
        super();
        this.state = {
            username: "David",
            password: "test",
            loginFailed: false,
            loginSuccessful: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginOnclick = this.loginOnclick.bind(this);
    }
    
    
    //handle login un/pw input changes
    handleChange(event){
        console.log(event.target.value);
        this.setState({[event.target.name] : event.target.value});
    }
    //validate user info onClick
    loginOnclick(event){
        if(this.state.username === "David" && this.state.password === "test"){
            this.props.history.push(`/homepage`); //removed /${this.state.username}
        }
        else{
            this.setState({loginFailed : true});
            this.setState({loginSuccessful : false});
        } 
    }
    
    
    render(){
        return(
            <div>
                <h1 className="login-page-h1">Welcome to the Music Training Application!</h1>
                {this.state.loginFailed && <div>Invalid Credentials</div>}
                {this.state.loginSuccessful && <div>Login Successful!</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="loginButton" onClick={this.loginOnclick}>Login</button>
            </div>
            
        )
    }
}
