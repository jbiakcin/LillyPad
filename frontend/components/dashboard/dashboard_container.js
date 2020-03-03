import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import DashBoard from './dashboard';

const mSP = ({session, errors, entities: {users}}) => {
  // debugger;
  return {
    errors:  errors.session,
    currentUser: users[session.id]
  }
};

const mDP = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mSP, mDP)(DashBoard);