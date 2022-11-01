import React from 'react';
import './menu-item.styles.scss';
import {Link} from 'react-router-dom';

// Menu Item/s on the Homepage directory
const MenuItem = ( { title, imageUrl, size, linkPath, match } ) => (
    <Link style={{backgroundImage: `url(${imageUrl})`}} className={`menu-item`} to={`../${linkPath}`}>
        <div>
            <div className='content'>
                <h1 className='title'>{title}</h1>
            </div>
        </div>
    </Link>
);

export default MenuItem;