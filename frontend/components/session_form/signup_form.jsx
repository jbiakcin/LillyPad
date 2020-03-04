import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger;
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoUser(e) {
    e.preventDefault();
    // debugger;
    const user = {email: 'abc@abc.com', password: 'hunter12'};
    this.props.demoForm(user);
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
    )
  }

  render () {
    return (
      <main className="join-content">
        <div className="sign-up-form">
          <div className="demo-login">
          <h3>Login as a Demo User</h3>
            <form onSubmit={this.demoUser} className="demo-login-form">
              <input className="demo-login-button" type="submit" value="Demo login"/>
            </form>
          </div>
          <div className="login-mid-line">
            <p>or</p>
          </div>
          <form onSubmit={this.handleSubmit} className="signup-box">
            <div className="signup">
              <h3>Sign Up With Email</h3>
              <fieldset>
                <div className="join-name">
                  <div className="join-name-input">
                    <label>First name
                    <input required type="text"
                      value={this.state.firstName}
                      onChange={this.update('firstName')}
                      placeholder="First name"
                    />
                    </label>
                  </div>
                  <div className="join-name-input">
                    <label>Last name
                    <input required type="text"
                        value={this.state.lastName}
                        onChange={this.update('lastName')}
                        placeholder="Last name"
                      />
                    </label>
                  </div>
                </div>
                <label>Email
                  <br/>
                <input required type="email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder="Email"
                  />
                </label>
                <br/>
                <label>Password
                  <p>Must be at least 8 characters</p>
                <input required type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                  />
                </label>
              </fieldset>
              <div className="orange-button">
                <input className="signup-submit" type="submit" value="Join" />
              </div>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default SignupForm;