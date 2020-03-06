import React from 'react';
import {Link} from 'react-router-dom';

const SpotIndexItem = props => {
  return (
    <li>
      <Link to={`/spots/${props.spot.id}`}>{props.spot.location_name}</Link>
      <Link to={`/spots/${props.spot.id}/edit`}>Edit this spot</Link>
      <button onClick={() => props.deleteSpot(props.spot.id)}>Delete this spot</button>
    </li>
  );
};

export default SpotIndexItem;