import axios from 'axios';

class MessagingService{

    executedMessagingService(){
       
       console.log("Executed Messaging Service");
       return axios.get('http://localhost:8080/messagingservice');
    }
}

export default new MessagingService();