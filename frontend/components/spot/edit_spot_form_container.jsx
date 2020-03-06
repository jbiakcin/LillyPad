import {connect} from 'react-redux';
import {fetchSpot, updateSpot} from '../../actions/spot_actions';
import EditSpotForm from './edit_spot_form';

const mSP = (state, ownProps) => ({
  spot: state.entities.spots[ownProps.match.params.spotId],
  formType: 'Edit'
});

const mDP = dispatch => ({
  fetchSpot: spotId => dispatch(fetchSpot(spotId)),
  updateSpot: spot => dispatch(updateSpot(spot))
});

export default connect(mSP, mDP)(EditSpotForm);