import React from 'react';

import './menu-item.styles.scss';

//This component returns the menu-item to the directory
const MenuItem = ( { title, id, imageUrl, size } ) => (

    <div 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        className={`${size} menu-item`}
        >
        <div className='content'>
            <h1 className='title'>{title}</h1>
            {/* <span className='subtitle'>SHOP NOW</span> */}
        </div>
    </div>  
);

export default MenuItem;