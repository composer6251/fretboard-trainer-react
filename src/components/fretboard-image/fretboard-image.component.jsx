import React from 'react';

import './fretboard-image.styles.css';
import FretboardImage from '../../images/fretboardSized.png';


const FretboardImageComponent = () => (
    <div>
        <img src={FretboardImage} alt="Fretboard" className="fretboard-image"/>
    </div>
)
export default FretboardImageComponent;