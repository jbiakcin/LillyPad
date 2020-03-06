import {connect} from 'react-redux';
import SpotIndex from './spot_index';
import {fetchSpots} from '../../actions/spot_actions';

const mSP = state => {

  return ({
  spots: Object.values(state.entities.spots)
  });
};

const mDP = dispatch => ({
  fetchSpots: () => dispatch(fetchSpots())
});

export default connect(mSP, mDP)(SpotIndex);