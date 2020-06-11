import React from 'react';
import { Component } from 'react';

import './sidebar-staff-controller.css';
import DropDownComponent from '../dropdown/dropdown.component';


class SidebarStaffController extends Component  {

    constructor(props){
        super(props);

        this.state = {
            
            key : '',
            scale : '',
            octaves : null

        }
    }

    showOptions(PASSED_OPTIONS){

        const OPTIONS = PASSED_OPTIONS.map((PASSED_OPTION) =>
            <option key={PASSED_OPTION}>{PASSED_OPTION}</option>

        );

        return(
            <select>
                {OPTIONS}
            </select>
        )
    }

    showOptionsKeys(){
        const KEY_OPTIONS = ["C","D","E","F"];
        
        const KEYS = KEY_OPTIONS.map((KEY_OPTION) => 
            <option key={KEY_OPTION}>{KEY_OPTION}</option>
        );

        return(
            <select name="key">
                {KEYS}
            </select>
        )
    }

    showOptionsScales(){
        const SCALES_OPTIONS = ["Major", "Minor", "Minor Pentatonic"];
        
        const SCALES = SCALES_OPTIONS.map((SCALE_OPTION) => 
            <option key={SCALE_OPTION}>{SCALE_OPTION}</option>
        );

        return(
            <select name="scale">
                {SCALES}
            </select>
        )
    }

    showOptionsOctaves(){
        const OCTAVES_OPTIONS = [1,2,3,4];
        
        const OCTAVES = OCTAVES_OPTIONS.map((OCTAVE_OPTION) => 
            <option key={OCTAVE_OPTION}>{OCTAVE_OPTION}</option>
        );

        return(
            <select name="octave">
                {OCTAVES}
            </select>
        )
    }

    render(){
        return(
            
            <div>
                
                <label>Select a Key</label><br/>
                    <DropDownComponent/><br/><br/>

                <label>Select a Scale</label><br/>
                    <this.showOptionsScales/><br/><br/>

                <label>Select number of octaves</label><br/>
                    <this.showOptionsOctaves/><br/><br/>
               
                <button>Begin!</button>
                
            </div>
        )
    }
}

export default SidebarStaffController;