import axios from 'axios'

class UsersService{

    getUser(username){
        return axios.get(`http://localhost:8080/users/${username}/userinfo`);
    }
    deleteUser(username, id){
        //console.log(axios.get(`http://localhost:8080/users/${username}/userinfo/${id}`))
        return axios.delete(`http://localhost:8080/users/${username}/userinfo/${id}`);
    }
<<<<<<< HEAD
    addUser(user){
        return axios.post(`http://localhost:8080/users/addUser`, user)
=======
    addUser(email, password){
        console.log(email, password);
        return axios.post(`http://localhost:8080/users/${email}/addUser/${password}`)
    }
    getUsers(){
        return axios.get(`http://localhost:8080/users`)
>>>>>>> d27c47c89160c0a4bac087be2aa768b1a66a9c4a
    }
    // updateUser(email, password){
    //     return axios.put(`http://localhost:8080/users/${email}/addUser/${password}`)
    // }
}

export default new UsersService();