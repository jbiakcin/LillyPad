import React from 'react';
import {Link} from 'react-router-dom';

const SpotIndexItem = props => {
  return (
    <li>
      <Link to={`/spots/${props.spot.id}`}>{props.spot.location_name}</Link>
    </li>
  );
};

export default SpotIndexItem;