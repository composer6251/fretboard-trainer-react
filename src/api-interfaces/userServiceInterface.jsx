import React from 'react';
import { Component } from 'react';

import UserService from '../api/users.service.js';
import AuthenticationService from '../authentication/AuthenticationService.js';


/******
 * This class is the middle man between front end User calls and userService api calls to backend
 */

class UserServiceInterface extends Component{

    constructor(props){
        super(props);
        this.state = {
            users : [],
            user : []
        }
    }

    getUsers(){
        UserService.getUsers()
        .then(
            response => {
                // return response.data
                // console.log(response.data)
                let user = this.handleSuccessfulResponse(response)
                console.log("user" + user)
                return user;
            }
            
            )
            .catch(error => this.handleErrorResponse(error));
    }

    getUser(){
        let user = AuthenticationService.getLoggedInUser();

         UserService.getUser(user)
         .then(
            response => {
                return response
            }
            
            //this.handleSuccessfulResponse(response)
            )
        .catch(error => this.handleErrorResponse(error))
    }
    deleteUser(username, id){

        UserService.deleteUser(username, id)
        .then(response => {
            console.log(response)
            this.getUser();
            }
        )
    }
    handleSuccessfulResponse(response){

        this.setState({user : response.data})
    }
    handleErrorResponse(error){
        let errorMessage = '';

        if(error.message){
            errorMessage += error.message;
        }
        if(error.response && error.response.data){
            errorMessage += error.response.data.message;
        }
        this.setState({message: errorMessage})
    }
}

export default new UserServiceInterface();