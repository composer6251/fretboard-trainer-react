import React from 'react';

import './treble-clef.styles.css';

import TrebleClef from '../../images/treble-clef.png';

const TrebleClefComponent = () => {
    return(
        <div>
            <img src={TrebleClef} alt="Treble-Clef" className="treble-clef"/>
        </div>
    )
}

export default TrebleClefComponent;