import React from 'react';

import './fretboard-trainer.styles.scss';
import '../../globals/global-styles/bootstrap.css';
import '../../components/header/header.styles.scss';
import '../../components/sidebar/sidebar.styles.css';


import FretboardImageComponent from '../../components/fretboard-image/fretboard-image.component';
import TitleOfPage from '../../components/title-of-page/title-of-page.component';
import StaffComponent from '../../components/staff/staff.component';
import HeaderComponent from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';


const FretboardPage = () => {
    return(
        <div id="fixed-page">
            <div className="sidebar">
                <Sidebar className="sidebar"/>
            </div>
            <nav id="sidebar">Sidebar</nav>
            <div>
                <HeaderComponent id='homepage-link'/>
            </div>
            <div className='title-page'>
                <TitleOfPage title='Fretboard Trainer'/>
            </div>
            <div>
                <StaffComponent/>
            </div>
            <div>
                <FretboardImageComponent/>
            </div>
        </div>
        )
};

export default FretboardPage;