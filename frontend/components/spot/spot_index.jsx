import React from 'react';
import SpotIndexItem from './spot_index_item';
import {Link} from 'react-router-dom';

class SpotIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSpots();
  }

  render () {
    const {spots, deleteSpot} = this.props;

    return (
      <div>
        <ul>
          {spots.map(spot => (
            <SpotIndexItem 
              spot={spot} 
              key={spot.id}
              deleteSpot={deleteSpot}
            />
          ))}
        </ul>
        <Link to={`/api/spots/new`}>Add a new spot.</Link>
      </div>
    );
  }
}

export default SpotIndex;