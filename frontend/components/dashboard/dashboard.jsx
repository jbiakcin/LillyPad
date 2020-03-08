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
              <p className="greeting-name">{currentUser.first_name} {currentUser.last_name}</p>
              <br/>
              <p className="greeting-city">{currentUser.city}</p>
            </div>
            <div className="accept-guests">
              <select className="accept-status">
                <option value="Accepting">Accepting Guests</option>
                <option value="Maybe">Maybe Accepting Guests</option>
                <option value="No">Not Accepting Guests</option>
              </select>
            </div>
            <div className="verified">
              <div className="verified-header">MY PROFILE</div>
              <ul className="verified-status">
                <li><i className="fas fa-check"></i>&nbsp;&nbsp; Payment verified</li>
                <li><i className="fas fa-times"></i> &nbsp;&nbsp;Phone not verified</li>
                <li><i className="fas fa-times"></i> &nbsp;&nbsp;Government ID not verified</li>
                <li><i className="fas fa-times"></i> &nbsp;&nbsp;Address not verified</li>
              </ul>
            </div>
          </div>
          <section className="dashboard-right">
            <div className="dashboard-spots">
              <SpotIndexContainer/>
            </div>
            <div className="my-travel-plans">
              <h2><i className="fas fa-plane"></i>    MY TRAVEL PLANS</h2>
              <ul className="planned-trips bottom-line"><p>New York</p>
                <li key={Math.random()}>NY Trip</li>
                <li key={Math.random()}>Visiting: Niagara Falls</li>
                <li key={Math.random()}>Lenght of stay: 3 days</li>
                <li key={Math.random()}>First time in NY</li>
              </ul>
              <ul className="planned-trips"><p>SoCal</p>
                <li key={Math.random()}>Hiking Trip</li>
                <li key={Math.random()}>Visiting: Angeles National Forest</li>
                <li key={Math.random()}>Lenght of stay: 4 days</li>
                <li key={Math.random()}>Stocking up on hiking gear for this trip</li>
              </ul>
            </div>

            <div className="happenings">
              <h2><i className="fas fa-calendar-alt"></i>&nbsp;&nbsp; WHAT'S HAPPENING NEAR: SAN FRANCISCO, CA</h2>
              <div className="sf-happenings bottom-line">
                <ul className="sf-events"><p>Free Guided Trail and Nature Walk</p>
                  <li key={Math.random()}>Where: Golden Gate Park</li>
                  <li key={Math.random()}>When: Everyday 10 AM - 12 PM</li>
                  <li key={Math.random()}>Meet at: Tea Garden Entrance</li>
                </ul>
                <button>Join</button>
              </div>
              <div className="sf-happenings">
                <ul className="sf-events"><p>Tour of Muir Woods, An Echanted Forest</p>
                  <li key={Math.random()}>Where: Muir Woods</li>
                  <li key={Math.random()}>When: Sundays 2 PM - 4 PM</li>
                  <li key={Math.random()}>Meet at: Visitor Center</li>
                </ul>
                <button>Join</button>
              </div>
            </div>

          </section>
        </div>
      </main>
    );
  }
}

export default DashBoard;