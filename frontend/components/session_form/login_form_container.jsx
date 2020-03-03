import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './signup_form';

const mSP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login'
  }
};

const mDP = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    demoForm: user => dispatch(login(user))
  }
};

export default connect(mSP, mDP)(SessionForm);