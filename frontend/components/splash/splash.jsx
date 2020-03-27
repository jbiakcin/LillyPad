import React from 'react';
import SplashBody from './splash_body';
import SplashHeader from './splash_header';
import SplashFooter from './splash_footer';

class Splash extends React.Component {
  render () {
    return (
      <div>
        <SplashHeader clearErrors={this.props.clearErrors}/>
        <SplashBody clearErrors={this.props.clearErrors}/>
        <SplashFooter />
      </div>
    );
  }
}

export default Splash;