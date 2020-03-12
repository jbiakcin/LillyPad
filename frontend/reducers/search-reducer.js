import { RECEIVE_SEARCH_SPOTS} from '../actions/search_actions';

const searchReducer = (state ={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_SPOTS:
      return Object.assign({}, state, action.spots)
    default:
      return state;
  }
}

export default searchReducer;