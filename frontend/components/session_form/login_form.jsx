import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class LoginForm extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  

  render () {
    return (
      
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <span className="x" onClick={this.props.hideModal}>&times;</span>
          <div className="login-header-box">
            <header className="login-header">Log in to ParkHopper</header>
          </div>
          <div className="login-form"> 
            <label>
              <input required type="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="input-login-email"
                placeholder="Email"
              />
            </label>
            <div className="login-error">{this.renderErrors()}</div>
            <label>
              <input required type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="input-login-email"
                placeholder="Password"
              />
            </label>
            
            <br/>
            <button type="submit" className="login-submit">Log In</button>
          </div>
          <div className="login-or-divider">
            <div className="login-or-separator"></div>
            <p className="or">or</p>
          <div className="login-or-separator"></div>
          </div>
          <div className="no-account-yet">
            <p>Don't have an account?</p>
            <Link to="/" className="join-link"><p>Join</p></Link>
          </div>
        </form>
      
    )
  }
}

export default withRouter(LoginForm);