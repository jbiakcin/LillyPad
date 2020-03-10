import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mSP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login'
  }
};

const mDP = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  }
};

export default connect(mSP, mDP)(LoginForm);