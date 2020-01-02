import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

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
          <img src={logo} className="App-logo" alt="logo" />
          {
            <div>
              <h1>Hello React App</h1>
              <p>This is a paragraph</p>
              <button>Switch Name</button>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobby is Guitar</Person>
              <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>


          /* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
