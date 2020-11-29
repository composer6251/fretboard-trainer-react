import React from 'react';
import { Component } from 'react';

import ShowOptionsDropDown from '../sidebar/showOptionsDropDown.js';
import generateDisplayRandomNote from '../../noteLogic/generateDisplayRandomNote';
import keyGeneratorController from '../scales/util/scaleGenerator.js';

class SidebarStaffController extends Component  {
    constructor(props){
        super(props);
        this.state = {
            key: 'C',
            scale: 'Major',
            octaves: 1
        }
        this.handleChange = this.handleChange.bind(this);
        this.randomNoteClick = this.randomNoteClick.bind(this);
    }

    handleChange(event){
        console.log(event.target.name + "=" + event.target.value);
        this.setState()
    }

    showOptionsKeys(){
        const KEY_OPTIONS = ["C","D","E","F"];
        const KEYS = ShowOptionsDropDown.showOptions(KEY_OPTIONS);

        return(
            <select name="key" 
            onChange={ () => this.handleChange}
            >{KEYS}</select>
            
        )
    }

    showOptionsScales(){
        const SCALES_OPTIONS = ["Major", "Minor", "Minor Pentatonic"];
        const SCALES = ShowOptionsDropDown.showOptions(SCALES_OPTIONS);
        
        return(
            <select name="scale" 
            onChange={ () => this.handleChange}
            >{SCALES}</select>
        )
    }

    showOptionsOctaves(){
        const OCTAVES_OPTIONS = [1,2,3,4];
        const OCTAVES = ShowOptionsDropDown.showOptions(OCTAVES_OPTIONS);

        return(
            <select name="octave" 
            onChange={ () => this.handleChange}
            >{OCTAVES}</select>
        )
    }

    //TESTING
    randomNoteClick(){
        //Just generate and return random note
        keyGeneratorController(this.state.key, this.state.scale, this.state.octaves);
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
                <button onClick={this.randomNoteClick}>Random Note</button>
                <br/>
            </div>

        )
    }
}
export default SidebarStaffController;