import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import Fretboardpage from './pages/fretboard-trainer/fretboard-trainer.component';
import SightReadingPage from './pages/sight-reading/sight-reading.component';
import LearnTheoryPage from './pages/learn-theory/learn-theory.component';

//App determines starting page and routing
function App(){
  
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/fretboardnotetrainer' component={Fretboardpage}/>
        <Route exact path='/sightreading' component={SightReadingPage}/>
        <Route exact path='/learntheory' component={LearnTheoryPage}/>
      </Switch>

    </div>
  );
}

export default App;
