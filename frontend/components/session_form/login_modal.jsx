import React from 'react';
import {withRouter} from 'react-router-dom';
import LoginFormContainer from './login_form_container';


class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(e) {
    this.setState({ show: true });
  }

  hideModal(e) {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="login-modal">
        <button className="splash-body-login-button" onClick={this.showModal}
        >Log In
      </button>
        {this.state.show && (<div className="login-page">
          <div className="gray-modal" onClick={this.hideModal}></div><LoginFormContainer hideModal={this.hideModal} /></div>)
        }
      </div>
    );
  }
}

export default withRouter(LoginModal);