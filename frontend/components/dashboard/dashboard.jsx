import React from 'react';
import DashboardHeader from './dashboard_header';


class DashBoard extends React.Component {

  render () {
    const {currentUser} = this.props;
    return (
      <div>
        <div><DashboardHeader logout={this.props.logout}/></div>
        <div className="greeting-box">
        <h2 className="greeting-name">Hello {currentUser.first_name} {currentUser.last_name}!</h2>
        </div>
        <h3>More to Come on this page!</h3>
      </div>
    );
  }
}

export default DashBoard;