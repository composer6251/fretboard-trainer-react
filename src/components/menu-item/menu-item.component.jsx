import React from 'react';
import './menu-item.styles.scss';
import {Link} from 'react-router-dom';

//This component returns the menu-item to the directory
const MenuItem = ( { title, imageUrl, size, linkPath, match } ) => (
    // <div className={`menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <Link to={linkPath}>
        <div  
            className={`menu-item`}
            //took out ${match.url} once Log In page was added. 
            // onClick={(linkPath) => history.push(`${linkPath}`)}
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            >
            <div className='content'>
                <h1 className='title'>{title}</h1>
            </div>
        </div>
    </Link>


    
);

export default MenuItem;