import React, {Component} from 'react';

import UserServiceInterface from '../../api-interfaces/userServiceInterface';



class TestComponent extends Component {
    constructor(props){
        super(props);

        // this.getUser = this.getUser.bind(this);
        // this.handleErrorResponse = this.handleErrorResponse.bind(this);
        // this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);

        this.state = {
            
            user  : [],
            errorMessage : ''
         } 
    }
    componentDidMount(){
        //this.getUser();
        let userToSet = UserServiceInterface.getUsers();
        console.log("userToSet" + userToSet);
        this.setState({ user :  userToSet});
        console.log(this.state);
    }
    // getUsers(){
    //     UserService.getUsers()
    //     .then(
    //         response => 
    //         this.handleSuccessfulResponse(response)
    //         //console.log('response :>> ', response)
    //         )
    //         .catch(error => this.handleErrorResponse(error));
    // }

    // getUser(){
    //     let user = AuthenticationService.getLoggedInUser();

    //      UserService.getUser(user)
    //      .then(
    //         response => 
    //         this.handleSuccessfulResponse(response)
    //         )
    //     .catch(error => this.handleErrorResponse(error))
    // }
    // deleteUser(username, id){

    //     UserService.deleteUser(username, id)
    //     .then(response => {
    //         console.log(response)
    //         this.getUser();
    //         }
    //     )

    // }
    // handleSuccessfulResponse(response){

    //     this.setState({user : response.data})
    // }
    // handleErrorResponse(error){
    //     let errorMessage = '';

    //     if(error.message){
    //         errorMessage += error.message;
    //     }
    //     if(error.response && error.response.data){
    //         errorMessage += error.response.data.message;
    //     }
    //     this.setState({message: errorMessage})
    // }
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
                                    <th>Email</th>
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
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
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