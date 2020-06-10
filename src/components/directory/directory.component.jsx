import React from 'react';

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
                  linkUrl: 'fretboardnotetrainer'
                },
                {
                  title: 'Sight Reading',
                  imageUrl: 'https://image.shutterstock.com/image-vector/music-note-design-element-doodle-260nw-616470641.jpg',
                  id: 2,
                  linkUrl: 'sightreading'
                },
                {
                  title: 'Learn Theory',
                  imageUrl: 'https://i.stack.imgur.com/XNCwK.png',
                  id: 3,
                  linkUrl: 'learntheory'
                }
              ]   
        }
    }

    render (){
        return(

            <div className='directory-menu'>
                {
                
                this.state.sections.map(({ id, ...sectionProps }) => (
                    <MenuItem key={id} {...sectionProps}/> ))
                }
            </div>
          
        )  
    } 
}

export default Directory;