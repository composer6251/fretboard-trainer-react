import React from 'react';

import './homepage.styles.scss';

//import MessagingService from '../../api/messaging.service.js';

//TESTING
import HeaderComponent from '../../components/header/header.component';
import Directory from '../../components/directory/directory.component';
import TitleOfPage from '../../components/title-of-page/title-of-page.component';

const HomepageLink = (props) => {

    /****working to add welcome message*****/
    // function getWelcomeMessage(){
    //     MessagingService.getWelcomeMessageServiceBeanPathVariable().then(response => );
    // }
    // function displayWelcomeMessage(){
        
    // }
    return(

    <div>  
        <HeaderComponent currentPage="home"/>
        <TitleOfPage title='Home Page'/>
        
        <div className="welcome-message">
             Welcome back {props.match.params.name}
        </div>
        <div className='homepage'>
            <Directory />
        </div>
    </div>
    );

    
};
export default HomepageLink;