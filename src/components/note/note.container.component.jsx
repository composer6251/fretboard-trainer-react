import React from 'react';

import './note.styles.css';

import NoteImage from '../note/note.image.component';


const NoteContainer = (noteId) => {
    console.log('this.props :>> ', noteId);
    return(
         <div> 
             <h1>{noteId}</h1>
        {/* //className='note-container' 
        //      id= {noteId}
        // >
        //     <NoteImage/>          */}
        </div>   
    )
};

export default NoteContainer;