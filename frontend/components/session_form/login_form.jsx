import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class LoginForm extends React.Component{
  constructor (props) {
    super(props);
    this.state= {
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <div className="login-page">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-header-box">
            <header className="login-header">Log in to LillyPad</header>
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
            <br/>
            <label>
              <input required type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="input-login-email"
                placeholder="Password"
              />
            </label>
            <br/>
            <input type="submit" className="login-submit" value="Log In"/>
          </div>
          <div className="or-divider"> ----------  or  ----------</div>
          <div className="no-account-yet">
            <p>Don't have an account?</p>
            <Link to="/" className="join-link"><p>Join</p></Link>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm);