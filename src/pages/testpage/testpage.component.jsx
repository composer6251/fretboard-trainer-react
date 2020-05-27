import React, { Component } from 'react';


import TestComponent from './test.component.jsx';

class TestClassForDBCalls extends Component{
    render(){
        return(
            <div>
            <TestComponent />
            </div>
        )
    }

    testMothod(){
        console.log("test")
    }
}

export default TestClassForDBCalls;