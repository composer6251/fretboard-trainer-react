import React, {Component} from 'react';

import DBService from '../../api/db.service.js';
import AuthenticationService from '../../authentication/AuthenticationService.js';

class TestComponent extends Component {
    constructor(props){
        super(props)

       // this.getLoggedInUser = this.getLoggedInUser.bind(this);
        this.handleErrorResponse = this.handleErrorResponse.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse(this);
        this.testMethod = this.testMethod(this);

        this.state = {
            
            user  : {
                name : '',
                password : '',
                level : null
            },
  
            errorMessage : ''

         }
    }
    
    render(){
        return(
            <>
                <div>
                    <button>Get users</button>
                    <button >Get logged in User</button>
                    <button>Update User</button>
                    <button>Delete User</button>
                </div>
                {/* <div>
                    {/* {this.state.user.name}
                    {this.state.errorMessage} }
                </div> */}
            </>
        )
    }

    getLoggedInUser(){
        let user = AuthenticationService.getLoggedInUser();
        console.log("Logged on load")

        this.testMethod();

        DBService.getUser(user)
        .then(response => console.log(response.data));

        //  DBService.getUser(user)
        //  .then(
        //     response => 
        //     this.handleSuccessfulResponse(response)
        //     )
        
        //.catch(error => this.handleErrorResponse(error))
    }
    componentDidMount(){
        let user = AuthenticationService.getLoggedInUser();
        DBService.getUser(user)
        .then(
            response => (
            this.setState({user : response.data})
            )
        )
        //console.log(user)
        //.catch(error => this.handleErrorResponse(error))
    }

    handleSuccessfulResponse(response){
        console.log("HandleResponse")
        this.setState({user : response.data})
    }
    handleErrorResponse(error){
        this.setState({errorMessage : error.response.data})
    }
    testMethod(){
        console.log("test method")
    }

}
export default TestComponent;