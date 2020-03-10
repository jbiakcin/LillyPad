import {connect} from 'react-redux';
import BookingShow from './booking_show';
import {fetchBooking, updateBooking, deleteBooking} from '../../actions/booking_actions';



const mSP = ({entities, session}, ownProps) => {
  return {
    booking: entities.bookings[ownProps.match.params.bookingId],
    currentUser: entities.users[session.id]
  }
};

const mDP = dispatch => {
  return {
    fetchBooking: bookingId => dispatch(fetchBooking(bookingId)),
    updateBooking: booking => dispatch(updateBooking(booking)),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId))
  }
};

export default connect(mSP, mDP)(BookingShow);