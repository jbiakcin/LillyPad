import {connect} from 'react-redux';
import BookingIndex from './booking_index';
import {
  fetchUserBookings, 
  updateBooking, 
  deleteBooking
} from '../../actions/booking_actions';

const mSP = state => {
  return {
    bookings: Object.values(state.entities.bookings),
    spots: state.entities.spots,
    currentUserId: state.session.id
  }
};

const mDP = dispatch => {
  return {
    fetchUserBookings: (userId) => dispatch(fetchUserBookings(userId)),
    updateBooking: booking => dispatch(updateBooking(booking)),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId))
  }
};

export default connect(mSP, mDP)(BookingIndex);
