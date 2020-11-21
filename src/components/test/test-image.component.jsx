import React from 'react';

import "./test-image.css";
import TrebleClef from '../../images/treble-clef.png';


const TestImageComponent = () => (
    <div>
        <img src={TrebleClef} alt="Fretboard" className="test-image"/>
    </div>
)
export default TestImageComponent;