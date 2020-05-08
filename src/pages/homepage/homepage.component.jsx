import React from 'react';

import '../../global-styles/global.styles.scss';
import './homepage.styles.scss';

import HeaderComponent from '../../components/header/header.component';
import Directory from '../../components/directory/directory.component';
import TitleOfPage from '../../components/title-of-page/title-of-page.component';

const HomepageLink = (props) => {
    console.log(props)
    return(

    <div>
        <div className='title-page'>
            <HeaderComponent/>
            <TitleOfPage title='Home page'/>
        </div>
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