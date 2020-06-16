import React from 'react';
import { Component } from 'react';

import ShowOptionsDropDown from '../sidebar/showOptionsDropDown.js';

class SidebarStaffController extends Component  {

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            
            key : '',
            scale : '',
            octaves : null

        }
    }

    handleChange(event){
        console.log(event.target.name + "=" + event.target.value);
        this.setState()
    }

    showOptionsKeys(){
        const KEY_OPTIONS = ["C","D","E","F"];
        const KEYS = ShowOptionsDropDown.showOptions(KEY_OPTIONS);

        return(
            <select name="key">{KEYS}</select>
        )
    }

    showOptionsScales(){
        const SCALES_OPTIONS = ["Major", "Minor", "Minor Pentatonic"];
        const SCALES = ShowOptionsDropDown.showOptions(SCALES_OPTIONS);
        
        return(
            <select name="scale" 
            // onChange={this.handleChange}
            >{SCALES}</select>
        )
    }

    showOptionsOctaves(){
        const OCTAVES_OPTIONS = [1,2,3,4];
        const OCTAVES = ShowOptionsDropDown.showOptions(OCTAVES_OPTIONS);

        return(
            <select name="octave">{OCTAVES}</select>
        )
    }

    render(){
        return(
            <div>
                <label>Select a Key</label><br/>
                    <this.showOptionsKeys/><br/><br/>
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