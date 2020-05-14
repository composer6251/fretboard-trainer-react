import React from 'react';

import './staff.styles.scss';

import Note from '../note/note.component';
import TrebleClefComponent from '../clef/treble-clef.component';

const StaffComponent = () =>{
    return(
    <div>
        <TrebleClefComponent/>
        <Note/>
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
    )
}

export default StaffComponent;