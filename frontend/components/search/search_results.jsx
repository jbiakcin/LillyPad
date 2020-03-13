import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import DashboardHeader from '../dashboard/dashboard_header';
import SearchResultItem from '../search/search_result_item';

class SearchResults extends React.Component {

  componentDidUpdate(prevProps) {
    const currentSpots = this.props.spot;
    const prevSpots = prevProps.spots;

    if (currentSpots != prevSpots) {
      this.props.clearSearchSpots();
      this.props.findSpots(currentSpots)
    }
  }

  componentDidMount() {
    this.props.findSpots(this.props.spots)
  }

  render () {
    const spots = this.props.spots;
    // debugger;
    let span;
    if (spots.length === 0) {
      span = <h1 className="no-search-results"> Ooooops! No results for the search!</h1>
    } else {
      span = <ul className="spot-search-results">
        {spots.map(spot =>
          <SearchResultItem
            spot={spot}
            key={spot.id}
          />
        )}
      </ul>
    }
    return (
      <main className="search-results-page">
        <div><DashboardHeader logout={this.props.logout} findSpots={this.props.findSpots} /></div>
        <div className="search-results-body">
          <section className="search-results-list">
            {span}
          </section>
        <Link to="/" className="back-to-home-link">Back to Home</Link>
        </div>
      </main>
    );
  }
}

export default withRouter(SearchResults);