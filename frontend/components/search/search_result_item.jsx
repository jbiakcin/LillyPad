import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultItem = props => {
  return (
    <li className="search-result-item" >
      <Link to={`/spots/${props.spot.id}`}>
        <div className="spot-result-item-details">
          <p className="search-result-location-name">{props.spot.location_name}</p>
          <section className="pix-and-other-info">
            <img className="search-result-pix" src={props.spot.photoUrls[0]} />
            <div className="other-info">
              <h1> Host: Jennie Richardson</h1>
              <h1> Maximum number of guests: {props.spot.max_guests}</h1>
            </div>
          </section>
        </div>
      </Link>
    </li>
  );
};

export default SearchResultItem;