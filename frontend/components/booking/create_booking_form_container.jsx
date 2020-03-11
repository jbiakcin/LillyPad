import {connect} from 'react-redux';
import BookingForm from './booking_form';
import {createBooking} from '../../actions/booking_actions';
import {logout} from '../../actions/session_actions';

const mSP = ({entities, session, errors}, ownProps) => {

  return {
    currentUser: entities.users[session.id],
    spots: entities.spots,
    booking: {
      arrival_date: null,
      departure_date: null,
      num_travelers: 1,
      hopper_id: currentUser.id,
      // spot_id: ownProps.match.params.spotId,
      // spot_id: entities.spots.id,
      // focusedInput: null
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