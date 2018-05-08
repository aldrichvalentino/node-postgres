import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    render() {
        return (
            <h1>Hello World</h1>
        );
    }
}

var mountNode = document.getElementById("app");
ReactDom.render(<App />, mountNode);
