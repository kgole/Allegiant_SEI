import React, { Component } from 'react';

class ChallengeHomeContainer extends Component {
  componentDidMount() {
    document.title = "Allegiant Coding Challenge";
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Allegiant Coding Challenge</h1>
        <ul>
          <li><a href="/WebServiceChallenge">Web Service</a></li>
          <li><a href="/JsAppChallenge">Basic JS Search App</a></li>
          <li><a href="/DesignChallenge">Profile design</a></li>
        </ul>
      </div>
    );
  }
}

export default ChallengeHomeContainer;