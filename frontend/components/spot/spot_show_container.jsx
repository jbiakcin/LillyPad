import {connect} from 'react-redux';
import {fetchSpot} from '../../actions/spot_actions';
import {fetchUsers} from '../../actions/user_actions';
import spotShow from './spot_show';
import {logout} from '../../actions/session_actions';

const mSP = ({entities, session}, ownProps) => ({
  spot: entities.spots[ownProps.match.params.spotId],
  currentUser: entities.users[session.id]
});

const mDP = dispatch => ({
  fetchSpot: spotId => dispatch(fetchSpot(spotId)),
  logout: () => dispatch(logout())
});

export default (connect(mSP, mDP)(spotShow));