import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Form from './containers/form';
import Profile from './components/profile';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { User } from './reducer/userReducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
const store = createStore(User, middleware);

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
      <Provider store={store}>
        <div>
          <Form update={this.updateUser.bind(this)} />
          <hr />
          <Profile user={this.state.user} />
        </div>
      </Provider>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDom.render(<App />, mountNode);
