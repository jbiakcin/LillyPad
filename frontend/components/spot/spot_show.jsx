import React from 'react';
import {Link, withRouter, NavLink} from 'react-router-dom';
import DashboardHeader from '../dashboard/dashboard_header';

class SpotShow extends React.Component {
  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  componentDidUpdate(prevProps) {
    const currentId = this.props.match.params.spotId;
    const prevId = prevProps.match.params.spotId;

    if (currentId !== prevId) {
      this.props.fetchSpot(currentId)
    }
  }
  
  render (){
    const spot = this.props.spot;

    if (!spot) {
      return (
        <h2>Loading</h2>
      )
    }
    
    return (
      <main className="spot-show-main">
        <div><DashboardHeader logout={this.props.logout} /></div>
        <section className="spot-detail">
          <header className="spot-detail-header">
            <h1>{spot.location_name}</h1>
          </header>
          <div className="show-spot-info">
            <p>Site to see:  {spot.site}</p>
            <p>Host:  {spot.host_name}</p>
            <p>Max # of guests:  {spot.max_guests}</p>
          </div>
          <div className="spot-show-pix">
            {spot.photoUrls.map((url, i) => (
              <img className="spot-show-pix-indiv" key={i} src={url} />
            ))}
          </div>
          <button className="booking-button">Book this spot!</button>
          <br/>
          <Link to="/" className="back-to-link">Back to all spots</Link>
        </section>
      </main>
    );
  }
}

export default withRouter(SpotShow);