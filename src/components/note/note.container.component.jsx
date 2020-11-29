import React from 'react';

import './note.styles.css';

import NoteImage from '../note/note.image.component';


const NoteContainer = () => {
    // console.log('this.props :>> ', noteId);
    var style = "D4";
    style = "C4";
    return(
         <div className="note-container" align="center" id={style}>
             <NoteImage/>         
        </div>   
    )
};

export default NoteContainer;