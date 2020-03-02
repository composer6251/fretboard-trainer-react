import React from 'react';


import './title-of-page.styles.scss';
import TestImage from '../../images/logo192.png';

const TitleOfPage = ( {title, image} ) => (
    <div id='page-title' 
        style=
           {{backgroundImage: `url(${image})` }}
        >
        <h1 className='page-title-banner-header'>{title}</h1>

    </div>
);

export default TitleOfPage;