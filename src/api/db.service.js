import axios from 'axios'

class DbService{

    getUser(username){
        return axios.get(`http://localhost:8080/users/${username}/userinfo`);
    }
    deleteUser(username, id){
        return axios.get(`http://localhost:8080/users/${username}/userinfo/${id}`);
    }
}

export default new DbService();