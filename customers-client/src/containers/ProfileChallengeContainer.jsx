import React, { Component } from 'react';

class ProfileChallengeContainer extends Component {
  componentDidMount() {
    document.title = "Profile - Aaron Rodgers";
  }

  render() {
    return(
      <div className="container-fluid">
        <div className="dashboard-header">
          <h1>Aaron Rodgers</h1>
        </div>

        <div className="row dashboard-body">
          <div className="col-12 dashboard-navigation">
            <a href="/DesignChallenge">&lt; Back to Dashboard</a>
          </div>
          
          <div className="col-6">
            <h2>Aaron Rodgers</h2>
            <p>Email: arod@email.com</p>
            <p>Phone: 123-123-1234</p>
            <p>Phone (Mobile): 123-123-9876</p>
            <p>Since: March 2015</p>
            <p>Location: 162.142.45.140, 8.13333</p>
          </div>

          <div className="col-6">
            <h2>Interests</h2>
            <ul>
              <li>Cheese</li>
              <li>Cowboys fans' tears</li>
              <li>Gunslingin'</li>
            </ul>
          </div>
        </div>

        <div className="row dashboard-body">
          <div className="col">
            <h2>Orders</h2>

            <table className="table table-light">
              <thead class="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>789</td>
                  <td>2018-06-15T16:00:00Z</td>
                  <td>Processing</td>
                  <td><a href="/order/789">View</a></td>
                </tr>
                <tr>
                  <td>456</td>
                  <td>2018-06-10T15:55:00Z</td>
                  <td>Shipped</td>
                  <td><a href="/order/456">View</a></td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>2018-06-01T16:00:00Z</td>
                  <td>Delivered</td>
                  <td><a href="/order/123">View</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="dashboard-footer">
            Copyright 2019 - Green Bay Packers LLC 
          </div>      
      </div>
    );
  }
}

export default ProfileChallengeContainer;