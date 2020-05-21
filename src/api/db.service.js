import axios from 'axios'

class DbService{

    getUser(username){
        return axios.get(`http://localhost:8080/users/${username}/userinfo`);
    }
}

export default new DbService();