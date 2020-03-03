import React from 'react';
import {Link} from 'react-router-dom';


class DashBoard extends React.Component {

  render () {
    return (
      <hgroup className="greeting-box">
        <h2 className="greeting-name">{currentUser.firstName} {currentUser.lastName}</h2>
        <button className="greeting-logout-button" onClick={this.props.logout}>Log Out</button>
      </hgroup>
    );
  }
}

export default DashBoard;