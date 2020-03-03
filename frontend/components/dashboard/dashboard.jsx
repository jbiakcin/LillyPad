import React from 'react';
import {Link} from 'react-router-dom';


class DashBoard extends React.Component {

  render () {
    const {currentUser} = this.props;
    return (
      <hgroup className="greeting-box">
        <h2 className="greeting-name">{currentUser.first_name} {currentUser.last_name}</h2>
        <button className="greeting-logout-button" onClick={this.props.logout}>Log Out</button>
      </hgroup>
    );
  }
}

export default DashBoard;