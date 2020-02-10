import React from 'react';
import TitleOfPage from '../../components/title-of-page/title-of-page.component';

import './fretboard-trainer.styles.scss';
import '../../global-styles/global.styles.scss';
import StaffComponent from '../../components/staff/staff.component';



const FretboardPage = () => (

<div>
    <div className='title-page'>
        <TitleOfPage title='Fretboard Trainer'/>
    </div>
    <div id='fretboard'>
        
        <h1>Fretboard</h1>
        <StaffComponent></StaffComponent>
        
    </div>
</div>
);

export default FretboardPage;