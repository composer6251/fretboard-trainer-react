import React from 'react';

import WholeNote from '../../images/whole-note.png';

const NoteImage = (props) => {
    return(
        <div>
            <img src={WholeNote} alt="note"/>          
        </div>   
    )
};

export default NoteImage;