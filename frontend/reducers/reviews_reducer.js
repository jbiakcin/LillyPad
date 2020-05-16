import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from '../actions/review_actions';
import {RECEIVE_SPOTS, RECEIVE_SPOT} from '../actions/spot_actions';
import { RECEIVE_BOOKINGS, REMOVE_BOOKING } from '../actions/booking_actions';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SPOT:
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return Object.assign({}, state, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      let newState = Object.assign({}, state);
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};

export default ReviewsReducer;