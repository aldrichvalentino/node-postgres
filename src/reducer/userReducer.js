import { type } from '../action/userAction';
import { combineReducers } from 'redux';

function currentUser(state = '', action) {
  switch(action.type) {
    case type.GET_USER: {
      return state;
    }
    case type.CREATE_USER: {
      return action.name;
    }
    default: return state;
  }
}

function users(state = [], action) {
  let users = state;
  switch(action.type) {
    // case type.CREATE_USER: {
    //   return [...state, {
    //     name: action.name,
    //     email: action.email
    //   }];
    // }
    case type.EDIT_USER: {
      return users.map((user, index) => {
        if(index === action.index) {
          return {
            name: action.name,
            password: action.password
          }
        }
        return user;
      });
    }
    case type.RECEIVE_USER: {
      return action.payload.map((user, index) => {
        return {
          name: user.name,
          email: user.email
        }
      });
    }
    default: return state;
  }
}

export const User = combineReducers({
  currentUser,
  users
});