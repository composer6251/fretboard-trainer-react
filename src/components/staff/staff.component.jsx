import React from 'react';

import './staff.styles.scss';

import TrebleClefComponent from '../clef/treble-clef.component';
import { Component } from 'react';
import NoteContainer from '../note/note.container.component';
import NoteNameConstants from '../note/noteNameConstants.js';

// add random button to this?????
//Pass props to NoteContainer
//Change NoteContainer Style with props


class StaffComponent extends Component{
    constructor(){
        super();
        this.state = {
            // noteStyle : this.props.note,
         //   trainingStarted : this.props.trainingStarted
        }
        this.displayNote = this.displayNote.bind(this);
    }

    displayNote(){
        this.setState({trainingStarted : true})
    }
render(){
        return(
        <div className="staff">          

            <TrebleClefComponent />

            {this.state.trainingStarted && <div><NoteContainer /></div>}
            
            <div className="staff">
                {/* Higher Ledger Lines */}
                <hr className='line ledger-line top-ledger-line'/>
                <hr className='line ledger-line'/>
                <hr className='line ledger-line'/>

                {/* staff lines */}
                <hr className='line staff-line top-staff-line'/>
                <hr className='line staff-line'/>
                <hr className='line staff-line'/>
                <hr className='line staff-line'/>
                <hr className='line staff-line'/>

                {/* Lower ledger Lines */}
                <hr className='line ledger-line ledger-line'/>
                <hr className='line ledger-line'/>
                <hr className='line ledger-line'/>
            </div>
        </div>
        )
    }
}
export default StaffComponent;