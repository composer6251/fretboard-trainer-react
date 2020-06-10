

import UserService from '../api/users.service.js';
import AuthenticationService from '../authentication/AuthenticationService.js';


/******
 * This class is the middle man between front end User calls and userService api calls to backend
 */

class UserServiceInterface{

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         users : [],
    //         user : []
    //     }
    //     this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    // }

    // getUsersPromise = new Promise((resolve, reject) =>{
    //     UserService.getUsers();
    // });
    
    // getUsersPromise.then(response => return response.data);

    async getUsersAsync(){
        //let user;
        
        await UserService.getUsers()
        .then(
            response => {
                console.log('response.data :>> ', response.data);
                return response.data
            }
        )
        
        //return user;
    }

     getUsers(){
       UserService.getUsers()
        .then(
            response => {
                console.log('response.data :>> ', response.data);
                //this.handleSuccessfulResponse(response)
                
                if(response.data === undefined){
                    
                }

                return response.data;
            }
            
            )
            .catch(error => {
                return error});
    }

    getUser(){
        let user = AuthenticationService.getLoggedInUser();

         UserService.getUser(user)
         .then(
            response => {
                console.log('response.data :>> ', response.data);
                return response.data
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
        
        this.state({user : "Test"})
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