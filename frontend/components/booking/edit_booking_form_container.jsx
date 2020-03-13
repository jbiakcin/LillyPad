import {connect} from 'react-redux';
import {fetchBooking, updateBooking} from '../../actions/booking_actions';
import EditBookingForm from './edit_booking_form';

const mSP = (state, ownProps) => {
  return {
    booking: ownProps.booking,
    formType: 'UPDATE'
  }
};

const mDP = dispatch => ({
  processForm: booking => dispatch(updateBooking(booking)),
  fetchBooking: bookingId => dispatch(fetchBooking(bookingId)),
  updateBooking: booking => dispatch(updateBooking(booking)),
  logout: () => dispatch(logout())
});

export default connect(mSP, mDP)(EditBookingForm);
