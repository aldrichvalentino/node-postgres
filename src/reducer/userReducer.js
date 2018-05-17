import { type } from '../action/userAction';
import { combineReducers } from 'redux';

function currentUser(state = '', action) {
  switch(action.type) {
    case type.GET_USER: {
      return state;
    }
    case type.RECEIVE_USER: {
      return action.payload;
    }
    default: return state;
  }
}

function users(state = [], action) {
  let users = state;
  switch(action.type) {
    case type.CREATE_USER: {
      return [...state, {
        username: action.username,
        birthday: action.birthday
      }];
    }
    case type.EDIT_USER: {
      return users.map((user, index) => {
        if(index === action.index) {
          return {
            username: action.username,
            birthday: action.birthday
          }
        }
        return user;
      });
    }
    default: return state;
  }
}

export const User = combineReducers({
  currentUser,
  users
});