import React from 'react';

import TitleOfPage from '../../components/title-of-page/title-of-page.component';
import HomepageLink from '../../components/homepage/homepage-link.component';

import StaffImage from '../../images/staff-stretch.png';

import '../../global-styles/global.styles.scss';
import './learn-theory.styles.scss';


const LearnTheory = () => (

<div>
    <div>
        <HomepageLink id='homepage-link'/>
    </div>
    <div 
    className='title-page'
    style={{ backgroundImage: `url(${StaffImage})`}}
    >
        <TitleOfPage title='Learn Theory' />
    </div>

    <div>
        <h1 className='learn-theory-header-text'>Learn Theory</h1> 
    </div>
</div> 
);

export default LearnTheory;