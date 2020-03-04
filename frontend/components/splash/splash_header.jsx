import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import LoginFormContainer from '../../components/session_form/login_form_container';
import LoginModal from '../session_form/login_modal';

class SplashHeader extends React.Component {

  render (){
    return (
      <header className="splash-header">
        <div className="logo">
          <Link to="/" className="logo-link"><p>LillyPad</p></Link>
        </div>
        <div className="login-button">
          <LoginModal/>
        </div>
      </header>
    );
  }
}


export default withRouter(SplashHeader);