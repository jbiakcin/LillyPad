import React from 'react';
import DashboardHeader from './dashboard_header';
import SpotIndex from '../spot/spot_index';
import SpotIndexContainer from '../spot/spot_index_container';
import {fetchSpots} from '../../actions/spot_actions';


class DashBoard extends React.Component {
  
  render () {
    const {currentUser} = this.props;
    return (
      <main className="dashboard">
        <div><DashboardHeader logout={this.props.logout}/></div>
        <div className="dashboard-body">
          <div className="dashboard-sidebar">
            <div className="greeting-box">
              <p>{currentUser.first_name} {currentUser.last_name}</p>
              <p>{currentUser.city}</p>
            </div>
            <div className="accept-guests">
              <p>Not Accepting Guests</p>
            </div>
          </div>
          <div className="dashboard-spots">
            <SpotIndexContainer/>
          </div>
        </div>
      </main>
    );
  }
}

export default DashBoard;