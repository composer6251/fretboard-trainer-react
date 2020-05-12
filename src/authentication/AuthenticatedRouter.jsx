import React from 'react';


import AuthenticationService from './AuthenticationService';
import { Route, Redirect } from 'react-router-dom';
import { Component } from 'react';

class AuthenticatedRouter extends Component{

    render(){
        if(AuthenticationService.isUserLoggedIn()){
            return <Route {...this.props} />
        }
        else {
            return <Redirect to="/login" />
        } 
    }
}

export default AuthenticatedRouter;