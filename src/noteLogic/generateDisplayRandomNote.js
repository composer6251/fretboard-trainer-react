import React, { Component } from 'react';

import NoteContainer from '../components/note/note.container.component';
import Note from '../components/note/note.image.component';
import {C4, D4} from '../CONSTANTS/noteConstants'

class generateDisplayRandomNote extends Component{
    // method to set note position
    displayRandomNote(){
        var noteId = this.generateRandomNote();
        console.log('noteId :>> ', noteId);
        return(
            <div>
                <NoteContainer noteId={noteId} id={noteId}/>
                <h1>TESTINININININININ</h1>
            </div>   
        )
    }
    //generate random note
    generateRandomNote(){
       //Math.random()
        return D4;
    }
}

export default new generateDisplayRandomNote();
