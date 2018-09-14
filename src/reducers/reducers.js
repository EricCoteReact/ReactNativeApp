import { combineReducers } from 'redux';

function users(state = [], action) {
  switch (action.type) {
    case 'USER_ADDED':
      return [...state, action.user];
    case 'USERS_LISTED':
      return action.users
    default:
      return state;
  }
}

export default   combineReducers({ users });

