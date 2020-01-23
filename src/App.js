import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import FretboardPage from './pages/fretboard-trainer/fretboard-trainer.component';
import LearnFretboardComponent from './components/learn-fretboard.component';


function App(){

    return (
      
            <div>              

              <Homepage>
                {/* <LearnFretboardComponent></LearnFretboardComponent>  */}
              </Homepage>
              {/* <Route exact path='/' component={Homepage}/> */}
              {/* <Route exact path='/fretboard' component={FretboardPage}/> */}
 
            </div>
         
    );
  }


export default App;
