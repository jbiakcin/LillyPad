import {connect} from 'react-redux';
import {fetchSpot} from '../../actions/spot_actions';
// import {fetchUsers} from '../../actions/user_actions';
import spotShow from './spot_show';

const mSP = (state, ownProps) => ({
  spot: state.entities.spots[ownProps.match.params.spotId],
  // host: 
});

const mDP = dispatch => ({
  fetchSpot: spotId => dispatch(fetchSpot(spotId))
});

export default connect(mSP, mDP)(spotShow);