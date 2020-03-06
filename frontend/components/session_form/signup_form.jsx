import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      age: "",
      gender: "",
      city: ""
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
          <li className="error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render () {
    const ageChoices = [<option key='--'>--</option>]
    for (let i = 18; i < 99; i++) {
      ageChoices.push(<option key={i}>{i}</option>);
    }

    let errorMsg;
    if (this.props.errors) {
      errorMsg = <div className="signup-error">{this.renderErrors()}</div>
    }

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
            <div className="form-separator"></div>
            <p>or</p>
            <div className="form-separator"></div>
          </div>
          <form onSubmit={this.handleSubmit} className="signup-box">
            <div className="signup">
              <h3>Sign Up With Email</h3>
              {errorMsg}
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
                <label className="signup-email" >Email
                  <br/>
                  <input required type="email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder="Email"
                  />
                </label>
                <label className="signup-password">Password
                  <p>Must be at least 8 characters</p>
                  <input required type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                  />
                </label>
              </fieldset>
              <div className="join-age-gender">
                <fieldset className="age"> Age
                  <br/>
                  <label >
                    <select className="age-select" required name="age" placeholder="Age" onChange={this.update('age')} key="age">
                      {ageChoices}
                    </select>
                  </label>
                </fieldset>
                <fieldset className="gender">Gender
                  <br/>
                  <label>
                    <select className="gender-select" required name="gender" placeholder="Gender" onChange={this.update('gender')}>
                      <option value="Gender">Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                </fieldset>
              </div>
              <fieldset className="city">City
                <br/>
                <label className="city-input">
                  <input required
                    type="text"
                    value={this.state.city}
                    onChange={this.update('city')}
                    placeholder="Where do you live?"
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