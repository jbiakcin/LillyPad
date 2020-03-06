import React from 'react';
import SpotForm from './spot_form';
import {withRouter} from 'react-router-dom'

class EditSpotForm extends React.Component {
  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render(){
    const {spot, updateSpot} = this.props;

    if (!spot) return null;
    return (
      <SpotForm spot={spot} updateSpot={updateSpot}/>
    );
  }
}

export default withRouter(EditSpotForm);