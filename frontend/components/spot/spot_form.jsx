import React from 'react';
import {withRouter} from 'react-router-dom';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.spot;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.processForm(this.state)
  }

  render () {
    return (
      <div>
        <h2>Let's {this.props.formType} the Spot!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Host name: {this.state.host_name}
          </label>
          <label>Site:
            <input required 
            type="text" 
            value={this.state.site} 
            placeholder="Site"
            onChange={this.update('site')}/>
          </label>
          <label>Maximum number of Guests:
            <input required 
            type="text" 
            value={this.state.maxGuests} 
            placeholder="##"
            onChange={this.update('maxGuests')}/>
          </label>
          <button type="submit" className="create-edit-submit-button">{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SpotForm);