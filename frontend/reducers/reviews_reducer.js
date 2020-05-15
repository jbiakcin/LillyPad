import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from '../actions/review_actions';
import {RECEIVE_SPOTS} from '../actions/spot_actions';
import { RECEIVE_BOOKINGS, REMOVE_BOOKING } from '../actions/booking_actions';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SPOTS:
    case RECEIVE_BOOKINGS:
      return Object.assign({}, state, action.reviews);
    case RECEIVE_BOOKING:
      return Object.assign({}, state, {[action.review.id]: action.review});
    case REMOVE_BOOKING:
      let newState = Object.assign({}, state);
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};

export default ReviewsReducer;