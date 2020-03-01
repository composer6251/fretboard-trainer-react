import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss';

//This component returns the menu-item to the directory
const MenuItem = ( { title, imageUrl, size, history, linkUrl, match } ) => (
    // <div className={`menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div 
            //className='background-image' 
            className={`menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            
            >
                <div className='content'>
                        <h1 className='title'>{title}</h1>
                        {/* <span className='subtitle'>SHOP NOW</span> */}
                </div>
        {/* </div>   */}
    </div>

    
);

export default withRouter(MenuItem);