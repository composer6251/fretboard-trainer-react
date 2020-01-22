import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import FretboardPage from './pages/fretboard-trainer/fretboard-trainer.component';

const page = () => (
  <div><h1>fretboard</h1></div>
)

class App extends Component {

  state = {
    persons: [
      {name: 'David', age: 30},
      {name: 'James', age: 33},
      {name: 'John', age: 34},
    ]
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          
            <div>
              
              {/* <Homepage></Homepage> */}
              <Route exact path='/' component={Homepage}/>
              <Route exact path='/fretboard' component={FretboardPage}/>
 
            </div>
          
        </header>
      </div>
    );
  }
}

export default App;
