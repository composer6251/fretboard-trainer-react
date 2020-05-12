class AuthenticationService {
    
    storeAuthenticationSessionStorage(username){
        sessionStorage.setItem("authenticated" , username);
    }

    removeAuthenticationSessionStorage(username){
        console.log("In Remove Session Storage");
        sessionStorage.removeItem("authenticated", username);
    }
    
    isUserLoggedIn(){
        let loggedIn = sessionStorage.getItem("authenticated");
        
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