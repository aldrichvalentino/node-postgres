import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Profile extends Component {
  render() {
    let users = this.props.users.map((user, index) => {
      return <li key={index}>{user.name}</li>;
    });

    if (this.props.currentUser === "") {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <nav>
          <ul>
            <li>
              <button>logout</button>
            </li>
          </ul>
        </nav>
        <h1>Welcome {this.props.currentUser}!</h1>
        <button
          onClick={() => {
            this.props.getUser();
          }}
        >
          Get users
        </button>
        <ol>{users}</ol>
      </div>
    );
  }
}

export default Profile;
