import React from 'react';
import { Link } from 'react-router-dom';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {

    constructor(){
        super();

        this.state = {
            sections:  [
                {
                  title: 'Fretboard/Note Trainer',
                 imageUrl: 'https://miro.medium.com/max/3464/1*oJBvXyzRk_LFII8UcGS-1g.png',
                  id: 1,
                  linkPath: 'fretboardnotetrainer'
                },
                {
                  title: 'Sight Reading',
                  imageUrl: 'https://image.shutterstock.com/image-vector/music-note-design-element-doodle-260nw-616470641.jpg',
                  id: 2,
                  linkPath: 'sightreading'
                },
                {
                  title: 'Learn Theory',
                  imageUrl: 'https://i.stack.imgur.com/XNCwK.png',
                  id: 3,
                  linkPath: 'learntheory'
                }
              ]   
        }
    }

    render (){
        return(

            <div className='directory-menu'>
                {
                
                this.state.sections.map(({ id, ...sectionProps }) => (
                    // <Link to={sectionProps.linkPath}>
                      <MenuItem key={id} {...sectionProps}/>
                    // </Link>
                    
                    ))
                }
            </div>
          
        )  
    } 
}

export default Directory;