import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Form from './components/form';
import Profile from './components/profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'default'
    }
  }

  updateUser(newUser) {
    this.setState({ user: newUser });
  }

  render() {
    return (
      <div>
        <Form update={this.updateUser.bind(this)} />
        <hr />
        <Profile user={this.state.user} />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDom.render(<App />, mountNode);
