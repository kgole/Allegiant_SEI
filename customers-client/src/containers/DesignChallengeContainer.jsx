import React, { Component } from 'react';

class DesignChallengeContainer extends Component {
  componentDidMount() {
    document.title = "Customers Dashboard";
  }

  render() {
    return(
      <div className="container-fluid">
      <div className="dashboard-header">
        <h1>Aaron Rodgers</h1>
      </div>

      <div className="row dashboard-body">
        <div className="col dashboard-sidebar--left">
          <ul className="dashboard-sidebarmenu">
            <li><a className="dashboard-profile--link" href="/profile">Edit Profile</a></li>
          </ul>
        </div>

        <div className="col-10 dashboard-content">
          <p>
          Aaron Charles Rodgers is an American football quarterback for the Green Bay Packers of the National Football League.
          </p>

          <p>
          Rodgers played college football for the California Golden Bears, where he set several career passing records, including lowest single-season and career interception rates.
          </p>
        
          <p>
          He was selected in the first round of the 2005 NFL Draft by the Packers.
          </p>

        </div>
      </div>

      <div className="dashboard-footer">
          Copyright Green Bay Packers LLC
        </div>      
    </div>
    );
  }
}

export default DesignChallengeContainer;