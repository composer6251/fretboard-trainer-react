import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './header.styles.scss';

import AuthenticationService from '../../authentication/AuthenticationService';

class HeaderComponent extends Component {
    
    render(){
        let currentPage = this.props.currentPage;
        return(
        <div className='header-component'>

            <div>     
                <h2 id='homepage-link' className="btn">
                <Link onClick={AuthenticationService.removeAuthenticationSessionStorage} to="/">Sign Out</Link></h2> 
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
            
             {currentPage==="home" &&  
                <div>
                    <h2 id='homepage-link' className="btn">
                    <Link to="/homepage">Home</Link></h2>
                </div>
             } 
        </div>

        );
    }
}
export default HeaderComponent;