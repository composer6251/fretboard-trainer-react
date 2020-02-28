import React from 'react';
import { Link  } from 'react-router-dom';

import TitleOfPage from '../../components/title-of-page/title-of-page.component';
import StaffComponent from '../../components/staff/staff.component';
import HomepageLink from '../../components/homepage/homepage-link.component'
import Note from '../../components/note/note.component';

import './fretboard-trainer.styles.scss';
import '../../global-styles/global.styles.scss';
import '../../components/homepage/homepage-link.styles.scss';


const FretboardPage = () => (

<div>
    <div>
        <HomepageLink id='homepage-link'/>
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