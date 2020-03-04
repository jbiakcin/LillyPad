import React from 'react';
import SignupFormContainer from '../session_form/signup_form_container';
import {Link, withRouter} from 'react-router-dom';

class SplashBody extends React.Component {

  render () {
    return (
      <main className="splash-body">
        <header className="splash-body-header">
          <h1>Stay with Locals and Meet Travelers</h1>
          <h2>Share Authentic Travel Experiences</h2>
        </header>
        <div>
          <SignupFormContainer />
        </div>
        <div className="splash-body-bottom">
          <h4>Already a member?</h4>
          <Link to="/login" className="splash-body-login-link"> <button>Log In</button></Link>
        </div>

      </main>
    )
  }
}

export default withRouter(SplashBody);