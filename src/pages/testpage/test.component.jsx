import React, {Component} from 'react';

import DBService from '../../api/db.service.js';
import AuthenticationService from '../../authentication/AuthenticationService.js';

class TestComponent extends Component {
    constructor(props){
        super(props);

        this.getLoggedInUser = this.getLoggedInUser.bind(this);
        this.handleErrorResponse = this.handleErrorResponse.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);

        this.state = {
            
            user  : [


            ],

            errorMessage : ''

         }
    }
    
    render(){
        return(
            
                <div>
                    <button>Get users</button>
                    <button onClick={this.getLoggedInUser}>Get logged in User</button>
                    <button>Update User</button>
                    <button>Delete User</button>
                    <br/>
                     <div><table className="table">
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.user.map(
                                        user =>
                                        <tr key={user.username}>
                                            <td>{user.username}</td>
                                            <td>{user.password}</td>
                                            <td>{user.level}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                         </table>
                         </div>
                    
                </div>
        )
    }

    getLoggedInUser(){
        let user = AuthenticationService.getLoggedInUser();

         DBService.getUser(user)
         .then(
            response => 
            this.handleSuccessfulResponse(response)
            )
        .catch(error => this.handleErrorResponse(error))
    }
    handleSuccessfulResponse(response){
        //console.log(response);
        // console.log(response.data);


        this.setState({user : response.data})
         console.log(this.state.user.username);
    }
    handleErrorResponse(error){
        //this.setState({errorMessage : error.response.data})
    }
}
export default TestComponent;