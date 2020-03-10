import { connect } from 'react-redux';
import { fetchBooking, deleteBooking } from '../../actions/booking_actions';
import DeleteBookingForm from './delete_booking_form';

const mSP = (state, ownProps) => ({
  booking: state.entities.bookings[ownProps.match.params.bookingId],
  formType: 'Delete'
});

const mDP = dispatch => ({
  fetchBooking: bookingId => dispatch(fetchBooking(bookingId)),
  deleteBooking: booking => dispatch(deleteBooking(booking))
});

export default connect(mSP, mDP)(DeleteBookingForm);