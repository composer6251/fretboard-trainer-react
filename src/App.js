import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';
import './global-styles/bootstrap.css';

import LoginPage from './pages/login/login.component';
import Homepage from './pages/homepage/homepage.component';
import Fretboardpage from './pages/fretboard-trainer/fretboard-trainer.component';
import SightReadingPage from './pages/sight-reading/sight-reading.component';
import LearnTheoryPage from './pages/learn-theory/learn-theory.component';
import ErrorPage from './pages/errorpage/errorpage.component';

//App determines starting page and routing
function App(){

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/homepage' component={Homepage}/>
        <Route exact path='/fretboardnotetrainer' component={Fretboardpage}/>
        <Route exact path='/sightreading' component={SightReadingPage}/>
        <Route exact path='/learntheory' component={LearnTheoryPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    </div>
  );
}

export default App;
