class AuthenticationService {
    
    storeAuthenticationSessionStorage(username){
        sessionStorage.setItem("authenticated" , username);
    }

    removeAuthenticationSessionStorage(username){
        sessionStorage.removeItem(username);
    }
    
    isUserLoggedIn(username){
        let loggedIn = sessionStorage.getItem(username);
        if(loggedIn === null) return false
            return true 
    }
}

export default new AuthenticationService();