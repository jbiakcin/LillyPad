import React from 'react';
import {Link} from 'react-router-dom';


class DashBoard extends React.Component {

  render () {
    const {currentUser} = this.props;
    return (
      <div>
        <div className="greeting-box">
        <h2 className="greeting-name">Hello {currentUser.first_name} {currentUser.last_name}!</h2>
        <button className="greeting-logout-button" onClick={this.props.logout}>Log Out</button>
        </div>
        <h3>More to Come on this page!</h3>
      </div>
    );
  }
}

export default DashBoard;