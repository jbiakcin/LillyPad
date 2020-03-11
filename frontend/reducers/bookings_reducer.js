import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING,
  REMOVE_BOOKING
} from '../actions/booking_actions';
import {RECEIVE_SPOTS} from '../actions/spot_actions';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger;
  switch (action.type) {
    case RECEIVE_SPOTS:
    case RECEIVE_BOOKINGS:
      return Object.assign({}, state, action.bookings);
    case RECEIVE_BOOKING:
      return Object.assign({}, state, {[action.booking.id]: action.booking});
    case REMOVE_BOOKING:
      let newState = Object.assign({}, state);
      delete newState[action.bookingId];
      return newState;
    default:
      return state;
  }
};

export default BookingsReducer;