import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';
import './globals/global-styles/bootstrap.css';

import LoginPage from './pages/login/login.component';
import Homepage from './pages/homepage/homepage.component';
import Fretboardpage from './pages/fretboard-trainer/fretboard-trainer.component';
import SightReadingPage from './pages/sight-reading/sight-reading.component';
import LearnTheoryPage from './pages/learn-theory/learn-theory.component';
import ErrorPage from './pages/errorpage/errorpage.component';
import AuthenticatedRouter from './authentication/AuthenticatedRouter';

//App determines starting page and routing
function App(){

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route exact path='/login' component={LoginPage}/>
        <AuthenticatedRouter exact path='/homepage' component={Homepage}/>
        <AuthenticatedRouter exact path='/homepage/:name' component={Homepage}/>
        <AuthenticatedRouter exact path='/fretboardnotetrainer' component={Fretboardpage}/>
        <AuthenticatedRouter exact path='/sightreading' component={SightReadingPage}/>
        <AuthenticatedRouter exact path='/learntheory' component={LearnTheoryPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    </div>
  );
}

export default App;
