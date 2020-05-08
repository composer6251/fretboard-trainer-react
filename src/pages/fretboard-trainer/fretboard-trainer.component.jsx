import React from 'react';

import TitleOfPage from '../../components/title-of-page/title-of-page.component';
import StaffComponent from '../../components/staff/staff.component';
import HeaderComponent from '../../components/header/header.component';
import Note from '../../components/note/note.component';

import './fretboard-trainer.styles.scss';
import '../../global-styles/global.styles.scss';
import '../../components/header/header.styles.scss';


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
                <Note /> 
        </StaffComponent>
    </div>
</div>
);

export default FretboardPage;