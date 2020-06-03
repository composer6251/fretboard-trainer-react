import axios from 'axios'

class UsersService{

    getUser(username){
        return axios.get(`http://localhost:8080/users/${username}/userinfo`);
    }
    deleteUser(username, id){
        //console.log(axios.get(`http://localhost:8080/users/${username}/userinfo/${id}`))
        return axios.delete(`http://localhost:8080/users/${username}/userinfo/${id}`);
    }
    addUser(email, password){
        console.log(email, password);
        return axios.post(`http://localhost:8080/users/${email}/addUser/${password}`)
    }
    getUsers(){
        return axios.get(`http://localhost:8080/users`)
    }
}

export default new UsersService();