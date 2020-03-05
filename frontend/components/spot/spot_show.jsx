import React from 'react';
import {Link} from 'react-router-dom';

class SpotShow extends React.Component {
  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId)
  }
  
  render (){
    // const hostEmail = 
    return (
      <div>
        <p>{this.props.spot.location_name}</p>
        <p>Site to see: {this.props.spot.site}</p>
        <p>Host: {this.props.spot.host_name}</p>
        {/* <p>Contact: {hostEmail}</p> */}
        <Link to="/">Back to all spots</Link>
      </div>
    );
  }
}

export default SpotShow;