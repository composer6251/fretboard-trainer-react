import React, { Component } from 'react';


class DropDownComponent extends Component {

    showOptions(PASSED_OPTIONS){

        const OPTIONS = PASSED_OPTIONS.map((PASSED_OPTION) =>
            <option key={PASSED_OPTION}>{PASSED_OPTION}</option>

        );
         
        return(
            <select name={this.PASSED_OPTION}>
                {OPTIONS}
            </select>
        )
    }
}

export default DropDownComponent;