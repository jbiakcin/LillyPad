import {connect} from 'react-redux';
import BookingForm from './booking_form';
import {createBooking} from '../../actions/booking_actions';
import {logout} from '../../actions/session_actions';

const mSP = ({entities, session, errors}, ownProps) => {
  // debugger;
  const currentUser = entities.users[session.id];
  return {
    currentUser,
    booking: {
      arrival_date: '',
      departure_date: '',
      num_travelers: '',
      hopper_id: currentUser.id,
      spot_id: ownProps.match.params.spotId,
      // focused: false
    },
    errors: errors.session,
    formType: 'Send'
  }
};

const mDP = dispatch => ({
  processForm: booking => dispatch(createBooking(booking)),
  logout: () => dispatch(logout())
});

export default connect(mSP, mDP)(BookingForm);