import React, {Component} from 'react';

import './login.styles.css';

import HomepageLink from '../homepage/homepage.component';

export default class LoginComponent extends Component{
    constructor(){
        super();
        this.state = {
            username: "test",
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
        if(this.state.username === "test" && this.state.password === "test"){
            this.setState({loginFailed : false});
            this.setState({loginSuccessful : true});
        }
        else{
            this.setState({loginFailed : true});
            this.setState({loginSuccessful : false});
        } 
    }
    render(){
        return(
            <div>
                <ShowFailureMessage loginFailed={this.state.loginFailed} />
                <ShowSuccessMessage loginSuccessful={this.state.loginSuccessful} />
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="loginButton" onClick={this.loginOnclick}>Login</button>
            </div>
            
        )
    }
}

const ShowFailureMessage = (props) => {
    if(props.loginFailed){
        return <div>Invalid Credentials</div>
    }
    return null;
}

const ShowSuccessMessage = (props) => {
    if(props.loginSuccessful){
        return <div>Login Successful!</div>
    }
    return null;
}
