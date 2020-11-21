import React from 'react';

import WholeNote from '../../images/whole-note.png';

const NoteImage = () => {
    return(
        <div align="center" className="note-image">
            <img src={WholeNote} alt="note"/>          
        </div>   
    )
};

export default NoteImage;