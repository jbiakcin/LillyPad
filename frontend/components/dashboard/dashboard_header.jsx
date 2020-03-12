import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class DashboardHeader extends React.Component {

  render (){
    return (
      <header className="splash-header">
        <div className="splash-wrapper">
          <span>
            <div className="logo">
              <Link to="/" className="logo-link"><p>LillyPad</p></Link>
            </div>
            <nav className="search-bar">
              <i className="fas fa-search"></i>&nbsp;&nbsp;
              <input className="search" type="text" placeholder="Search by park name"/>
            </nav>
          </span>
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