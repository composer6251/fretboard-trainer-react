import { AUTHENTICATED } from '../globals/global-const/constants';

class AuthenticationService {
    
    storeAuthenticationSessionStorage(authenticated, username){

        sessionStorage.setItem(authenticated, username);
    }

    removeAuthenticationSessionStorage(){
        sessionStorage.removeItem(AUTHENTICATED);
    }
    
    isUserLoggedIn(){
        let loggedIn = sessionStorage.getItem("Authenticated");
        console.log("Authenticated");
        
        if(loggedIn === null) {
            console.log("loggedIn is False")
            return false}
        else{ 
            console.log("loggedIn is True")
            return true 
        }
    }
}

export default new AuthenticationService();