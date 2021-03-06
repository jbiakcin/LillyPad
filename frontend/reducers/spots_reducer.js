import {
  RECEIVE_SPOTS, 
  RECEIVE_SPOT, 
  REMOVE_SPOT
} from '../actions/spot_actions';
import { RECEIVE_BOOKING } from '../actions/booking_actions';
import { RECEIVE_REVIEWS } from '../actions/review_actions';

const SpotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOTS:
      return Object.assign({}, state, action.spots);
      case RECEIVE_BOOKING:
    case RECEIVE_SPOT:
      return Object.assign({}, state, {[action.spot.id]: action.spot});
    case REMOVE_SPOT:
      let newState = Object.assign({}, state);
      delete newState[action.spotId];
      return newState;
    default:
      return state;
  }
};

export default SpotsReducer;