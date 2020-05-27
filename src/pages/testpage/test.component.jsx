import React, {Component} from 'react';

import DBService from '../../api/db.service.js';
import AuthenticationService from '../../authentication/AuthenticationService.js';


class TestComponent extends Component {
    constructor(props){
        super(props);

        this.getUsers = this.getUsers.bind(this);
        this.handleErrorResponse = this.handleErrorResponse.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);

        this.state = {
            
            user  : [


            ],

            errorMessage : ''

         } 
    }
    componentDidMount(){
        this.getUsers();

    }
    getUsers(){
        let user = AuthenticationService.getLoggedInUser();

         DBService.getUser(user)
         .then(
            response => 
            this.handleSuccessfulResponse(response)
            )
        .catch(error => this.handleErrorResponse(error))
    }
    deleteUser(username, id){
        console.log("in deleteUser")
        DBService.deleteUser(username, id)
        .then(response => {
            console.log(response)
            this.getUsers();
            }
        )

    }
    handleSuccessfulResponse(response){
        //console.log(response);
         
        this.setState({user : response.data})
    }
    handleErrorResponse(error){
        //this.setState({errorMessage : error.response.data})
    }
    render(){
        return(
            
                <div>
                    <button>Get users</button>
                    <button>Get logged in User</button>
                    <button>Update User</button>
                    
                    <br/>
                     <div><table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Level</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.user.map(
                                        user =>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.password}</td>
                                            <td>{user.currentLevel}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteUser(user.username, user.id)}>Delete User</button></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                         </table>
                         </div>
                    
                </div>
        )
    }


}
export default TestComponent;