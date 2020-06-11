import React from 'react';

class ShowOptionsDropDown{

    showOptions(PASSED_OPTIONS){

        const OPTIONS = PASSED_OPTIONS.map((PASSED_OPTION) =>
            <option key={PASSED_OPTION}>{PASSED_OPTION}</option>

        );

        return(
            OPTIONS
        
        )
    }
}

export default new ShowOptionsDropDown();