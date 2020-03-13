import {connect} from 'react-redux';
import BookingForm from './booking_form';
import {createBooking} from '../../actions/booking_actions';
import {logout} from '../../actions/session_actions';

const mSP = ({entities, session, errors}, ownProps) => {
  debugger
  return {
    currentUser: entities.users[session.id],
    spot: Object.values(entities.spots)[0],
    booking: {
      arrival_date: null,
      departure_date: null,
      num_travelers: 1,
      hopper_id: currentUser.id,
      message: ''
    },
    errors: errors.session,
    formType: 'SEND'
  }
};

const mDP = dispatch => ({
  processForm: booking => dispatch(createBooking(booking)),
  logout: () => dispatch(logout())
});

export default connect(mSP, mDP)(BookingForm);