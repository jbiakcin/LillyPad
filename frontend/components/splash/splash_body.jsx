import React from 'react';
import SignupFormContainer from '../session_form/signup_form_container';
import {Link, withRouter} from 'react-router-dom';
import LoginForm from '../../components/session_form/login_form';

class SplashBody extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     show: false
  //   };

  //   this.showModal = this.showModal.bind(this);
  // }

  // showModal(e) {
  //   return e => this.setState({ show: true });
  // }

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
          <Link to="/login">
            <button className="splash-body-login-button"
              >Log In
            </button>
          </Link>
        </div>
      </main>
    )
  }
}

export default withRouter(SplashBody);