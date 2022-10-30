import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Component } from 'react';

import AuthenticationService from './AuthenticationService';



class AuthenticatedRouter extends Component{

    render(){
        if(AuthenticationService.isUserLoggedIn()){
            return <Route {...this.props} />
        }
        else {
            // return <Navigate to="/login" />
        } 
    }
}

export default AuthenticatedRouter;