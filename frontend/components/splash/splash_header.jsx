import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SplashHeader extends React.Component {

  render (){
    return (
      <header>
        <div className="logo">
          <Link to="/" className="logo-link"/>
            <p>LillyPad</p>
        </div>
        <div className="session-buttons">
          <Link to="/login" className="login-link"> <button>Log In</button></Link>
        </div>
      </header>
    );
  }
}

export default withRouter(SplashHeader);