import axios from 'axios'

class UsersService{

    getUser(username){
        let password = "test";

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);
        
        return axios.get(`http://localhost:8080/users/${username}/userinfo`
        ,
        {
            headers : {
                'Authorization' : basicAuthHeader
            }
        }
        );
    }
    deleteUser(username, id){

        let password = "test";

        let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);

        return axios.delete(`http://localhost:8080/users/${username}/userinfo/${id}`
        ,
        {
            headers : {
                'Authorization' : basicAuthHeader
            }
        }
        );
    }
    addUser(user){

        let username = "David";
        let password = "test";

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);

        return axios.get(`http://localhost:8080/users/addUser`, user
        ,
        {
           headers : {
              'Authorization' : basicAuthHeader
           }
        }
        );


       // return axios.post(`http://localhost:8080/users/addUser`, user)
    }

    getUsers(){

        let username = "David";
        let password = "test";

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);

        return axios.get(`http://localhost:8080/users`
        ,
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