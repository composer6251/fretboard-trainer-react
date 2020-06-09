import axios from 'axios';

class MessagingService{

    executedMessagingService(){

       return axios.get('http://localhost:8080/messagingservice');
    }
    executedMessagingServiceBean(){
         let username = "David";
         let password = "test";

         let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);
         
         return axios.get('http://localhost:8080/messagingservicebean'
         ,
         {
            headers : {
               'Authorization' : basicAuthHeader
            }
         }
         );
     }


   //   executedMessagingServiceBeanPathVariable(){
       
   //    console.log("Executed Messaging Service");
   //    return axios.get('http://localhost:8080/messagingServiceBean/path-variable/David');
   // }
   getWelcomeMessageServiceBeanPathVariable(){
      console.log("Executed welcomeMessageService");
   }
}

export default new MessagingService();