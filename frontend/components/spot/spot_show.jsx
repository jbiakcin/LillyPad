import React from 'react';
import {Link, withRouter, NavLink} from 'react-router-dom';
import DashboardHeader from '../dashboard/dashboard_header';

class SpotShow extends React.Component {
  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId)
  }

  componentDidUpdate(prevProps) {
    const currentId = this.props.match.params.spotId;
    const prevId = prevProps.match.params.spotId;

    if (currentId !== prevId) {
      this.props.fetchSpot(currentId);
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
        <div className="spot-show-body">
          <div className="spot-show-detail">
            <header className="spot-detail-header">
              <h1>{spot.location_name}</h1>
            </header>
            <div className="show-spot-info">
              <p>Site to see:  {spot.site}</p>
              <p>Max # of guests:  {spot.max_guests}</p>
            </div>
            <div className="spot-show-pix">
              {spot.photoUrls.map((url, i) => (
                <img className="spot-show-pix-indiv" key={i} src={url} />
              ))}
            </div>
            <Link to={`/spots/${spot.id}/bookings/new`} className="booking-button"><p>Book this spot!</p></Link>
            <br/>
            <Link to="/" className="back-to-link">Back to all spots</Link>
          </div>
          <div className="things-to-do">
            <h2><i className="fas fa-list-alt"></i>&nbsp;&nbsp; Things to do in the area:</h2>
            <ul className="things-to-do-list">
              <li key="thing1"><i className="fas fa-hiking"></i>&nbsp;&nbsp; Hiking</li>
              <li key="thing2"><i className="fas fa-swimmer"></i>&nbsp;&nbsp; Swimming in the nearby lake</li>
              <li key="thing3"><i className="fas fa-mountain"></i>&nbsp;&nbsp; Mountain Climbing</li>
              <li key="thing4"><i className="fas fa-skiing"></i>&nbsp;&nbsp; Skiing in winter</li>
              <li key="thing5"><i className="fas fa-running"></i>&nbsp;&nbsp; Trail running</li>
            </ul>
          </div>

          <div className="reviews">
            <h2>Reviews:</h2>
            <p>No reviews for this spot yet.</p>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(SpotShow);