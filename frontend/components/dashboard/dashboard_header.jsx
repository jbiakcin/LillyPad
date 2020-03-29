import React from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';


class DashboardHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      site: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.findSpots(this.state.site)
    .then(() => this.props.history.push('/spots/search'));
  }

  render (){
    return (
      <header className="splash-header">
        <div className="splash-wrapper">
          <span>
            <div className="dashboard-logo">
              <Link to="/" className="dashboard-logo-link"><img src={window.logoURL} width="50" height="50"/></Link>
            </div>
            <form className="search-bar" onSubmit={this.handleSubmit}>
              <i className="fas fa-search"></i>&nbsp;&nbsp;
              <input
                value={this.state.site}
                onChange={this.update('site')}
                className="search" 
                type="text" 
                placeholder="Search by park name"
              />
            </form>
          </span>
          <button 
            className="greeting-logout-button" 
            onClick={this.props.logout}
          >Log Out</button>
        </div>
      </header>
    );
  }
}

export default withRouter(DashboardHeader);