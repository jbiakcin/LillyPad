import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SpotShow extends React.Component {
  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
    this.props.fetchUsers(this.props.users);
  }
  
  render (){
    const spot = this.props.spot;
    const hostEmail = this.props.users[spot.host_id].email;
    return (
      <div>
        <p>{spot.location_name}</p>
        <p>Site to see: {spot.site}</p>
        <p>Host: {spot.host_name}</p>
        <p>Contact: {hostEmail}</p>
        <Link to="/">Back to all spots</Link>
      </div>
    );
  }
}

export default withRouter(SpotShow);