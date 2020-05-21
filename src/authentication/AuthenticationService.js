import { AUTHENTICATED } from '../globals/global-const/constants';

class AuthenticationService {
    
    storeAuthenticationSessionStorage(username){

        sessionStorage.setItem(AUTHENTICATED, username);
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
}

export default new AuthenticationService();