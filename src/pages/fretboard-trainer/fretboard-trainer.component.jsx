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
import TestImageComponent from '../../components/test/test-image.component';


const FretboardPage = () => {
    return(
        <div id="fixed-page">
            <div align="left" className="sidebar">
                <Sidebar className="sidebar"/>
            </div>
            <div className='title-page'>
                <TitleOfPage title='Fretboard Trainer'/>
            </div>
            <div align="right" className="staff-component-container">
                <StaffComponent />
            </div>
            <div align="right">
                <FretboardImageComponent/>
            </div>
        </div>
    )
}; 

export default FretboardPage;