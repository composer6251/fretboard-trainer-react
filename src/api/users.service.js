import axios from 'axios'

class UsersService{

    getUser(username){
        // let password = "test";

        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);
        
        return axios.get(`http://localhost:8080/users/${username}/userinfo`
        // ,
        // {
        //     headers : {
        //         'Authorization' : basicAuthHeader
        //     }
        // }
        );
    }
    deleteUser(username, id){

        return axios.delete(`http://localhost:8080/users/${username}/userinfo/${id}`);
    }
    addUser(email, password, username){
        console.log('email, password, username :>> ', email, password, username);
        return axios.post(`http://localhost:8080/users/registerNewUser/${email}/${password}/${username}`);
    }
    validateUserLogin(username, password){
        console.log('validatingUserLoginAPI');
        return axios.get(`http://localhost:8080/users/validate-user/${username}/${password}`);
    }
    getUsers(){

        let username = "David"
        let password = "test";

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);

        return axios.get(`http://localhost:8080/users`,
        {
            headers : {
                'Authorization' : basicAuthHeader
            }
        }
        );
        
    }
    // updateUser(email, password){
    //     return axios.put(`http://localhost:8080/users/${email}/addUser/${password}`)
    // }
}

export default new UsersService();