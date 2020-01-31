import React from 'react';

import TestImage from '../../images/logo192.png';

const TitleOfPage = (props) => (
    <div id='page-title' 
        style=
           {{backgroundImage: `url(${TestImage})` }}>

        <h1>Title</h1>

    </div>
);

export default TitleOfPage;