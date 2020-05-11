import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import '../components/header/header.styles.scss';

import AuthenticationService from '../authentication/AuthenticationService';


class HeaderComponent extends Component {

    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return(
        <div className='header-component'>
            <div>     
                <h2><Link onClick={AuthenticationService.removeAuthenticationSessionStorage} to="/">Sign Out</Link></h2> 
            </div>
            
            <div>
                <h2 id='homepage-link' className="btn">
                <Link to="/fretboardnotetrainer">Fretboard Trainer</Link></h2>
            </div>
            <div>
                <h2 id='homepage-link' className="btn">
                <Link to="/sightreading">Sight Reading</Link></h2>
            </div>
            <div>
                <h2 id='homepage-link' className="btn">
                <Link to="/learntheory">Learn Theory</Link></h2>
            </div>
            <div>
                <h2 id='homepage-link' className="btn">
                <Link to="/home">Home</Link></h2>
            </div>
        </div>
    

        );
    }
}
export default withRouter(HeaderComponent);