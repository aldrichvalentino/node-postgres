import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Form from './containers/form';
import Profile from './containers/profile';
import Login from './components/login';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { User } from './reducer/userReducer';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const middleware = applyMiddleware(thunk);
const store = createStore(User, middleware);

window.store = store;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Form} />
            <Route exact path='/' component={Profile} />
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDom.render(<App />, mountNode);
