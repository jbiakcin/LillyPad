import React from 'react';
import {withRouter} from 'react-router-dom';

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
      <form onSubmit={this.handleSubmit} className="login-form-box">
        <header className="login-header">Log in to LillyPad</header>
        <div className="login-form"> 
          <label>
            <input required type="email"
              value={this.state.email}
              onChange={this.update('email')}
              className="input-login-email"
              placeholder="Email"
            />
          </label>
          <label>
            <input required type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="input-login-email"
              placeholder="Password"
            />
          </label>
          <input type="submit" className="login-submit" value="Log In"/>
        </div>
      </form>
    )
  }
}

export default withRouter(LoginForm);