import {connect} from 'react-redux';
import {signup, login, clearErrors} from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSP = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'signup'
  }
};

const mDP = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    demoForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  }
};

export default connect(mSP, mDP)(SignupForm);