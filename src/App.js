import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import Fretboardpage from './pages/fretboard-trainer/fretboard-trainer.component';


class App extends React.Component{

  render() {
      return (
        <div>
          <Homepage/>
          
        </div>  
    );
  }
}

// function App(){
  
//   return (
//     <div>
//       {/* <HomePage /> */}
//       <Switch>
//         <Route exact path='/' component={Homepage}/>
//         <Route exact path='/hats' component={Fretboardpage}/>
//       </Switch>

//     </div>
//   );
// }

export default App;
