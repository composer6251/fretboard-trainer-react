import React from 'react';

import NoteContainer from '../components/note/note.container.component';
import Note from '../components/note/note.image.component';
import {C4, D4} from '../constants/noteConstants'

class generateDisplayRandomNote{
    // method to set note position
    displayRandomNote(){
        var noteId = this.generateRandomNote();
        console.log('noteId :>> ', noteId);
        return(
            <div>
                <Note noteId={noteId}/>
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
