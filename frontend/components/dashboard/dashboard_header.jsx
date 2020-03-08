import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class DashboardHeader extends React.Component {

  render (){
    return (
      <header className="splash-header">
        <div className="splash-wrapper">
          <div className="logo">
            <Link to="/" className="logo-link"><p>LillyPad</p></Link>
          </div>
          <button 
            className="greeting-logout-button" 
            onClick={this.props.logout}
          >Log Out</button>
        </div>
      </header>
    );
  }
}

export default DashboardHeader;