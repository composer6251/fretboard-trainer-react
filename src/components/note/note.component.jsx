import React from 'react';

import './note.styles.css';

import WholeNote from '../../images/whole-note.png';


const Note = () => {
    return(
        <div>
            <img src={WholeNote} alt="note" className="note-image" />          
        </div>   
    )
};

export default Note;