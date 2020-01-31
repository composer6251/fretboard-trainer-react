import React from 'react';
import TitleOfPage from '../../components/title-of-page/title-of-page.component';

import './fretboard-trainer.styles.scss';
import '../../global-styles/global.styles.scss';



const FretboardPage = () => (

<div>
    <div className='title-page'>
        <TitleOfPage />
    </div>
    <div id='fretboard'>
        
        <h1>Fretboard</h1>
        
    </div>
</div>
);

export default FretboardPage;