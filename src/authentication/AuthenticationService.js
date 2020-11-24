import axios from 'axios';

import { AUTHENTICATED } from '../globals/global-const/constants';

class AuthenticationService {

    executeBasicAuthenticationService(username, password){
        return axios.get(`http://localhost:8080/basicauth`, 
            {headers: {authorization: this.createBasicAuthToken(username, password)}})
    }

    // /****JWT not working**** */
    // executeJwtAuthenticationService(username, password) {
    //     console.log('username :>> ', username);
    //     return axios.post('http://localhost:8080/authenticate', {
    //         username,
    //         password
    //     })
    // }

    createBasicAuthToken(username, password){
        console.log('username, password :>> ', username, password);
        console.log('Auth request :>> ', 'Basic ' + window.btoa(username + ":" + password));
        return 'Basic ' + window.btoa(username + ":" + password);
    }
    
    lookupUser(userId){
        console.log('LookupUser :>> ');
        return axios.get(`http://localhost:8080/users/authenticate/${userId}`);
    }

    createUser(userId){
        console.log('LookupUser :>> ');
        return axios.get(`http://localhost:8080/users/authenticate/${userId}`);
    }
    storeAuthenticationSessionStorage(username, password){
        sessionStorage.setItem(AUTHENTICATED, username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
    }

    // registerSuccessfulLoginForJwt(username,token) {
    //     sessionStorage.setItem(AUTHENTICATED, username)
    //     this.setupAxiosInterceptors(this.createJWTToken(token))
    // }

    // createJWTToken(token) {
    //     return 'Bearer ' +  token
    // }

    removeAuthenticationSessionStorage(){
        sessionStorage.removeItem(AUTHENTICATED);
    }
    getLoggedInUser(){
        let user = sessionStorage.getItem(AUTHENTICATED);
        if(user === null){
            return false
        }
        else {
            
            return user
        }
    }
    
    isUserLoggedIn(){
        let loggedIn = sessionStorage.getItem("Authenticated");

        if(loggedIn === null) {
            return false
        }
        return true 
    }

    setupAxiosInterceptors(token){

        axios.interceptors.request.use(
            
            (config) => {
                
                if(this.isUserLoggedIn()){
                    config.headers.authorization = token;
                }
                return config;
            }
        )
    }
}

export default new AuthenticationService();