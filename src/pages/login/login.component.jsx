import React, {Component} from 'react';
import HomepageLink from '../homepage/homepage.component';

export default class LoginComponent extends Component{
    constructor(){
        super();
        this.state = {
            username: "David Fennell",
            password: "password"
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUserNameChange(event){
        console.log(event.target.value);
        this.setState({username: event.target.value});
    }
    handlePasswordChange(event){
        console.log(event.target.value);
        this.setState({password: event.target.value});
    }



    render(){
        return(
            <div>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUserNameChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                <button>Login</button>
            </div>
            
        )
    }
}

