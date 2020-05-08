import React from 'react';
import {withRouter} from 'react-router-dom';

import './header.styles.scss';


const HeaderComponent = (props) => (

    <div className='header-component' 
       
    >
        <div className='header-btn'>
            <h2 id='sign-out' className="btn"
                onClick={() =>
                props.history.push('/')}
            >
                Sign Out
            </h2>
        </div >
        <div>
            <h2 id='homepage-link' className="btn"
                onClick={() =>
                props.history.push('/homepage')}
            >
            Home</h2>
        </div>
    </div>
    

);

export default withRouter(HeaderComponent);