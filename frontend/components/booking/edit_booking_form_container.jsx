import {connect} from 'react-redux';
import {fetchBooking, updateBooking} from '../../actions/booking_actions';
import EditBookingForm from './edit_booking_form';

const mSP = (state, ownProps) => ({
  booking: state.entities.bookings[ownProps.match.params.bookingId],
  formType: 'UPDATE'
});

const mDP = dispatch => ({
  fetchBooking: bookingId => dispatch(fetchBooking(bookingId)),
  updateBooking: booking => dispatch(updateBooking(booking))
});

export default connect(mSP, mDP)(EditBookingForm);
