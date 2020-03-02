import React from 'react';
import Img from 'react-image';

import WholeNote from '../../images/logo192.png';

const NoteImage = () => (

<div>
    <Img src={WholeNote} />
</div>

);
// const Note = () => (
//     <div style={{ backgroundImage: `url(${WholeNote})`}}
//             >
//     </div>
    
// )

export default NoteImage;