import React from 'react';

import '../../global-styles/global.styles.scss';
import './homepage.styles.scss';

//import HeaderComponent from '../../components/header/header.component';

//TESTING
import HeaderComponent from '../../Test/header.component';
import Directory from '../../components/directory/directory.component';
import TitleOfPage from '../../components/title-of-page/title-of-page.component';

const HomepageLink = (props) => {
    console.log(props)
    return(

    <div>  
        <HeaderComponent/>
        <TitleOfPage title='Home Page'/>
        
        <div className="welcome-message">
             Welcome back {/*{this.props.match.params.name} */}
        </div>
        <div className='homepage'>
            <Directory />
        </div>
    </div>
    );
};
export default HomepageLink;