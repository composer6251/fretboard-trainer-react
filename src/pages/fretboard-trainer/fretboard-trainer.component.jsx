import React from 'react';

import './fretboard-trainer.styles.scss';
import '../../globals/global-styles/bootstrap.css';
import '../../components/header/header.styles.scss';

import TrebleClefComponent from '../../components/clef/treble-clef.component';
import FretboardImageComponent from '../../components/fretboard-image/fretboard-image.component';

import TitleOfPage from '../../components/title-of-page/title-of-page.component';
import StaffComponent from '../../components/staff/staff.component';
import HeaderComponent from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';


const FretboardPage = () => (

<div>
    <div>
        <HeaderComponent id='homepage-link'/>
    </div>
    <div className='title-page'>
        <TitleOfPage title='Fretboard Trainer'/>
    </div>
    <div id='fretboard'>
        <StaffComponent>

        </StaffComponent>
    </div>
    <div>
        <FretboardImageComponent/>
    </div>
    <div>
        <Sidebar/>
    </div>
</div>
);

export default FretboardPage;