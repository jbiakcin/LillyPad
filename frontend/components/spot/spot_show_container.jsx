import {connect} from 'react-redux';
import {fetchSpot, updateSpot} from '../../actions/spot_actions';
import {fetchUsers} from '../../actions/user_actions';
import spotShow from './spot_show';
import {logout} from '../../actions/session_actions';
import {findSpots} from '../../actions/search_actions';

const mSP = ({entities, session}, ownProps) => {
  const spot = entities.spots[ownProps.match.params.spotId];
  return {
    spot,
    currentUser: entities.users[session.id],
    spotReview: undefined
  };
};

const mDP = dispatch => ({
  fetchSpot: spotId => dispatch(fetchSpot(spotId)),
  fetchUsers: () => dispatch(fetchUsers()),
  logout: () => dispatch(logout()),
  findSpots: site => dispatch(findSpots(site)),
  updateSpot: (spot) => dispatch(updateSpot(spot))
});

export default (connect(mSP, mDP)(spotShow));