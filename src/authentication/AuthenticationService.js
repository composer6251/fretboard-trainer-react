import axios from 'axios';

import { AUTHENTICATED } from '../globals/global-const/constants';

class AuthenticationService {

    executeBasicAuthenticationService(username, password){
        return axios.get(`http://localhost:8080/basicauth`, 
            {headers: {authorization: this.createBasicAuthHeader(username, password)}})
    }

    createBasicAuthHeader(username, password){
        return 'Basic ' + window.btoa(username + ":" + password);
    }
    
    storeAuthenticationSessionStorage(username, password){

        sessionStorage.setItem(AUTHENTICATED, username);
        
        this.setupAxiosInterceptors(this.createBasicAuthHeader(username, password));
    }

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
            return false}
        else{ 
            return true 
        }
    }

    setupAxiosInterceptors(basicAuthHeader){

        axios.interceptors.request.use(
            
            (config) => {
                
                if(this.isUserLoggedIn()){
                    config.headers.authorization = basicAuthHeader;
                }
                console.log('config :>> ', config);
                return config;
                
            }
        )
    }
}

export default new AuthenticationService();