import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import DashBoard from './dashboard';
import { fetchUserBookings } from '../../actions/booking_actions';
import {fetchSpots} from '../../actions/spot_actions';
import {findSpots} from '../../actions/search_actions';
import {fetchUsers} from '../../actions/user_actions';

const mSP = ({session, errors, entities: {users}}) => {
  return {
    errors:  errors.session,
    currentUser: users[session.id]
  }
};

const mDP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUserBookings: () => dispatch(fetchUserBookings()),
    fetchSpots: () => dispatch(fetchSpots()),
    findSpots: (site) => dispatch(findSpots(site)),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mSP, mDP)(DashBoard);