import React from 'react';
import {Route, Routes} from 'react-router-dom'
import { Redirect } from 'react-router-dom';


import './App.css';
import './globals/global-styles/bootstrap.css';

import LoginPage from './pages/login/login.component';
import Homepage from './pages/homepage/homepage.component';
import FretboardPage from './pages/fretboard-trainer/fretboard-trainer.component';
import SightReadingPage from './pages/sight-reading/sight-reading.component';
import LearnTheoryPage from './pages/learn-theory/learn-theory.component';
import ErrorPage from './pages/errorpage/errorpage.component';
import TestClassForDBCalls from './pages/testpage/testpage.component';
import WrapperPageComponent from "./pages/wrapper-page/wrapper-page.component";


//App determines starting page and routing
function App(){

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LoginPage/>}/>
        <Route exact path='/login' element={<LoginPage/>}/>
        <Route exact path='/testpage' element={<TestClassForDBCalls/>}/>
        <Route exact path='/homepage' element={<Homepage/>}/>
        <Route exact path='/homepage/:name' element={<Homepage/>}/>
        <Route exact path='/fretboardnotetrainer' element={<FretboardPage/>}/>
        <Route exact path='/sightreading' element={<SightReadingPage/>}/>
        <Route exact path='/learntheory' element={<LearnTheoryPage/>}/>
        <Route element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
