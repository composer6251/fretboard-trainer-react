import axios from 'axios'

class UsersService{

    getUser(username){
        return axios.get(`http://localhost:8080/users/${username}/userinfo`);
    }
    deleteUser(username, id){
        return axios.delete(`http://localhost:8080/users/${username}/userinfo/${id}`);
    }
    addUser(user){

        let username = "David";
        let password = "Test";

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);
        
        return axios.get(`http://localhost:8080/users/addUser`, user
        ,
        {
           headers : {
              authorization : basicAuthHeader
           }
        }
        );
       // return axios.post(`http://localhost:8080/users/addUser`, user)
    }

    getUsers(){
        return axios.get(`http://localhost:8080/users`)
    }
    // updateUser(email, password){
    //     return axios.put(`http://localhost:8080/users/${email}/addUser/${password}`)
    // }
}

export default new UsersService();