import React from 'react';
import { Link } from 'react-router-dom';

import TitleOfPage from '../../components/title-of-page/title-of-page.component';
import HomepageLink from '../homepage/homepage.component';

import '../../global-styles/global.styles.scss';


const LearnTheory = () => (

<div>
    <div>
        {/* <HomepageLink id='homepage-link'/> */}
    </div>
    <div className='title-page'>
        <Link to='/'>Home</Link>
        <TitleOfPage title='Learn Theory' image=''/>
    </div>

    <div>
        <h1>Learn Theory</h1> 
    </div>
</div> 
);

export default LearnTheory;