import React from 'react';
import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';
import TitleOfPage from '../../components/title-of-page/title-of-page.component';

const Homepage = () => (
<div>
    
    <div className='homepage'>
        <TitleOfPage />
        <Directory />
    </div>
</div>
);

export default Homepage;