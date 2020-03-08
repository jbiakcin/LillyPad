import React from 'react';
import {Link} from 'react-router-dom';

const SpotIndexItem = props => {
  return (
    <li className="index-item-style">
        <Link to={`/spots/${props.spot.id}`}>
        <div className="spot-index-item">
          {props.spot.location_name}
          <img className="spot-index-pix" src={props.spot.photoUrls[0]} />
          <br/>
          <p>Near: {props.spot.site}</p>
          </div>
        </Link>
    </li>
  );
};

export default SpotIndexItem;