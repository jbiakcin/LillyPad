import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USERS, RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_SPOTS, RECEIVE_SPOT} from '../actions/spot_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOT:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_SPOTS:
    case RECEIVE_USERS:
      return Object.assign({}, state, action.users);
    case RECEIVE_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
    default:
      return state;
  }
};

export default usersReducer;