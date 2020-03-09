import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING,
  REMOVE_BOOKING
} from '../actions/booking_actions';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return Object.assign({}, state, state.bookings);
    case RECEIVE_BOOKING:
      return Object.assign({}, state, {[state.booking.id]: state.booking});
    case REMOVE_BOOKING:
      let newState = Object.assign({}, state);
      delete newState[action.bookingId];
      return newState;
    default:
      return state;
  }
};

export default BookingsReducer;