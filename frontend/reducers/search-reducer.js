import {RECEIVE_SEARCH_SPOTS, CLEAR_SEARCH_SPOTS} from '../actions/search_actions';

const SearchReducer = (state ={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_SPOTS:
      return Object.assign({}, state, action.spots)
    case CLEAR_SEARCH_SPOTS:
      return {spots: {}};
    default:
      return state;
  }
}

export default SearchReducer;