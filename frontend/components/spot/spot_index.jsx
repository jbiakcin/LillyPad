import React from 'react';
import SpotIndexItem from './spot_index_item';
import {Link, withRouter} from 'react-router-dom';

class SpotIndex extends React.Component {
  // componentDidMount() {
  //   this.props.fetchSpots();
  // }

  render () {
    const {spots, deleteSpot} = this.props;

    return (
      <div>
        <div className="dashboard-spots">
          <h2 className="spots-index-header"><i className="fas fa-frog"></i>&nbsp;&nbsp;HOP ON TO AMERICA'S NATIONAL PARKS WITH LILLYPAD....</h2>
          <ul className="dashboard-spots-index">
            {spots.map(spot => 
              <SpotIndexItem 
                spot={spot} 
                key={spot.id}
                deleteSpot={deleteSpot}
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(SpotIndex);