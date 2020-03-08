import React from 'react';
import SignupFormContainer from '../session_form/signup_form_container';
import {Link, withRouter} from 'react-router-dom';
import LoginFormContainer from '../../components/session_form/login_form_container';
import LoginModal from '../session_form/login_modal';

class SplashBody extends React.Component {

  render () {
    return (
      <main className="splash-body" >
        <header className="splash-body-header">
          <h1>Stay with Locals and Meet Travelers</h1>
          <h2>Share Authentic Travel Experiences</h2>
        </header>
        <div className="sign-up-form-container">
          <SignupFormContainer />
        </div>
        <div className="splash-body-bottom">
          <h4>Already a member?</h4>
          <LoginModal/>
        </div>
      </main>
    )
  }
}


export default withRouter(SplashBody);