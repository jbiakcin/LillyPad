import React from 'react';
import DashboardHeader from './dashboard_header';
import SpotIndex from '../spot/spot_index';
import SpotIndexContainer from '../spot/spot_index_container';
import {fetchSpots} from '../../actions/spot_actions';


class DashBoard extends React.Component {
  
  render () {
    const {currentUser} = this.props;
    return (
      <div>
        <div><DashboardHeader logout={this.props.logout}/></div>
        <div className="greeting-box">
          <h2 className="greeting-name">Hello {currentUser.first_name} {currentUser.last_name}!</h2>
          <br/>
          <h3>{currentUser.city}</h3>
        </div>
        <SpotIndexContainer/>
        <div>
          <h2>My Spots:</h2>

        </div>
      </div>
    );
  }
}

export default DashBoard;