import React from 'react';
import {Link} from 'react-router-dom';

const SpotIndexItem = props => {
  return (
    <li className="index-item-style">
        <Link to={`/spots/${props.spot.id}`}>
        <div className="spot-index-item">
          {props.spot.location_name}
          <br/>
          picture here
          </div>
        </Link>
    </li>
  );
};

export default SpotIndexItem;