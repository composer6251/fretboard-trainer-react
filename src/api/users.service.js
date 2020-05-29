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
        return axios.put(`http://localhost:8080/users/${email}/addUser/${password}`)
    }
}

export default new UsersService();