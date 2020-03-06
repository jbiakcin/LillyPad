import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SpotShow extends React.Component {
  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
    // this.props.fetchUsers(this.props.users);
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
    // const hostEmail = this.props.users[spot.host_id].email;
    return (
      <div>
        <p>{spot.location_name}</p>
        <p>Site to see: {spot.site}</p>
        <p>Host: {spot.host_name}</p>
        <button>Book this spot!</button>
        <Link to="/">Back to all spots</Link>
      </div>
    );
  }
}

export default withRouter(SpotShow);