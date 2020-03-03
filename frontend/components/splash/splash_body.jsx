import React from 'react';
import SignupFormContainer from '../session_form/signup_form_container';

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

      </main>
    )
  }
}

export default SplashBody;