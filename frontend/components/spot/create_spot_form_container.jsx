import {connect} from 'react-redux';
import SpotForm from './spot_form';
import {createSpot} from '../../actions/spot_actions';

const mSP = ({entities, errors, session}) => {
  const currentUser = entities.users[session.id];
  return {
    currentUser,
    spot: {
      hostId: currentUser.id,
      site: '',
      locationName: '',
      maxGuests: ''
    },
    errors: errors.session,
    formType: 'Create'
  }
};

const mDP = dispatch => ({
  processForm: spot => dispatch(createSpot(spot))
});

export default connect(mSP, mDP)(SpotForm);