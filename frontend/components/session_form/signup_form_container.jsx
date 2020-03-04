import {connect} from 'react-redux';
import {signup, login} from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSP = ({errors}) => {
  // debugger;
  return {
    errors: errors.session,
    formType: 'signup'
  }
};

const mDP = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    demoForm: user => dispatch(login(user))
  }
};

export default connect(mSP, mDP)(SignupForm);