import React from 'react';

import TestImage from '../../images/logo192.png';

const TitleOfPage = ( {title, image} ) => (
    <div id='page-title' 
        style=
           {{backgroundImage: `url(${image})` }}
        >

        <h1>{title}</h1>

    </div>
);

export default TitleOfPage;