import {connect} from 'react-redux';

import {signup, login} from '../../actions/session_actions';
import Splash from './splash';

const mSP = ({session, entities: {users}}) => {
  return {
    currentUser: users[session.id]
  }
};

const mDP = dispatch => ({
  processForm: user => dispatch(signup(user)),
  demoForm: user => dispatch(login(user))
});

export default connect(mSP, mDP)(Splash);