import {connect} from 'react-redux';
import {fetchSpot} from '../../actions/spot_actions';
import {fetchUsers} from '../../actions/user_actions';
import spotShow from './spot_show';

const mSP = ({entities}, ownProps) => ({
  spot: entities.spots[ownProps.match.params.spotId],
  users: entities.users
});

const mDP = dispatch => ({
  fetchSpot: spotId => dispatch(fetchSpot(spotId)),
  fetchUsers: users => dispatch(fetchUsers(users))
});

export default (connect(mSP, mDP)(spotShow));