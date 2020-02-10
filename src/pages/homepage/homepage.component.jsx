import React from 'react';
import Directory from '../../components/directory/directory.component';

import '../../global-styles/global.styles.scss';
import './homepage.styles.scss';

import TitleOfPage from '../../components/title-of-page/title-of-page.component';

const Homepage = () => (
<div>
    <div className='title-page'>
        <TitleOfPage title='Home page'/>
    </div>
    <div className='homepage'>
        
        <Directory />
    </div>
</div>
);

export default Homepage;