import React from 'react';
import {Link} from 'react-router-dom';

const SpotIndexItem = props => {
  return (
    <li className="spot-index-item">
      <div className="index-item-style">
      <Link to={`/spots/${props.spot.id}`}>{props.spot.location_name}</Link>
      </div>
    </li>
  );
};

export default SpotIndexItem;