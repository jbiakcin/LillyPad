import React from 'react';
import {withRouter} from 'react-router-dom';
import DashboardHeader from '../dashboard/dashboard_header';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-dates/initialize';
import { SingleDatePicker, DatePicker} from 'react-dates';
// // import 'react-dates/lib/css/_datepicker.css';


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
    // debugger;
    e.preventDefault;
    this.props.processForm(this.state)
      .then(this.props.history.push('/dashboard'));
  }

  render () {
    return (
      <main>
        <div>
          <DashboardHeader logout={this.props.logout}/>
        </div>
        <div>
          <h2>REQUEST TO STAY AT (this will be the spot name)</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="date-join">
              <label className="arr-date">Arrival Date:
                <br/>
                {/* <input required
                  type="date"
                  value={this.state.arrival_date}
                  placeholder="Arrival"
                  onChange={this.updateDate('arrival_date')} /> */}
                {/* <input type="date" value={this.state.arrival_date} onChange={this.updateDate('arrival_date')} placeholder="YYYY-MM-DD" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>           */}
                <input type="date" name={this.state.arrival_date} onChange={this.updateDate('arrival_date')} placeholder="YYYY-MM-DD" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" title="Enter a date in this formart YYYY-MM-DD" />
                {/* <DatePicker className="date-picker"selected={this.state.arrival_date} onChange={this.updateDate('arrival_date')}/> */}
                {/* <SingleDatePicker
                  date={this.state.arrival_date}
                  onDateChange={date => this.setState({ arrival_date: date })}
                  focused={this.state.focused}
                  onFocusChange={({ focused }) => this.setState({ focused })}
                /> */}
              </label>
              <br/>
              <label className="dep-date">Departure Date:
                <br/>
                {/* <input required
                  type="date"
                  value={this.state.departure_date}
                  placeholder="Arrival"
                  onChange={this.updateDate('departure_date')} /> */}
                {/* <input type="date" value={this.state.departure_date} onChange={this.updateDate('departure_date')} placeholder="YYYY-MM-DD" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>           */}
                <input type="date" name={this.state.departure_date} onChange={this.updateDate('departure_date')} placeholder="YYYY-MM-DD" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" title="Enter a date in this formart YYYY-MM-DD" />
                {/* <DatePicker className="date-picker"selected={this.state.departure_date} onChange={this.updateDate('departure_date')} /> */}
              </label>
            </div>
            <div>
              <label className="num-travelers">Number of travelers
                <select className="num-travelers-select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                </select>
              </label>
            </div>
            <div>
              <button type="submit" className="booking-form-submit-button">{this.props.formType}</button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default withRouter(BookingForm);