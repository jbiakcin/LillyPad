import {connect} from 'react-redux';
import React from 'react';
import {signup, login} from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSP = ({errors }, ownProps) => {
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