import React from 'react';

import './staff.styles.scss';

import TrebleClefComponent from '../clef/treble-clef.component';
import { Component } from 'react';
import NoteContainer from '../note/note.container.component';
import TestImageComponent from '../test/test-image.component';


class StaffComponent extends Component{

render(){
        return(
        <div className="staff">          

            <TrebleClefComponent/>
            {/* <div>
                <TestImageComponent/>
                </div> */}
            <div className="staff">
                
                {/* Higher Ledger Lines */}
                <hr className='ledger-line top-ledger-line'/>
                <hr className='ledger-line'/>
                <hr className='ledger-line'/>

                {/* staff lines */}
                <hr className='staff-line top-staff-line'/>
                <hr className='staff-line'/>
                <hr className='staff-line'/>
                <hr className='staff-line'/>
                <hr className='staff-line'/>

                {/* Lower ledger Lines */}
                <hr className='ledger-line ledger-line'/>
                <hr className='ledger-line'/>
                <hr className='ledger-line'/>
            </div>
        </div>
        )
    }
}
export default StaffComponent;