import React from 'react';
import {withRouter} from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.booking;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  updateDate(field) {
    return e => this.setState({ [field]: new Date(e.currentTarget.value) });
  }

  handleSubmit(e) {
    debugger;
    e.preventDefault;
    this.props.processForm(this.state)
  }

  render () {
    return (
      <div>
        <h2>Booking Details:</h2>
        <form onSubmit={this.handleSubmit}>
          <label className="arr-date">Arrival Date:
            {/* <input required
              type="date"
              value={this.state.arrival_date}
              placeholder="Arrival"
              onChange={this.updateDate('arrival_date')} /> */}
            <input 
              type="date" 
              value={this.state.arrival_date}
              onChange={this.updateDate('arrival_date')} 
              placeholder="YYYY-MM-DD" 
              required 
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            />          
          </label>
          <label className="dep-date">Departure Date:
            {/* <input required
              type="date"
              value={this.state.departure_date}
              placeholder="Arrival"
              onChange={this.updateDate('departure_date')} /> */}
            <input 
              type="date" 
              value={this.state.arrival_date}
              onChange={this.updateDate('departure_date')} 
              placeholder="YYYY-MM-DD" 
              required 
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            />          
          </label>
          <label className="num-travelers">Number of travelers in your group:
            <input required
              type="text"
              value={this.state.num_travelers}
              placeholder="# of people"
              onChange={this.update('num_travelers')} />
          </label>
          <button type="submit" className="booking-form-submit-button">{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(BookingForm);