import React from 'react';

import './note.styles.css';

import NoteImage from '../note/note.image.component';


const NoteContainer = () => {
    // console.log('this.props :>> ', noteId);
    return(
         <div className="note-container" align="center">
             <NoteImage/>         
        </div>   
    )
};

export default NoteContainer;