import React from 'react';

import NoteContainer from '../components/note/note.container.component';
import {C4} from '../CONSTANTS/noteConstants'

class generateDisplayRandomNote{
    // method to set note position
    displayRandomNote(){
        var noteId = this.generateRandomNote();
        console.log('noteId :>> ', noteId);
        return(
            <div>
                <NoteContainer noteId={noteId}/>
            </div>
            
        )
    }
    //generate random note
    generateRandomNote(){
        return C4;
    }
}

export default new generateDisplayRandomNote();
