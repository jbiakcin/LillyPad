import React from 'react';
import SpotIndexItem from './spot_index_item';
import {Link, withRouter} from 'react-router-dom';

class SpotIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSpots();
  }

  render () {
    const {spots, deleteSpot} = this.props;

    return (
      <div>
        <div>
          <h2>All available spots:</h2>
          <ul>
            {spots.map(spot => (
              <SpotIndexItem 
                spot={spot} 
                key={spot.id}
                deleteSpot={deleteSpot}
              />
            ))}
          </ul>
          <Link to={`/spots/new`}>Add a new spot.</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SpotIndex);