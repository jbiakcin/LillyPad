import React from 'react';
import DashboardHeader from './dashboard_header';
import SpotIndexContainer from '../spot/spot_index_container';
import BookingIndexContainer from '../booking/booking_index_container';


class DashBoard extends React.Component {

  componentDidMount() {
    this.props.fetchSpots();
  }
  
  render () {
    const {currentUser} = this.props;
    return (
      <main className="dashboard">
        <div><DashboardHeader logout={this.props.logout} findSpots={this.props.findSpots}/></div>
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
              <ul className="profile">
                <li key="portfolio" className="profile-portfolio"><a href="https://jbiakcin.com"><i class="fas fa-user"></i>&nbsp;&nbsp;Portfolio</a></li>
                <li key="github" className="profile-github"><a href="https://github.com/jbiakcin"><i className="fab fa-github"></i>&nbsp;&nbsp;GitHub</a></li>
                <li key="linkedin" className="profile-linkedin"><a href="https://www.linkedin.com/in/jennie-richardson-1531881a5/"><i className="fab fa-linkedin"></i>&nbsp;&nbsp;LinkedIn</a></li>
                <li key="angellist" className="profile-angelist"><a href="https://angel.co/u/jennie-richardson"><i className="fab fa-angellist"></i>&nbsp;&nbsp;AngelList</a></li>
                <li key="email" className="profile-email"><a href="mailto: jbiakcin@icloud.com"><i className="far fa-envelope"></i>&nbsp;&nbsp;Email</a></li>
              </ul>
            </div>
          </div>
          <section className="dashboard-right">
            <div className="dashboard-spots">
              <SpotIndexContainer/>
            </div>
            <div className="dashboard-bookings">
              <BookingIndexContainer/>
            </div>
            <div className="happenings">
              <h2><i className="fas fa-calendar-alt"></i>&nbsp;&nbsp; WHAT'S HAPPENING NEAR: SAN FRANCISCO, CA</h2>
              <div className="sf-happenings bottom-line">
                <ul className="sf-events"><p>Free Guided Trail and Nature Walk</p>
                  <li key={Math.random()}>Where: Golden Gate Park</li>
                  <li key={Math.random()}>When: Everyday 10 AM - 12 PM</li>
                  <li key={Math.random()}>Meet at: Tea Garden Entrance</li>
                </ul>
                {/* <button>Join</button> */}
              </div>
              <div className="sf-happenings">
                <ul className="sf-events"><p>Tour of Muir Woods, An Echanted Forest</p>
                  <li key={Math.random()}>Where: Muir Woods</li>
                  <li key={Math.random()}>When: Sundays 2 PM - 4 PM</li>
                  <li key={Math.random()}>Meet at: Visitor Center</li>
                </ul>
                {/* <button>Join</button> */}
              </div>
            </div>

          </section>
        </div>
      </main>
    );
  }
}

export default DashBoard;