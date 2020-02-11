import React from 'react';
import './staff.styles.scss';

const StaffComponent = () =>{
    return(
    <div>

        {/* Higher Ledger Lines */}
        <hr class='ledger-line top-ledger-line'/>
        <hr class='ledger-line'/>
        <hr class='ledger-line'/>

        {/* staff lines */}
        <hr class='staff-line top-staff-line'/>
        <hr class='staff-line'/>
        <hr class='staff-line'/>
        <hr class='staff-line'/>
        <hr class='staff-line'/>

        {/* Lower ledger Lines */}
        <hr class='ledger-line ledger-line'/>
        <hr class='ledger-line'/>
        <hr class='ledger-line'/>
    </div>
    )
}

export default StaffComponent;