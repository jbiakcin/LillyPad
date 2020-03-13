import {connect} from 'react-redux';
import SpotIndex from './spot_index';
import {fetchSpots} from '../../actions/spot_actions';

const mSP = state => {
  const onlySpots = Object.values(state.entities.spots)
  return ({
  spots: Object.values(onlySpots)
  });
};

const mDP = dispatch => ({
  fetchSpots: () => dispatch(fetchSpots())
});

export default connect(mSP, mDP)(SpotIndex);