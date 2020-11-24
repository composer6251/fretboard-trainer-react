import React from 'react';

import WholeNote from '../../images/whole-note.png';
import './note.positions.css';

const NoteImage = (noteId) => {
    //todo: figure out how to pass props.id to generate note position
    // Use state?
    console.log('props.noteId :>> ', noteId);
    return(
        <div>
            <img src={WholeNote} alt="note" id={noteId} />          
        </div>   
    )
};

export default NoteImage;