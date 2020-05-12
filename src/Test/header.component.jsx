import React from 'react';
import {withRouter, Link} from 'react-router-dom';

import '../components/header/header.styles.scss';

import AuthenticationService from '../authentication/AuthenticationService';


const HeaderComponent = (props) => (

    <div className='header-component' 
       
    >
         <div className='header-btn'>
            
            <h2 id='sign-out' className="btn"
                onClick={() =>
                props.history.push('/')}
            >Sign Out</h2>
        </div >
        <div>
            <h2 id='homepage-link' className="btn"
                onClick={() =>
                props.history.push('/fretboardnotetrainer')}
            >Fretboard Trainer</h2>
        </div>
        <div>
            <h2 id='homepage-link' className="btn"
                onClick={() =>
                props.history.push('/sightreading')}
            >Sight Reading</h2>
        </div>
        <div>
            <h2 id='homepage-link' className="btn"
                onClick={() =>
                props.history.push('/learntheory')}
            >Learn Theory</h2>
        </div>
        <div>
            <h2 id='homepage-link' className="btn"
                onClick={() =>
                props.history.push('/homepage')}
            >Home</h2>
        </div>
    </div> 
    

);

export default withRouter(HeaderComponent);